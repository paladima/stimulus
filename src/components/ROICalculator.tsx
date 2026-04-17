"use client";

import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, ChevronUp, TrendingUp, DollarSign, Clock } from "lucide-react";

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

const sanitizeNumericInput = (raw: string, allowDecimal = false): string => {
  let cleaned = allowDecimal
    ? raw.replace(/[^\d.]/g, "")
    : raw.replace(/\D/g, "");
  cleaned = cleaned.replace(/^0+(?=\d)/, "");
  return cleaned;
};

const money = (v: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(v || 0);

const fmtHours = (v: number) => `${Math.round(v || 0).toLocaleString()} h`;

interface GrowthOpts {
  months?: number;
  g0?: number;
  gFloor?: number;
  decay?: number;
  capX?: number;
}

function computeGrowthSeries(base: number, opts: GrowthOpts): number[] {
  const months = clamp(opts.months ?? 12, 2, 36);
  const g0 = clamp(opts.g0 ?? 0.08, 0, 0.5);
  const gFloor = clamp(opts.gFloor ?? 0.02, 0, 0.5);
  const decay = clamp(opts.decay ?? 0.18, 0.01, 5);
  const capX = clamp(opts.capX ?? 2.5, 1.1, 10);

  const series: number[] = [];
  let val = Math.max(0, base || 0);
  for (let i = 0; i < months; i++) {
    if (i === 0) {
      series.push(val);
      continue;
    }
    const r = gFloor + (g0 - gFloor) * Math.exp(-decay * i);
    val = val * (1 + r);
    series.push(Math.min(val, base * capX));
  }
  return series;
}

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; color: string }>;
  label?: string;
}) {
  if (!active || !payload) return null;
  return (
    <div className="roi-tooltip">
      <p className="roi-tooltip-label">{label}</p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color, margin: "2px 0" }}>
          {entry.name}: {money(entry.value)}
        </p>
      ))}
    </div>
  );
}

export default function ROICalculator() {
  const [income, setIncome] = useState(15732);
  const [chatHours, setChatHours] = useState(8);
  const [expenses, setExpenses] = useState(3975);
  const [showDetails, setShowDetails] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const growthSeries = useMemo(
    () =>
      computeGrowthSeries(income, {
        months: 12,
        g0: 0.08,
        gFloor: 0.02,
        decay: 0.18,
        capX: 2.5,
      }),
    [income]
  );

  const oldWay = useMemo(
    () => Array.from({ length: 12 }, () => Math.max(0, income - expenses)),
    [income, expenses]
  );

  const uplift = useMemo(
    () => growthSeries.map((v) => v - income),
    [growthSeries, income]
  );

  const monthlyExpenses = Math.max(0, expenses);
  const expensesSaved = Array.from({ length: 12 }, () => monthlyExpenses);
  const net = uplift.map((u, i) => u + expensesSaved[i]);

  const DAYS_PER_MONTH = 30;
  const timeSavedPerMonth = Math.max(0, chatHours) * DAYS_PER_MONTH;
  const timeSavedTotal = timeSavedPerMonth * 12;

  const sum = (arr: number[]) => arr.reduce((s, x) => s + (x || 0), 0);
  const totals = {
    uplift: sum(uplift),
    expensesSaved: sum(expensesSaved),
    net: sum(net),
    timeM: timeSavedPerMonth,
    time12m: timeSavedTotal,
  };

  const chartData = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        name: `M${i + 1}`,
        ai: Math.round(growthSeries[i]),
        old: Math.round(oldWay[i]),
      })),
    [growthSeries, oldWay]
  );

  return (
    <div className="roi-calculator">
      <h3 className="roi-title">ROI Calculator</h3>
      <p className="roi-subtitle">See how much you could earn with Stimulus AI</p>

      <div className="roi-main-layout">
        <div className="roi-inputs-panel">
          <div className="roi-input-card">
            <label className="roi-label">Monthly Revenue (USD)</label>
            <div className="roi-input-wrapper">
              <span className="roi-input-prefix">$</span>
              <input
                className="roi-big-input"
                type="text"
                inputMode="numeric"
                value={income === 0 ? "" : String(income)}
                placeholder="0"
                onChange={(e) => {
                  const clean = sanitizeNumericInput(e.target.value);
                  setIncome(clean === "" ? 0 : Number(clean));
                }}
              />
            </div>
          </div>
          <div className="roi-input-card">
            <label className="roi-label">Hours / Day in DMs</label>
            <div className="roi-input-wrapper">
              <input
                className="roi-big-input"
                type="text"
                inputMode="decimal"
                value={chatHours === 0 ? "" : String(chatHours)}
                placeholder="0"
                onChange={(e) => {
                  const clean = sanitizeNumericInput(e.target.value, true);
                  setChatHours(clean === "" ? 0 : Number(clean));
                }}
              />
              <span className="roi-input-suffix">h/day</span>
            </div>
          </div>
          <div className="roi-input-card">
            <label className="roi-label">Current Chatter / Tools Cost (USD)</label>
            <div className="roi-input-wrapper">
              <span className="roi-input-prefix">$</span>
              <input
                className="roi-big-input"
                type="text"
                inputMode="numeric"
                value={expenses === 0 ? "" : String(expenses)}
                placeholder="0"
                onChange={(e) => {
                  const clean = sanitizeNumericInput(e.target.value);
                  setExpenses(clean === "" ? 0 : Number(clean));
                }}
              />
            </div>
          </div>
        </div>

        <div className="roi-outcomes-panel">
          <div className="roi-outcome-card roi-outcome-primary">
            <div className="roi-outcome-icon-wrap roi-outcome-icon-gold">
              <TrendingUp size={22} />
            </div>
            <div>
              <span className="roi-outcome-label">Net Gain / Year</span>
              <span className="roi-outcome-value roi-outcome-gold">{money(totals.net)}</span>
            </div>
          </div>

          <div className="roi-outcome-row">
            <div className="roi-outcome-card roi-outcome-secondary">
              <div className="roi-outcome-icon-wrap roi-outcome-icon-blue">
                <DollarSign size={18} />
              </div>
              <div>
                <span className="roi-outcome-label">Cost Saved / Year</span>
                <span className="roi-outcome-value roi-outcome-white">{money(totals.expensesSaved)}</span>
              </div>
            </div>
            <div className="roi-outcome-card roi-outcome-secondary">
              <div className="roi-outcome-icon-wrap roi-outcome-icon-blue">
                <Clock size={18} />
              </div>
              <div>
                <span className="roi-outcome-label">Time Saved / Year</span>
                <span className="roi-outcome-value roi-outcome-white">{fmtHours(totals.time12m)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="roi-disclaimer">
        Estimates based on your inputs. Results vary by audience and pricing.
      </p>

      <button
        className="roi-toggle-btn"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide calculation details" : "Show calculation details"}
        {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {showDetails && (
        <div className="roi-details-panel">
          <div className="roi-details-grid">
            <div className="roi-detail-item">
              <span className="roi-detail-label">Current Monthly Net</span>
              <span className="roi-detail-value">{money(oldWay[0])}</span>
            </div>
            <div className="roi-detail-item">
              <span className="roi-detail-label">Projected with Stimulus (M2)</span>
              <span className="roi-detail-value">{money(growthSeries[1])}</span>
            </div>
            <div className="roi-detail-item">
              <span className="roi-detail-label">Income Uplift (12m)</span>
              <span className="roi-detail-value">{money(totals.uplift)}</span>
            </div>
            <div className="roi-detail-item">
              <span className="roi-detail-label">Time Saved / Month</span>
              <span className="roi-detail-value">{fmtHours(totals.timeM)}</span>
            </div>
          </div>
        </div>
      )}

      <button
        className="roi-toggle-btn"
        onClick={() => setShowChart(!showChart)}
      >
        {showChart ? "Hide projection chart" : "See 12-month projection"}
        {showChart ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {showChart && (
        <div className="roi-chart-section">
          <div className="roi-chart-wrap">
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={chartData}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#98a2b3", fontSize: 12 }}
                  axisLine={{ stroke: "#1d212a" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#98a2b3", fontSize: 12 }}
                  axisLine={{ stroke: "#1d212a" }}
                  tickLine={false}
                  tickFormatter={(v: number) =>
                    v >= 1000 ? `$${(v / 1000).toFixed(0)}k` : `$${v}`
                  }
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ color: "#98a2b3", fontSize: 13, paddingTop: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="ai"
                  name="With Stimulus AI"
                  stroke="#f5d46a"
                  strokeWidth={3}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="old"
                  name="Current workflow"
                  stroke="#a9c7ff"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="6 3"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}
