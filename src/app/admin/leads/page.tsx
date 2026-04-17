"use client";

import React, { useState, useEffect, useCallback, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Search, Download, LogOut, ChevronLeft, ChevronRight,
  Filter, RefreshCw, MessageSquare, Mail, Phone,
  Send, Globe, Clock, User, FileText, X, Check,
  Lock, Eye, EyeOff, AlertCircle, Settings,
} from "lucide-react";

type Lead = {
  id: number;
  createdAt: string;
  source: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  telegram: string | null;
  whatsapp: string | null;
  company: string | null;
  message: string | null;
  interestType: string;
  pageUrl: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  status: "new" | "contacted" | "qualified" | "spam" | "archived";
  notes: string | null;
  rawPayload: Record<string, string> | null;
};

type AdminUser = { id: number; email: string; name: string } | null;

const STATUS_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  new:       { bg: "bg-emerald-50",  text: "text-emerald-700",  border: "border-emerald-200" },
  contacted: { bg: "bg-blue-50",     text: "text-blue-700",     border: "border-blue-200" },
  qualified: { bg: "bg-amber-50",    text: "text-amber-700",    border: "border-amber-200" },
  spam:      { bg: "bg-red-50",      text: "text-red-700",      border: "border-red-200" },
  archived:  { bg: "bg-gray-100",    text: "text-gray-500",     border: "border-gray-200" },
};

const STATUS_OPTIONS = ["all", "new", "contacted", "qualified", "spam", "archived"];
const SOURCE_OPTIONS = ["all", "contact_page", "investors_page", "footer", "popup", "csv_import"];

function StatusBadge({ status }: { status: string }) {
  const colors = STATUS_COLORS[status] || STATUS_COLORS.new;
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize border ${colors.bg} ${colors.text} ${colors.border}`}>
      {status}
    </span>
  );
}

function ContactIcon({ lead }: { lead: Lead }) {
  if (lead.telegram) return <Send size={14} className="text-blue-500" />;
  if (lead.whatsapp) return <Phone size={14} className="text-emerald-500" />;
  if (lead.phone) return <Phone size={14} className="text-gray-500" />;
  if (lead.email) return <Mail size={14} className="text-gray-500" />;
  return null;
}

function getContactValue(lead: Lead): string {
  if (lead.telegram) return lead.telegram;
  if (lead.whatsapp) return lead.whatsapp;
  if (lead.phone) return lead.phone;
  if (lead.email) return lead.email;
  return "—";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) +
    " " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diff = now - then;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function ChangePasswordModal({ onClose }: { onClose: () => void }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (newPassword.length < 8) { setError("New password must be at least 8 characters"); return; }
    if (newPassword !== confirmPassword) { setError("Passwords do not match"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/admin/change-password", {
        method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Failed to change password"); return; }
      setSuccess(true);
      setTimeout(onClose, 1500);
    } catch { setError("Network error"); } finally { setLoading(false); }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/30">
      <div className="w-full max-w-md rounded-2xl p-6 bg-white border border-gray-200 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Change Password</h3>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        {success ? (
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Check size={16} /> Password changed successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm bg-red-50 text-red-700 border border-red-200">
                <AlertCircle size={16} /> {error}
              </div>
            )}
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide mb-1.5 text-gray-500">Current Password</label>
              <div className="relative">
                <input type={showCurrent ? "text" : "password"} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showCurrent ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide mb-1.5 text-gray-500">New Password</label>
              <div className="relative">
                <input type={showNew ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required minLength={8} className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
                <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">{showNew ? <EyeOff size={16} /> : <Eye size={16} />}</button>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wide mb-1.5 text-gray-500">Confirm New Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="w-full px-3 py-2.5 rounded-lg text-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            </div>
            <button type="submit" disabled={loading} className="w-full py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 bg-gray-900 text-white hover:bg-gray-800">
              {loading ? "Changing..." : "Change Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function LeadDetailDrawer({ lead, onClose, onStatusChange, onNotesChange }: {
  lead: Lead; onClose: () => void;
  onStatusChange: (id: number, status: string) => void;
  onNotesChange: (id: number, notes: string) => void;
}) {
  const [notes, setNotes] = useState(lead.notes || "");
  const [saving, setSaving] = useState(false);

  async function saveNotes() {
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/leads/${lead.id}/notes`, {
        method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
        body: JSON.stringify({ notes }),
      });
      if (res.ok) onNotesChange(lead.id, notes);
    } catch { /* ignore */ }
    setSaving(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/20" onClick={onClose}>
      <div className="w-full max-w-lg h-full overflow-y-auto p-6 bg-white border-l border-gray-200 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Lead #{lead.id}</h3>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        <div className="space-y-4 mb-6">
          <InfoRow icon={<User size={16} />} label="Name" value={lead.name || "—"} />
          <InfoRow icon={<Mail size={16} />} label="Email" value={lead.email || "—"} />
          {lead.phone && <InfoRow icon={<Phone size={16} />} label="Phone" value={lead.phone} />}
          {lead.telegram && <InfoRow icon={<Send size={16} />} label="Telegram" value={lead.telegram} />}
          {lead.whatsapp && <InfoRow icon={<Phone size={16} />} label="WhatsApp" value={lead.whatsapp} />}
          {lead.company && <InfoRow icon={<Globe size={16} />} label="Company" value={lead.company} />}
          <InfoRow icon={<Clock size={16} />} label="Submitted" value={formatDate(lead.createdAt)} />
          <InfoRow icon={<Globe size={16} />} label="Source" value={lead.source} />
          <InfoRow icon={<FileText size={16} />} label="Interest" value={lead.interestType} />
          {lead.pageUrl && <InfoRow icon={<Globe size={16} />} label="Page URL" value={lead.pageUrl} />}
          {lead.utmSource && <InfoRow icon={<Globe size={16} />} label="UTM Source" value={lead.utmSource} />}
          {lead.utmMedium && <InfoRow icon={<Globe size={16} />} label="UTM Medium" value={lead.utmMedium} />}
          {lead.utmCampaign && <InfoRow icon={<Globe size={16} />} label="UTM Campaign" value={lead.utmCampaign} />}
        </div>
        {lead.message && (
          <div className="mb-6">
            <label className="block text-xs font-medium uppercase tracking-wide mb-2 text-gray-500">Message</label>
            <div className="p-3 rounded-lg text-sm bg-gray-50 border border-gray-200 text-gray-800">{lead.message}</div>
          </div>
        )}
        <div className="mb-6">
          <label className="block text-xs font-medium uppercase tracking-wide mb-2 text-gray-500">Status</label>
          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.filter((s) => s !== "all").map((s) => {
              const isActive = lead.status === s;
              const colors = STATUS_COLORS[s] || STATUS_COLORS.new;
              return (
                <button key={s} onClick={() => onStatusChange(lead.id, s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all border ${isActive ? `${colors.bg} ${colors.text} ${colors.border}` : "bg-gray-50 text-gray-500 border-gray-200 hover:bg-gray-100"}`}>
                  {s}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-xs font-medium uppercase tracking-wide mb-2 text-gray-500">Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
            className="w-full px-3 py-2.5 rounded-lg text-sm outline-none resize-none bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            placeholder="Add notes about this lead..." />
          <button onClick={saveNotes} disabled={saving}
            className="mt-2 px-4 py-2 rounded-lg text-xs font-medium transition-all disabled:opacity-50 bg-gray-900 text-white hover:bg-gray-800">
            {saving ? "Saving..." : "Save Notes"}
          </button>
        </div>
        {lead.rawPayload != null && (
          <div>
            <label className="block text-xs font-medium uppercase tracking-wide mb-2 text-gray-500">Raw Payload</label>
            <pre className="p-3 rounded-lg text-xs overflow-x-auto bg-gray-50 border border-gray-200 text-gray-600">
              {JSON.stringify(lead.rawPayload, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gray-400">{icon}</span>
      <div>
        <span className="block text-xs text-gray-400">{label}</span>
        <span className="text-sm text-gray-900">{value}</span>
      </div>
    </div>
  );
}

export default function AdminLeadsPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState<AdminUser>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const limit = 25;

  useEffect(() => {
    fetch("/api/admin/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.admin) { setAdmin(data.admin); } else { router.push("/admin/login"); }
        setAuthChecked(true);
      })
      .catch(() => { router.push("/admin/login"); setAuthChecked(true); });
  }, [router]);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(limit));
      if (statusFilter !== "all") params.set("status", statusFilter);
      if (sourceFilter !== "all") params.set("source", sourceFilter);
      if (search.trim()) params.set("search", search.trim());
      const res = await fetch(`/api/admin/leads?${params}`, { credentials: "include" });
      const data = await res.json();
      if (data.success) { setLeads(data.leads); setTotal(data.total); }
    } catch { /* ignore */ }
    setLoading(false);
  }, [page, statusFilter, sourceFilter, search]);

  useEffect(() => {
    if (authChecked && admin) fetchLeads();
  }, [authChecked, admin, fetchLeads]);

  async function handleStatusChange(id: number, status: string) {
    try {
      const res = await fetch(`/api/admin/leads/${id}/status`, {
        method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: status as Lead["status"] } : l)));
        if (selectedLead?.id === id) setSelectedLead((prev) => prev ? { ...prev, status: status as Lead["status"] } : null);
      }
    } catch { /* ignore */ }
  }

  function handleNotesChange(id: number, notes: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
    if (selectedLead?.id === id) setSelectedLead((prev) => prev ? { ...prev, notes } : null);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    router.push("/admin/login");
  }

  function handleExportCSV() {
    const params = new URLSearchParams();
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (sourceFilter !== "all") params.set("source", sourceFilter);
    if (search.trim()) params.set("search", search.trim());
    window.open(`/api/admin/leads/export/csv?${params}`, "_blank");
  }

  const totalPages = Math.ceil(total / limit);

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin w-8 h-8 border-2 rounded-full border-gray-900 border-t-transparent" />
      </div>
    );
  }

  if (!admin) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 px-6 py-3 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Stimulus Admin</h1>
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">Leads</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{admin.name}</span>
          <button onClick={() => setShowPasswordModal(true)} className="p-2 rounded-lg transition-colors text-gray-400 hover:text-gray-600 hover:bg-gray-100" title="Change password">
            <Settings size={16} />
          </button>
          <button onClick={handleLogout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all text-red-600 bg-red-50 hover:bg-red-100 border border-red-200">
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div className="px-6 py-4 flex flex-wrap items-center gap-3 bg-white border-b border-gray-100">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder="Search by name, email, company..."
            className="w-full pl-9 pr-3 py-2 rounded-lg text-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
        </div>
        <div className="flex items-center gap-1.5">
          <Filter size={14} className="text-gray-400" />
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-3 py-2 rounded-lg text-sm outline-none capitalize bg-gray-50 border border-gray-300 text-gray-700">
            {STATUS_OPTIONS.map((s) => (<option key={s} value={s}>{s === "all" ? "All Statuses" : s}</option>))}
          </select>
        </div>
        <select value={sourceFilter} onChange={(e) => { setSourceFilter(e.target.value); setPage(1); }}
          className="px-3 py-2 rounded-lg text-sm outline-none bg-gray-50 border border-gray-300 text-gray-700">
          {SOURCE_OPTIONS.map((s) => (<option key={s} value={s}>{s === "all" ? "All Sources" : s.replace(/_/g, " ")}</option>))}
        </select>
        <div className="flex items-center gap-2 ml-auto">
          <button onClick={fetchLeads} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all bg-white text-gray-600 border border-gray-300 hover:bg-gray-50">
            <RefreshCw size={14} /> Refresh
          </button>
          <button onClick={handleExportCSV} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all bg-gray-900 text-white hover:bg-gray-800">
            <Download size={14} /> Export CSV
          </button>
        </div>
      </div>

      <div className="px-6 py-3 flex items-center gap-4 text-xs text-gray-500">
        <span>{total} lead{total !== 1 ? "s" : ""} total</span>
        {statusFilter !== "all" && <span>Filtered by: <span className="capitalize text-gray-900 font-medium">{statusFilter}</span></span>}
        {search && <span>Search: <span className="text-gray-900 font-medium">&quot;{search}&quot;</span></span>}
      </div>

      <div className="px-6">
        <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Name</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Contact</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Source</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">Status</th>
                <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">When</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} className="px-4 py-12 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-400"><RefreshCw size={16} className="animate-spin" /> Loading...</div>
                </td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan={5} className="px-4 py-12 text-center text-sm text-gray-400">No leads found</td></tr>
              ) : (
                leads.map((lead) => (
                  <tr key={lead.id} onClick={() => setSelectedLead(lead)} className="cursor-pointer transition-colors border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="text-sm font-medium text-gray-900">{lead.name || "—"}</div>
                      <div className="text-xs text-gray-400">{lead.email || ""}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5 text-sm text-gray-700">
                        <ContactIcon lead={lead} />
                        <span className="truncate max-w-[150px]">{getContactValue(lead)}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">{lead.source.replace(/_/g, " ")}</span>
                    </td>
                    <td className="px-4 py-3"><StatusBadge status={lead.status} /></td>
                    <td className="px-4 py-3">
                      <span className="text-xs text-gray-400" title={formatDate(lead.createdAt)}>{timeAgo(lead.createdAt)}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">Page {page} of {totalPages}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}
              className="p-2 rounded-lg transition-all disabled:opacity-30 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}
              className="p-2 rounded-lg transition-all disabled:opacity-30 bg-white text-gray-600 border border-gray-200 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

      {selectedLead && (
        <LeadDetailDrawer lead={selectedLead} onClose={() => setSelectedLead(null)}
          onStatusChange={handleStatusChange} onNotesChange={handleNotesChange} />
      )}
      {showPasswordModal && <ChangePasswordModal onClose={() => setShowPasswordModal(false)} />}
    </div>
  );
}
