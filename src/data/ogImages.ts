/**
 * OG Image URL mapping for all pages with unique Open Graph images.
 * Images are hosted on CDN and referenced by page slug.
 */

const CDN_BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663323957895/M8UYfjNDcAPue58fHhfnp3";

// Default OG image for pages without a unique one
export const DEFAULT_OG_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663323957895/svYQssjkbNyuSvLn.png";

/**
 * Mapping of page slugs to their unique OG image CDN URLs.
 * Covers: homepage, how-it-works, key SEO pages, and all blog articles.
 */
export const ogImageMap: Record<string, string> = {
  // ─── Core Pages ────────────────────────────────────────────
  "homepage": `${CDN_BASE}/homepage_4a4886cf.png`,
  "how-it-works": `${CDN_BASE}/how-it-works_61d3764d.png`,

  // ─── Key SEO Pages ─────────────────────────────────────────
  "onlyfans-ai-chatter": `${CDN_BASE}/onlyfans-ai-chatter_c6fa1e0d.png`,
  "onlyfans-chat-automation": `${CDN_BASE}/onlyfans-chat-automation_48f9fc3a.png`,
  "onlyfans-agency-software": `${CDN_BASE}/onlyfans-agency-software_f0a5bf82.png`,
  "onlyfans-ppv-automation": `${CDN_BASE}/onlyfans-ppv-automation_b190429b.png`,
  "onlyfans-mass-messaging": `${CDN_BASE}/onlyfans-mass-messaging_778bf625.png`,
  "onlyfans-bot": `${CDN_BASE}/onlyfans-bot_a592c8bb.png`,
  "onlyfans-subscriber-growth": `${CDN_BASE}/onlyfans-subscriber-growth_2e0f88e0.png`,
  "onlyfans-revenue-optimization": `${CDN_BASE}/onlyfans-revenue-optimization_e0a890a5.png`,

  // ─── Blog Articles ─────────────────────────────────────────
  "how-onlyfans-agency-increased-revenue-300-percent-with-ai": `${CDN_BASE}/how-onlyfans-agency-increased-revenue-300-percent-with-ai_d425df6a.png`,
  "complete-guide-onlyfans-ppv-pricing": `${CDN_BASE}/complete-guide-onlyfans-ppv-pricing_9ccb971b.png`,
  "ai-chat-automation-vs-human-chatters-2026": `${CDN_BASE}/ai-chat-automation-vs-human-chatters-2026_daa39b0c.png`,
  "onlyfans-agency-scaling-with-ai-chatters": `${CDN_BASE}/onlyfans-agency-scaling-with-ai-chatters_3d968dc1.png`,
  "onlyfans-subscriber-retention-strategies": `${CDN_BASE}/onlyfans-subscriber-retention-strategies_f87d4240.png`,
  "onlyfans-creator-burnout-prevention": `${CDN_BASE}/onlyfans-creator-burnout-prevention_36cf59a6.png`,
  "onlyfans-welcome-message-optimization": `${CDN_BASE}/onlyfans-welcome-message-optimization_45aae48a.png`,
  "onlyfans-content-monetization-trends-2026": `${CDN_BASE}/onlyfans-content-monetization-trends-2026_aba070ec.png`,
};

/**
 * Get the OG image URL for a given page slug.
 * Falls back to the default OG image if no unique image exists.
 */
export function getOgImage(slug: string): string {
  return ogImageMap[slug] || DEFAULT_OG_IMAGE;
}
