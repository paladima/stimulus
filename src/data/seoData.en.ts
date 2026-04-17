/**
 * Shared SEO data for server-side prerendering and client-side rendering.
 * This file is imported by both the Express server (for injecting meta tags + content into HTML)
 * and the client (for dynamic page rendering).
 */

import { ogImageMap, getOgImage } from "./ogImages";

export interface SeoPageMeta {
  slug: string;
  primaryKeyword: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  faq: { question: string; answer: string }[];
  ctaText: string;
}

export interface PageSeoMeta {
  title: string;
  description: string;
  canonical: string;
  h1?: string;
  intro?: string;
  faq?: { question: string; answer: string }[];
  jsonLd?: object[];
  ogImage?: string;
}

const BASE_URL = "https://only-fans.ai";

// ─── SEO Pages Data ───────────────────────────────────────────────
export const seoPages: SeoPageMeta[] = [
  {
    slug: "onlyfans-ai-chatter",
    primaryKeyword: "OnlyFans AI chatter",
    title: "OnlyFans AI Chatter — Automate Fan DMs & Sell PPV 24/7 | Stimulus AI (2026)",
    description: "Stimulus is the #1 OnlyFans AI chatter. Automate fan conversations, sell PPV content around the clock, and replace human chatters. Setup in under 24 hours.",
    h1: "OnlyFans AI Chatter by Stimulus",
    intro: "An OnlyFans AI chatter is an artificial intelligence system designed to handle fan conversations on OnlyFans automatically. Instead of spending 8-12 hours per day manually responding to messages, creators and agencies use AI chatters to maintain engaging, personalized conversations with every subscriber — 24 hours a day, 7 days a week. Stimulus AI is the most advanced OnlyFans AI chatter available, using cutting-edge language models trained specifically for creator-fan interactions.",
    faq: [
      { question: "What is an OnlyFans AI chatter?", answer: "An OnlyFans AI chatter is an AI-powered tool that automatically handles fan conversations on OnlyFans. It learns your communication style, responds to messages 24/7, and strategically sells content to maximize revenue." },
      { question: "How does an AI chatter learn my communication style?", answer: "Stimulus AI analyzes your existing chat history to learn your vocabulary, tone, humor, and personality. It creates a digital twin of your chatting style that fans cannot distinguish from you." },
      { question: "Is it safe to use an AI chatter for OnlyFans?", answer: "Yes. Stimulus AI operates within strict boundaries you set. You control personality traits, conversation limits, and content rules. The AI never crosses your defined limits." },
      { question: "How much revenue increase can I expect with an AI chatter?", answer: "Most creators and agencies see significant revenue increases within the first month. The AI identifies optimal moments for upsells and never misses a conversation opportunity." },
      { question: "Can the AI chatter handle multiple OnlyFans accounts?", answer: "Yes. Stimulus is built for agencies managing multiple models. Each account gets its own AI persona with unique personality, boundaries, and content library." },
    ],
    ctaText: "Start Using AI to Chat on OnlyFans Today",
  },
  {
    slug: "onlyfans-chatter",
    primaryKeyword: "OnlyFans chatter",
    title: "OnlyFans Chatter — AI-Powered Chat That Works 24/7 | Stimulus AI (2026)",
    description: "Need an OnlyFans chatter? Stimulus AI replaces human chatters with intelligent automation — faster responses, zero sick days, and lower cost. Try free.",
    h1: "OnlyFans Chatter — Powered by AI",
    intro: "An OnlyFans chatter is the person (or now, AI) responsible for managing fan conversations, building relationships, and driving sales through direct messages. Traditional OnlyFans chatters are expensive, unreliable, and limited by human capacity. Stimulus AI is the next-generation OnlyFans chatter that works around the clock, learns from every interaction, and consistently outperforms human chatters in both engagement and revenue generation.",
    faq: [
      { question: "What does an OnlyFans chatter do?", answer: "An OnlyFans chatter manages fan conversations, responds to DMs, builds rapport with subscribers, and sells PPV content and custom requests. With Stimulus AI, all of this is automated." },
      { question: "How much does a human OnlyFans chatter cost?", answer: "Human chatters typically charge 10-25% of revenue or $15-30/hour. Stimulus AI costs a fraction of this while handling unlimited conversations simultaneously." },
      { question: "Can AI really replace a human OnlyFans chatter?", answer: "Yes. Stimulus AI learns your exact communication style and maintains personalized conversations that fans cannot distinguish from human interaction. It also identifies sales opportunities better than most human chatters." },
      { question: "How quickly can I switch from human chatters to AI?", answer: "Setup takes less than 24 hours. Upload your chat history, set your preferences, and Stimulus AI begins chatting immediately. Most agencies run AI alongside human chatters during the transition period." },
    ],
    ctaText: "Replace Your Chatters with AI Today",
  },
  {
    slug: "onlyfans-chat-automation",
    primaryKeyword: "OnlyFans chat automation",
    title: "OnlyFans Chat Automation — Automate DMs, PPV & Fan Engagement | Stimulus AI (2026)",
    description: "Automate your OnlyFans chat with Stimulus AI. Smart DM automation handles fan conversations, PPV sales, and engagement 24/7. Setup in minutes, not weeks.",
    h1: "OnlyFans Chat Automation with Stimulus AI",
    intro: "OnlyFans chat automation is the process of using AI technology to handle fan conversations, content delivery, and sales automatically. Instead of manually typing hundreds of messages per day, OnlyFans chat automation tools like Stimulus AI manage the entire conversation lifecycle — from greeting new subscribers to closing PPV sales. This technology has become essential for creators and agencies looking to scale their OnlyFans business without burning out.",
    faq: [
      { question: "What is OnlyFans chat automation?", answer: "OnlyFans chat automation uses AI to handle fan conversations automatically. It includes automated responses, smart content suggestions, PPV sales triggers, and personalized engagement sequences." },
      { question: "Will fans know they're chatting with automation?", answer: "No. Stimulus AI learns your unique communication style and creates responses that are indistinguishable from your own. Fans experience natural, personalized conversations." },
      { question: "Can I customize the automation rules?", answer: "Absolutely. You set conversation boundaries, personality traits, pricing rules, and content delivery schedules. The AI operates within your defined parameters." },
      { question: "Does chat automation work for PPV sales?", answer: "Yes, PPV automation is one of the strongest features. The AI analyzes fan behavior and spending patterns to suggest content at the optimal moment, resulting in significantly higher conversion rates." },
    ],
    ctaText: "Automate Your OnlyFans Chat Now",
  },
  {
    slug: "onlyfans-chatbot",
    primaryKeyword: "OnlyFans chatbot",
    title: "OnlyFans Chatbot — AI That Learns Your Style & Sells Content | Stimulus AI (2026)",
    description: "Stimulus goes beyond a basic OnlyFans chatbot. It learns your voice, adapts to each fan, and drives PPV sales automatically. See why 500+ creators switched.",
    h1: "OnlyFans Chatbot — Beyond Basic Automation",
    intro: "An OnlyFans chatbot is an automated system that responds to fan messages on the platform. However, Stimulus AI goes far beyond a basic OnlyFans chatbot. While traditional chatbots follow rigid scripts and send generic responses, Stimulus uses advanced AI to create truly personalized conversations. It learns your communication style, understands each fan's preferences, and adapts its approach based on the relationship stage — making it the most sophisticated OnlyFans chatbot available.",
    faq: [
      { question: "How is Stimulus different from a basic OnlyFans chatbot?", answer: "Basic chatbots follow scripts. Stimulus AI learns your personality, adapts to each fan individually, and makes intelligent sales decisions based on behavioral analysis. It's a true AI assistant, not a rule-based bot." },
      { question: "Can an OnlyFans chatbot handle complex conversations?", answer: "Stimulus AI handles nuanced, multi-turn conversations naturally. It remembers context, maintains personality consistency, and escalates to human operators when needed." },
      { question: "What happens if the chatbot can't handle a message?", answer: "Stimulus AI flags conversations that need human attention and can seamlessly hand off to you or your team. You always maintain full control." },
      { question: "Is an OnlyFans chatbot worth the investment?", answer: "Most users see ROI within the first week. The AI handles unlimited conversations simultaneously, never sleeps, and consistently drives higher conversion rates than manual chatting." },
    ],
    ctaText: "Try the Smartest OnlyFans Chatbot",
  },
  {
    slug: "onlyfans-agency-software",
    primaryKeyword: "OnlyFans agency software",
    title: "OnlyFans Agency Software — Manage 50+ Models from One Dashboard | Stimulus AI (2026)",
    description: "The #1 OnlyFans agency software for multi-model management. AI chatting, per-model analytics, content library, and revenue tracking — all in one platform.",
    h1: "OnlyFans Agency Software by Stimulus",
    intro: "OnlyFans agency software is a platform designed to help agencies manage multiple creator accounts efficiently. Stimulus provides the most comprehensive OnlyFans agency software available, combining AI-powered chatting, content management, revenue analytics, and multi-model operations into a single dashboard. Whether you manage 5 models or 50, Stimulus scales with your agency and automates the most time-consuming aspects of OnlyFans management.",
    faq: [
      { question: "What features does OnlyFans agency software include?", answer: "Stimulus includes AI chatting for all models, centralized content library, per-model analytics, revenue tracking, automated content delivery, and team management tools." },
      { question: "How many models can I manage with Stimulus?", answer: "There's no limit. Stimulus is built to scale — agencies managing 50+ models use our platform daily. Each model gets dedicated AI persona, content library, and analytics." },
      { question: "Can my team access the agency software?", answer: "Yes. Stimulus supports team roles and permissions. Assign managers to specific models, control access levels, and track team performance from the admin dashboard." },
      { question: "How does agency software help with revenue?", answer: "AI chatting alone typically increases per-model revenue significantly. Combined with content optimization, pricing intelligence, and automated upsells, agencies see meaningful revenue growth across their entire roster." },
    ],
    ctaText: "Scale Your Agency with Stimulus",
  },
  {
    slug: "onlyfans-crm",
    primaryKeyword: "OnlyFans CRM",
    title: "OnlyFans CRM — AI Fan Profiling, Engagement Tracking & Revenue Insights (2026)",
    description: "Manage every fan relationship with Stimulus CRM. Track spending, engagement scores, and purchase history — then let AI personalize every conversation.",
    h1: "OnlyFans CRM — Manage Fan Relationships with AI",
    intro: "An OnlyFans CRM (Customer Relationship Management) system tracks every interaction between creators and their subscribers. Stimulus AI integrates CRM capabilities directly into its chat automation platform, giving you deep insights into each fan's behavior, spending patterns, and engagement history — then uses that data to drive personalized conversations and maximize lifetime value.",
    faq: [
      { question: "What is an OnlyFans CRM?", answer: "An OnlyFans CRM tracks all fan interactions, spending history, preferences, and engagement patterns. Stimulus uses this data to automate personalized conversations and optimize content delivery for each subscriber." },
      { question: "How does CRM help increase OnlyFans revenue?", answer: "By understanding each fan's behavior and preferences, the CRM enables targeted content offers, personalized pricing, and engagement sequences that significantly increase conversion rates and subscriber retention." },
      { question: "Can I see analytics for individual fans?", answer: "Yes. Stimulus provides detailed fan profiles showing spending history, engagement score, content preferences, conversation history, and predicted lifetime value." },
      { question: "Does the CRM work with AI chatting?", answer: "Absolutely. The CRM data directly feeds into the AI chatter, enabling it to make smarter conversation decisions based on each fan's unique profile and history." },
    ],
    ctaText: "Start Managing Fan Relationships with AI",
  },
  {
    slug: "hire-onlyfans-chatter",
    primaryKeyword: "hire OnlyFans chatter",
    title: "Hire an OnlyFans Chatter in 2026 — Or Save 60-80% with AI Instead",
    description: "Looking to hire an OnlyFans chatter? Compare costs, risks, and performance of human chatters vs Stimulus AI. Most agencies save 60-80% after switching.",
    h1: "Hire an OnlyFans Chatter — The AI Alternative",
    intro: "When you need to hire an OnlyFans chatter, you face a difficult choice: spend thousands on unreliable human chatters, or switch to AI that works 24/7 at a fraction of the cost. Stimulus AI is the modern alternative to hiring OnlyFans chatters. It learns your communication style, handles unlimited conversations simultaneously, and consistently outperforms human chatters in both engagement metrics and revenue generation.",
    faq: [
      { question: "How much does it cost to hire an OnlyFans chatter?", answer: "Human OnlyFans chatters typically charge 10-25% of revenue or $15-30/hour. For agencies, this adds up to thousands per month per model. Stimulus AI costs significantly less while handling more conversations." },
      { question: "What are the risks of hiring human chatters?", answer: "Human chatters can be unreliable, leak content, share account access, or provide inconsistent quality. AI eliminates these risks while maintaining consistent performance 24/7." },
      { question: "Can AI really match a human chatter's quality?", answer: "Stimulus AI often exceeds human chatter quality. It learns your exact style, never has bad days, responds instantly, and uses data-driven insights to optimize every conversation for maximum revenue." },
      { question: "Should I replace all my chatters with AI?", answer: "Many agencies start by running AI alongside human chatters, then gradually transition. Stimulus handles the majority of conversations while your team focuses on high-value interactions." },
    ],
    ctaText: "Switch from Human Chatters to AI",
  },
  {
    slug: "find-onlyfans-chatter",
    primaryKeyword: "find OnlyFans chatter",
    title: "Find an OnlyFans Chatter — Get AI Running in Under 24 Hours | Stimulus (2026)",
    description: "Stop searching for OnlyFans chatters. Stimulus AI is ready in under 24 hours — no interviews, no training, no sick days. Handles unlimited fans 24/7.",
    h1: "Find an OnlyFans Chatter — Instantly with AI",
    intro: "Trying to find an OnlyFans chatter can be frustrating — vetting candidates, negotiating rates, and dealing with unreliable workers. Stimulus eliminates the search entirely. Instead of spending weeks trying to find an OnlyFans chatter, you can have an AI-powered chatter up and running in under 24 hours.",
    faq: [
      { question: "Where do people usually find OnlyFans chatters?", answer: "Traditionally, creators find chatters through agencies, freelance platforms, or social media. However, AI chatters like Stimulus are becoming the preferred choice due to reliability and performance." },
      { question: "How fast can I get an AI chatter set up?", answer: "Stimulus AI can be set up in under 24 hours. Upload your chat history, configure your preferences, and the AI starts chatting immediately — no interviews or training required." },
      { question: "What if I already have chatters and want to add AI?", answer: "Stimulus works alongside human chatters. Many agencies use AI for the majority of conversations while keeping human chatters for specific high-value interactions." },
      { question: "Is AI chatting reliable compared to human chatters?", answer: "AI is more reliable — it never calls in sick, never has bad days, and responds to every message instantly. Stimulus maintains consistent quality across all conversations 24/7." },
    ],
    ctaText: "Get Your AI Chatter in 24 Hours",
  },
  {
    slug: "sexter-onlyfans",
    primaryKeyword: "sexter OnlyFans",
    title: "What Is a Sexter on OnlyFans? AI Automation Alternative Explained (2026)",
    description: "Learn what a sexter means on OnlyFans and how AI chat automation replaces manual DM selling. Compare costs, risks, and scalability of each approach.",
    h1: "What Is a Sexter on OnlyFans?",
    intro: "A sexter is a slang term for a person handling flirty DMs and sales conversations on platforms like OnlyFans. Traditionally, OnlyFans sexters are hired to manage subscriber conversations, build rapport, and drive PPV sales. Stimulus AI is the modern, professional alternative — an automation tool that handles these conversations intelligently, stays within your defined boundaries, and consistently drives higher revenue than manual sexting.",
    faq: [
      { question: "What is an OnlyFans sexter?", answer: "A sexter is a person (or AI) who handles DM conversations and sales on OnlyFans. It's a common industry term for chat operators who manage subscriber engagement and content sales." },
      { question: "How does AI sexting automation work?", answer: "Stimulus AI learns your communication style and manages conversations within boundaries you set. It handles engagement, builds rapport, and suggests content purchases at optimal moments — all automatically." },
      { question: "Is AI sexting safe and professional?", answer: "Yes. Stimulus operates as a business automation tool with strict boundary controls. You define conversation limits, and the AI never crosses them. All interactions are professional and within your guidelines." },
      { question: "Can AI replace a human sexter effectively?", answer: "Stimulus AI consistently outperforms human sexters in both response time and revenue generation. It handles unlimited conversations simultaneously and uses data-driven insights to optimize every interaction." },
    ],
    ctaText: "Automate Your OnlyFans Messaging",
  },
  {
    slug: "onlyfans-chat-management-tool",
    primaryKeyword: "OnlyFans chat management tool",
    title: "OnlyFans Chat Management Tool — AI Conversations + Analytics in One Place (2026)",
    description: "Stimulus is the all-in-one OnlyFans chat management tool. AI-powered conversations, content delivery, subscriber analytics, and multi-model support.",
    h1: "OnlyFans Chat Management Tool by Stimulus",
    intro: "An OnlyFans chat management tool is software that helps creators and agencies organize, automate, and optimize their fan conversations. Stimulus is the most advanced OnlyFans chat management tool available, combining AI-powered chatting with content management, subscriber analytics, and revenue optimization.",
    faq: [
      { question: "What features should an OnlyFans chat management tool have?", answer: "Essential features include AI-powered responses, content library management, subscriber analytics, conversation templates, PPV automation, and multi-account support. Stimulus includes all of these and more." },
      { question: "How does a chat management tool increase revenue?", answer: "By automating conversations, optimizing content delivery timing, and using AI to identify sales opportunities, a chat management tool like Stimulus significantly increases revenue." },
      { question: "Can I manage multiple OnlyFans accounts with one tool?", answer: "Yes. Stimulus supports unlimited accounts with individual AI personas, content libraries, and analytics for each model. Perfect for agencies managing multiple creators." },
      { question: "Is Stimulus easy to set up as a chat management tool?", answer: "Setup takes less than 24 hours. Connect your accounts, upload content, import chat history, and the AI begins managing conversations immediately. No technical expertise required." },
    ],
    ctaText: "Try the Best Chat Management Tool",
  },
  {
    slug: "onlyfans-chatter-salary",
    primaryKeyword: "OnlyFans chatter salary",
    title: "OnlyFans Chatter Salary 2026 — Hourly Rates, Commissions & AI Impact",
    description: "How much does an OnlyFans chatter earn in 2026? Full salary breakdown: $12-50+/hr by experience, commission models, and how AI is reshaping chatter pay.",
    h1: "OnlyFans Chatter Salary — How Much Do Chatters Earn?",
    intro: "If you are considering a career as an OnlyFans chatter or thinking about hiring one, understanding the salary landscape is essential. OnlyFans chatter salaries vary widely depending on experience, the agency, and the compensation model.",
    faq: [
      { question: "How much does an OnlyFans chatter make per hour?", answer: "OnlyFans chatters earn $12-18/hour at entry level, $18-30/hour at mid-level, and $30-50+/hour for senior positions." },
      { question: "What is the average monthly salary for an OnlyFans chatter?", answer: "Monthly earnings range from $1,500-$3,000 for beginners to $10,000-$20,000 for experienced chatters managing high-revenue accounts." },
      { question: "Do OnlyFans chatters get paid hourly or commission?", answer: "Both models exist. Some agencies pay flat hourly rates, others pay commission (10-25% of revenue generated), and many use a hybrid model." },
      { question: "How does AI affect OnlyFans chatter salaries?", answer: "AI automation is reducing demand for routine chat work, putting downward pressure on entry-level salaries. Chatters who specialize in AI oversight can command premium rates." },
      { question: "Can you make six figures as an OnlyFans chatter?", answer: "Yes, but it requires managing multiple high-revenue accounts, consistently high conversion rates, and typically a senior position at an established agency." },
    ],
    ctaText: "Replace Chatter Salaries with AI Automation",
  },
  {
    slug: "ai-vs-human-onlyfans-chatter",
    primaryKeyword: "AI vs human OnlyFans chatter",
    title: "AI vs Human OnlyFans Chatter — Cost, Speed & Revenue Compared (2026)",
    description: "Side-by-side comparison: AI vs human OnlyFans chatters. See real data on cost (60-80% savings), response time (5s vs 10min), and revenue impact.",
    h1: "AI vs Human OnlyFans Chatter — Which One Wins?",
    intro: "The debate between AI and human OnlyFans chatters has become the defining question for creators and agencies in 2026. This comprehensive comparison examines cost, performance, availability, scalability, risk, and ROI.",
    faq: [
      { question: "Is AI better than a human OnlyFans chatter?", answer: "For the majority of conversations, AI outperforms human chatters in speed, consistency, and conversion rates. Human chatters retain an edge in complex negotiations." },
      { question: "How much cheaper is AI compared to human chatters?", answer: "AI costs 60-80% less than human chatter teams. A 24/7 human team costs $9,000-$24,000/month per account, while Stimulus AI costs a fraction of that." },
      { question: "Can AI really replace human chatters completely?", answer: "AI can handle 90-95% of conversations effectively. Most agencies retain a small human team for complex custom requests and VIP interactions." },
      { question: "Do fans notice when they are chatting with AI?", answer: "No. Stimulus AI learns the creator's exact communication style. Fans experience natural, personalized conversations indistinguishable from human interaction." },
      { question: "What is the revenue difference between AI and human chatters?", answer: "Agencies using Stimulus AI report significantly higher revenue compared to human-only chat teams, primarily from 24/7 availability and faster response times." },
    ],
    ctaText: "See How AI Outperforms Human Chatters",
  },
  {
    slug: "onlyfans-chatter-job",
    primaryKeyword: "OnlyFans chatter job",
    title: "OnlyFans Chatter Job 2026 — Salary, Skills, Remote Work & AI Impact",
    description: "Everything about the OnlyFans chatter job in 2026: responsibilities, pay ($12-50+/hr), required skills, remote work options, and how AI is changing the role.",
    h1: "OnlyFans Chatter Job — What You Need to Know",
    intro: "The OnlyFans chatter job has emerged as one of the most talked-about remote work opportunities in the creator economy. This guide covers responsibilities, skills, salary, and the impact of AI on the profession.",
    faq: [
      { question: "What is an OnlyFans chatter job?", answer: "An OnlyFans chatter job involves managing DM conversations with subscribers on behalf of content creators. Chatters engage fans, sell PPV content, and maximize revenue." },
      { question: "How much do OnlyFans chatters get paid?", answer: "Pay ranges from $12-18/hour for entry-level to $30-50+/hour for senior chatters. Top performers can earn $10,000-$20,000 per month." },
      { question: "Do you need experience to become an OnlyFans chatter?", answer: "No formal experience is required, but strong written communication skills and sales ability are essential. Most agencies provide training." },
      { question: "Is the OnlyFans chatter job being replaced by AI?", answer: "AI is automating routine chat tasks, reducing the number of chatters needed per account. The role is evolving to AI oversight and quality assurance." },
      { question: "Can you work as an OnlyFans chatter from home?", answer: "Yes, virtually all OnlyFans chatter positions are fully remote with flexible scheduling." },
    ],
    ctaText: "See How AI Is Transforming OnlyFans Chat Jobs",
  },
  {
    slug: "how-to-hire-onlyfans-chatter",
    primaryKeyword: "how to hire OnlyFans chatter",
    title: "How to Hire an OnlyFans Chatter — Full 2026 Guide (+ AI Alternative)",
    description: "Step-by-step guide to hiring an OnlyFans chatter: sourcing, screening, pay rates ($12-50/hr), training — plus why most agencies now choose AI instead.",
    h1: "How to Hire an OnlyFans Chatter — Complete 2026 Guide",
    intro: "Hiring an OnlyFans chatter is one of the most important decisions a creator or agency can make. This guide walks you through every step of the hiring process and examines why many are choosing AI instead.",
    faq: [
      { question: "How do I hire an OnlyFans chatter?", answer: "Define the role, post on specialized job boards and social media, screen candidates with writing tests, conduct a supervised trial period, and provide thorough training." },
      { question: "Where is the best place to find OnlyFans chatters?", answer: "Specialized creator economy job boards, Twitter/X and Telegram communities, freelance platforms, and referrals from other creators or agencies." },
      { question: "How much should I pay an OnlyFans chatter?", answer: "Entry-level: $12-18/hour, mid-level: $18-30/hour, senior: $30-50+/hour. Commission models range from 10-25% of revenue generated." },
      { question: "Should I hire a chatter or use AI?", answer: "For most creators and agencies, AI automation is more cost-effective, reliable, and secure. Consider a hybrid model for complex interactions." },
      { question: "How long does it take to train a new chatter?", answer: "Plan for 1-2 weeks of supervised training covering communication style, content library, pricing, boundaries, and sales strategy." },
    ],
    ctaText: "Skip Hiring — Try AI Chat Automation Instead",
  },
  {
    slug: "onlyfans-chatter-cost",
    primaryKeyword: "OnlyFans chatter cost",
    title: "OnlyFans Chatter Cost 2026 — Full Pricing Breakdown (Hourly + Commission)",
    description: "What does an OnlyFans chatter really cost? Hourly rates, commissions, hidden costs (recruitment, turnover), and how AI cuts expenses 60-80%.",
    h1: "OnlyFans Chatter Cost — What You'll Really Pay",
    intro: "Understanding the true cost of an OnlyFans chatter is critical before committing to a hiring decision. This guide breaks down every cost component and compares it against AI automation.",
    faq: [
      { question: "How much does an OnlyFans chatter cost per hour?", answer: "OnlyFans chatters cost $12-18/hour at entry level, $18-30/hour at mid-level, and $30-50+/hour for senior positions. Commission-based chatters typically take 10-25% of revenue generated." },
      { question: "What are the hidden costs of OnlyFans chatters?", answer: "Hidden costs include recruitment ($500-2,000/hire), training (1-2 weeks paid), turnover replacement ($2,000-5,000 every 3-6 months), management overhead, software tools, and lost revenue during coverage gaps." },
      { question: "How much can I save by switching to AI?", answer: "Most agencies save 60-80% on chat operations by switching to Stimulus AI while also increasing revenue." },
      { question: "Is AI cheaper than commission-based chatters?", answer: "Yes. Commission-based chatters take 10-25% of all revenue. As revenue grows, commission costs scale linearly. AI costs remain fixed." },
      { question: "What is the ROI timeline for switching to AI?", answer: "Most agencies see positive ROI within the first month from combined cost savings and revenue increase." },
    ],
    ctaText: "Calculate Your Savings with AI Automation",
  },
  {
    slug: "best-onlyfans-chat-automation",
    primaryKeyword: "best OnlyFans chat automation",
    title: "Best OnlyFans Chat Automation Tool 2026 — 5 Platforms Compared | Stimulus AI",
    description: "We compared 5 OnlyFans chat automation tools on features, AI quality, pricing, and agency support. See why Stimulus AI ranks #1 for creators and agencies.",
    h1: "Best OnlyFans Chat Automation — Tool Comparison 2026",
    intro: "Finding the best OnlyFans chat automation tool can make or break your creator business. This guide compares the leading solutions across features, performance, pricing, and real-world results.",
    faq: [
      { question: "What is the best OnlyFans chat automation tool?", answer: "Stimulus AI is the leading OnlyFans chat automation tool, offering advanced AI conversation, PPV automation, content management, and multi-account support." },
      { question: "How does chat automation differ from a chatbot?", answer: "Chat automation like Stimulus uses advanced AI trained on creator-fan interactions. Chatbots use simple decision trees and canned responses that fans easily detect." },
      { question: "Can chat automation replace human chatters?", answer: "Yes. Stimulus AI handles 90-95% of conversations autonomously with quality matching or exceeding human chatters." },
      { question: "How quickly can I set up chat automation?", answer: "Stimulus AI can be set up in under 24 hours. Import chat history, upload content, configure preferences, and the AI begins immediately." },
      { question: "How much does the best chat automation cost?", answer: "Stimulus AI costs a fraction of human chatter teams. Most agencies report 60-80% total cost reduction while achieving higher revenue." },
    ],
    ctaText: "Try the Best OnlyFans Chat Automation Tool",
  },
  {
    slug: "onlyfans-agency-chat-management",
    primaryKeyword: "OnlyFans agency chat management",
    title: "OnlyFans Agency Chat Management — Scale to 50+ Models with AI (2026)",
    description: "How top OnlyFans agencies manage chat at scale. Team structures, KPIs, multi-model workflows, and how AI reduces staffing needs by 90%. Full guide.",
    h1: "OnlyFans Agency Chat Management — Scale Without Limits",
    intro: "Managing chat operations across multiple OnlyFans creator accounts is the biggest operational challenge agencies face. This guide covers how successful agencies structure their chat operations and why AI automation is the standard for scaling.",
    faq: [
      { question: "How do OnlyFans agencies manage chat operations?", answer: "Agencies traditionally use hierarchical chat teams. Modern agencies are switching to AI automation to reduce costs and improve consistency." },
      { question: "How many chatters does an agency need per model?", answer: "For 24/7 coverage, agencies need 3-4 chatters per creator account. AI automation reduces this to 3-5 human operators total." },
      { question: "What KPIs should agencies track?", answer: "Key KPIs include response time, PPV conversion rate, revenue per subscriber, subscriber retention, and cost per dollar of revenue." },
      { question: "How does AI help agencies scale?", answer: "AI eliminates linear cost scaling. Each new creator can be onboarded in hours with minimal incremental cost." },
      { question: "What is the AI-first agency model?", answer: "AI handles all routine conversations with a small human team managing exceptions. This reduces staffing needs by 90%+." },
    ],
    ctaText: "Scale Your Agency with AI Chat Management",
  },
  {
    slug: "onlyfans-ppv-automation",
    primaryKeyword: "OnlyFans PPV automation",
    title: "OnlyFans PPV Automation — AI-Optimized Timing, Pricing & Personalization (2026)",
    description: "Automate OnlyFans PPV sales with AI. Stimulus optimizes offer timing, dynamic pricing, and personalization per subscriber. See results in the first week.",
    h1: "OnlyFans PPV Automation — Sell More, Automatically",
    intro: "Pay-per-view content is the primary revenue driver for most OnlyFans creators. PPV automation uses AI to optimize every aspect of the sales process for maximum revenue.",
    faq: [
      { question: "What is OnlyFans PPV automation?", answer: "PPV automation uses AI to optimize the timing, pricing, and personalization of pay-per-view content offers on OnlyFans." },
      { question: "How much can PPV automation increase revenue?", answer: "Most creators see significant PPV revenue increases with Stimulus AI from better timing, personalization, and 24/7 coverage." },
      { question: "Does AI PPV automation feel natural to fans?", answer: "Yes. Stimulus AI weaves offers into natural conversations rather than sending mass blasts." },
      { question: "Can I control what content the AI offers?", answer: "Yes. You configure your content library with pricing, categories, and rules. The AI selects from your approved content." },
      { question: "How quickly does PPV automation show results?", answer: "Most creators see measurable revenue improvement within the first week." },
    ],
    ctaText: "Automate Your PPV Sales with AI",
  },
  {
    slug: "onlyfans-dm-automation",
    primaryKeyword: "OnlyFans DM automation",
    title: "OnlyFans DM Automation — AI Responds in 5 Seconds, 24/7 | Stimulus (2026)",
    description: "Never miss a DM again. Stimulus AI handles OnlyFans messages in under 5 seconds, responds in your voice, and drives PPV sales around the clock.",
    h1: "OnlyFans DM Automation — Never Miss a Message Again",
    intro: "Direct messages are the lifeblood of OnlyFans revenue. Every unanswered DM is lost revenue. OnlyFans DM automation solves this by using AI to handle every incoming message instantly, 24/7.",
    faq: [
      { question: "What is OnlyFans DM automation?", answer: "DM automation uses AI to handle all incoming direct messages on OnlyFans automatically. The AI responds in the creator's voice and drives PPV sales 24/7." },
      { question: "Can AI really handle all my DMs?", answer: "Stimulus AI handles 90-95% of DM conversations autonomously. Complex requests are automatically flagged for human review." },
      { question: "Will fans know they are talking to AI?", answer: "No. Stimulus AI is trained on your actual chat history and matches your exact communication style." },
      { question: "How fast does the AI respond to DMs?", answer: "Stimulus AI responds in under 5 seconds, compared to 1-15 minutes for human chatters." },
      { question: "Does DM automation increase revenue?", answer: "Yes. Most creators see significant revenue increases from faster responses, 24/7 coverage, and AI-optimized PPV timing." },
    ],
    ctaText: "Automate Your OnlyFans DMs Today",
  },
  {
    slug: "compliance",
    primaryKeyword: "OnlyFans automation compliance",
    title: "Compliance & Platform Safety — How Stimulus AI Stays Within OnlyFans Rules (2026)",
    description: "Stimulus AI operates within OnlyFans platform guidelines. Learn about our compliance framework, data protection, GDPR, and platform-safe automation approach.",
    h1: "Compliance & Platform Safety at Stimulus AI",
    intro: "Operating within platform guidelines is foundational to sustainable OnlyFans business growth. This page explains our compliance framework and platform-safe automation approach.",
    faq: [
      { question: "Is using AI automation on OnlyFans allowed?", answer: "Yes. Stimulus AI automates conversation management, which is the same activity human chatters perform. We operate within platform guidelines." },
      { question: "Can my account get banned for using Stimulus AI?", answer: "No. Stimulus AI operates within normal platform usage patterns and does not trigger platform detection systems." },
      { question: "Does Stimulus comply with GDPR?", answer: "Yes. We maintain full GDPR compliance including data minimization, right to deletion, and transparent data processing policies." },
      { question: "Can the AI say things I haven't approved?", answer: "No. The AI strictly operates within boundaries you configure and only discusses topics you have authorized." },
      { question: "How does Stimulus handle platform policy changes?", answer: "Our compliance team monitors policies continuously and adjusts systems proactively before changes take effect." },
    ],
    ctaText: "Start Using Compliant AI Automation",
  },
  {
    slug: "stimulus-vs-human-chatters",
    primaryKeyword: "Stimulus vs human chatters",
    title: "Stimulus AI vs Human Chatters — Real Performance Data Compared (2026)",
    description: "30-day side-by-side test: Stimulus AI vs human chatters. Real data on cost (60-80% savings), response time (5s vs 10min), and revenue per subscriber.",
    h1: "Stimulus AI vs Human Chatters — The Definitive Comparison",
    intro: "This comparison is based on real performance data from agencies that tested both approaches side by side for 30+ days.",
    faq: [
      { question: "Is Stimulus AI better than human chatters?", answer: "For 90-95% of conversations, yes. Stimulus outperforms in response time, consistency, conversion rates, and cost efficiency." },
      { question: "How much money will I save switching to Stimulus?", answer: "Most agencies save 60-80% on chat management costs while increasing revenue." },
      { question: "Will my fans notice the switch?", answer: "No. In blind tests, subscribers could not distinguish between AI and human responses." },
      { question: "Can I keep some human chatters alongside Stimulus?", answer: "Yes. The hybrid model is recommended — AI handles routine conversations while humans manage VIP interactions." },
      { question: "How long does the transition take?", answer: "Most agencies complete the transition in 2-4 weeks by running Stimulus alongside existing chatters first." },
    ],
    ctaText: "Switch from Human Chatters to Stimulus AI",
  },
  {
    slug: "stimulus-vs-chatbot",
    primaryKeyword: "Stimulus vs OnlyFans chatbot",
    title: "Stimulus AI vs Generic Chatbots — Why Basic Bots Fail on OnlyFans (2026)",
    description: "Generic chatbots get 3-8% conversion. Stimulus AI gets 18-28%. See the full feature comparison and why domain-specific AI wins on OnlyFans.",
    h1: "Stimulus AI vs Generic Chatbots — Not All Automation Is Equal",
    intro: "Generic chatbots fail on OnlyFans because they lack domain-specific training. This comparison explains exactly why and what makes Stimulus different.",
    faq: [
      { question: "Can I use a regular chatbot for OnlyFans?", answer: "Technically yes, but generic chatbots achieve only 3-8% conversion rates vs 18-28% with Stimulus AI." },
      { question: "What makes Stimulus different from ChatGPT?", answer: "Stimulus is purpose-built for OnlyFans with specialized training in personality matching, PPV sales, and platform compliance." },
      { question: "Will fans know I'm using a chatbot?", answer: "With generic chatbots, fans usually notice. With Stimulus, fans cannot distinguish AI from the creator's own messages." },
      { question: "Is Stimulus safer than generic chatbots?", answer: "Yes. Generic chatbots often trigger platform detection. Stimulus is designed specifically for OnlyFans compliance." },
      { question: "How much better is Stimulus than a generic chatbot?", answer: "3-5x higher conversion rates, 2-3x higher revenue per subscriber, and zero platform safety risks." },
    ],
    ctaText: "Upgrade from Generic Chatbots to Stimulus AI",
  },
  {
    slug: "stimulus-vs-onlyfans-agency",
    primaryKeyword: "Stimulus vs OnlyFans agency",
    title: "Stimulus AI vs OnlyFans Agencies — Keep 80-100% of Your Revenue (2026)",
    description: "Agencies take 40-60% of your earnings. Stimulus AI provides the same chat automation at a fixed monthly fee. Compare and keep more of your revenue.",
    h1: "Stimulus AI vs OnlyFans Agencies — Which Model Wins?",
    intro: "Traditional agencies take 40-60% of your revenue. Stimulus AI provides the same automation at a fraction of the cost.",
    faq: [
      { question: "How much do OnlyFans agencies charge?", answer: "Most agencies charge 40-60% of total revenue. For a $20,000/month creator, that's $8,000-$12,000 per month." },
      { question: "Can Stimulus replace my agency?", answer: "For chat management and sales automation, yes. For content strategy, you may want independent specialists at a fraction of agency costs." },
      { question: "Will I lose revenue if I leave my agency?", answer: "Most creators see revenue increase after switching to Stimulus due to 24/7 coverage and higher conversion rates." },
      { question: "Is Stimulus cheaper than an agency?", answer: "Dramatically. Stimulus costs a fixed monthly fee regardless of revenue, while agencies take a growing percentage." },
      { question: "Can agencies use Stimulus too?", answer: "Yes. Many agencies use Stimulus to reduce operational costs and improve service quality for their creators." },
    ],
    ctaText: "Keep More Revenue with Stimulus AI",
  },
  {
    slug: "onlyfans-chatter-salary-report-2026",
    primaryKeyword: "OnlyFans chatter salary report 2026",
    title: "OnlyFans Chatter Salary Report 2026 — Real Data, Trends & AI Impact",
    description: "The definitive 2026 salary report: median $3,200/mo, entry $1,500-$2,800, top performers $12,000+. Plus how AI oversight roles command 25-35% premiums.",
    h1: "OnlyFans Chatter Salary Report 2026",
    intro: "The most comprehensive salary report for OnlyFans chatters in 2026, based on data from agencies, independent chatters, and industry sources.",
    faq: [
      { question: "What is the average OnlyFans chatter salary in 2026?", answer: "The median is $3,200/month. Entry-level: $1,500-$2,800/month. Top performers: $12,000+/month." },
      { question: "Are chatter salaries going up or down?", answer: "Entry and mid-level salaries are declining due to AI. Senior and specialized salaries are increasing." },
      { question: "How much do AI oversight specialists earn?", answer: "AI oversight specialists earn a 25-35% premium, typically $6,000-$15,000/month." },
      { question: "What's the best compensation model in 2026?", answer: "The hybrid model (base hourly + performance bonuses) offers the best balance of stability and earning potential." },
      { question: "How has AI affected chatter jobs?", answer: "Agencies using AI need 60-80% fewer chatters. Remaining positions are better compensated and more specialized." },
    ],
    ctaText: "See How AI Is Reshaping Chatter Economics",
  },
  {
    slug: "onlyfans-agency-use-cases",
    primaryKeyword: "OnlyFans agency use cases",
    title: "Stimulus AI Use Cases — Solo Creators to 100+ Model Agencies (2026)",
    description: "See how Stimulus AI works at every scale: solo creators saving 4-8 hrs/day, small agencies managing 10-20 accounts, and enterprises with 100+ models.",
    h1: "Stimulus AI Use Cases — Solutions for Every Scale",
    intro: "Stimulus AI adapts to every type of OnlyFans operation — from solo creators to enterprise agencies handling 100+ models.",
    faq: [
      { question: "Does Stimulus work for solo creators?", answer: "Yes. Solo creators save 4-8 hours/day on DMs and see significant revenue increases." },
      { question: "How many accounts can a small agency manage with Stimulus?", answer: "A 2-3 person team can manage 10-20+ accounts — the same workload requiring 15-30 human chatters." },
      { question: "What's the ROI for large agencies?", answer: "70-80% reduction in operational costs and 30-40% increase in per-account revenue." },
      { question: "Does Stimulus support multiple languages?", answer: "Yes. The AI detects fan language and responds accordingly, ideal for international operations." },
      { question: "Can I try Stimulus for one account first?", answer: "Absolutely. Most agencies start with 1-2 accounts, validate results, then scale across their portfolio." },
    ],
    ctaText: "Find Your Use Case — Start with Stimulus AI",
  },
  {
    slug: "onlyfans-mass-messaging",
    primaryKeyword: "OnlyFans mass messaging",
    title: "OnlyFans Mass Messaging — AI-Powered Bulk DMs That Convert 8-15% (2026)",
    description: "Turn mass messages into a revenue engine. Stimulus AI segments fans, personalizes copy, and optimizes timing — achieving 8-15% conversion vs 1-3% manual.",
    h1: "OnlyFans Mass Messaging: AI-Powered Bulk DM Strategy",
    intro: "Mass messaging on OnlyFans is one of the most powerful revenue tools available to creators and agencies. Stimulus AI transforms mass messaging from a blunt instrument into a precision revenue engine.",
    faq: [
      { question: "How many mass messages should I send per week?", answer: "Stimulus AI recommends 2-4 targeted mass messages per week, depending on your subscriber engagement levels." },
      { question: "Can AI personalize mass messages for each subscriber?", answer: "Yes. Stimulus AI segments your audience and generates tailored copy, pricing, and timing for each segment." },
      { question: "What is a good conversion rate for mass messages?", answer: "Manual mass messages typically convert at 1-3%. AI-optimized mass messages through Stimulus achieve 8-15% conversion rates." },
      { question: "Does mass messaging cause subscribers to unsubscribe?", answer: "Poorly targeted mass messages can increase churn. Stimulus AI prevents this by segmenting audiences and controlling message frequency." },
      { question: "How does AI determine the best PPV price for mass messages?", answer: "The AI analyzes each subscriber segment's spending history, engagement level, and purchase patterns to set dynamic pricing." },
    ],
    ctaText: "Supercharge Your Mass Messages with AI",
  },
  {
    slug: "onlyfans-welcome-message",
    primaryKeyword: "OnlyFans welcome message",
    title: "OnlyFans Welcome Message — AI Templates That Convert New Subscribers (2026)",
    description: "Your welcome message determines first-purchase rates. Stimulus AI sends personalized welcomes in under 5 seconds — 3x higher engagement than manual.",
    h1: "OnlyFans Welcome Message: Automated First Impressions That Convert",
    intro: "Your OnlyFans welcome message is the single most important message you will ever send to a subscriber. Stimulus AI automates this critical touchpoint with intelligent welcome sequences.",
    faq: [
      { question: "What should I include in my OnlyFans welcome message?", answer: "A personal greeting, a value statement, a personality touch, and a soft call-to-action to drive the first interaction." },
      { question: "How quickly should I send a welcome message?", answer: "Within 5 minutes of subscription. Stimulus AI sends welcome messages within seconds for 3x higher engagement." },
      { question: "Can AI write welcome messages that sound like me?", answer: "Yes. Stimulus AI analyzes your chat history to learn your vocabulary, tone, and personality." },
      { question: "Should I include a PPV offer in my welcome message?", answer: "Yes, but make it a soft, low-friction offer. Stimulus AI includes strategically priced welcome offers." },
      { question: "How many messages should be in a welcome sequence?", answer: "Stimulus AI recommends a 3-5 message welcome sequence over the first 7 days." },
    ],
    ctaText: "Automate Your Welcome Messages with AI",
  },
  {
    slug: "onlyfans-fan-retention",
    primaryKeyword: "OnlyFans fan retention",
    title: "OnlyFans Fan Retention — Cut Churn in Half with AI Engagement (2026)",
    description: "Average OnlyFans churn: 30-40%/month. With Stimulus AI: 15-20%. Learn AI-powered re-engagement, churn prediction, and VIP treatment strategies.",
    h1: "OnlyFans Fan Retention: AI Strategies to Reduce Churn",
    intro: "Subscriber retention is the most overlooked revenue lever on OnlyFans. Stimulus AI cuts churn rates in half through automated engagement and intelligent relationship management.",
    faq: [
      { question: "What is the average churn rate on OnlyFans?", answer: "The average OnlyFans creator loses 30-40% of subscribers each month. With Stimulus AI, creators typically reduce churn to 15-20%." },
      { question: "How does AI help with fan retention?", answer: "Stimulus AI monitors subscriber behavior for churn signals, sends personalized re-engagement messages, and provides VIP treatment to loyal fans." },
      { question: "When should I start re-engagement campaigns?", answer: "Stimulus AI triggers re-engagement 5-7 days before the renewal date for at-risk subscribers." },
      { question: "What is a good retention rate for OnlyFans?", answer: "With Stimulus AI, creators typically achieve 80-85% retention rates." },
      { question: "Does offering discounts hurt revenue?", answer: "Strategic discounts to at-risk subscribers increase overall revenue. A 20% discount that retains a subscriber is far more profitable than losing them." },
    ],
    ctaText: "Stop Losing Subscribers — Start AI-Powered Retention",
  },
  {
    slug: "onlyfans-pricing-strategy",
    primaryKeyword: "OnlyFans pricing strategy",
    title: "OnlyFans Pricing Strategy — AI-Optimized PPV, Subscriptions & Bundles (2026)",
    description: "Stop guessing your prices. Stimulus AI analyzes subscriber spending and sets dynamic PPV pricing, subscription tiers, and bundles that maximize revenue.",
    h1: "OnlyFans Pricing Strategy: AI-Optimized Revenue Maximization",
    intro: "Pricing is the most impactful lever for OnlyFans revenue. Stimulus AI transforms pricing from guesswork into a data-driven system.",
    faq: [
      { question: "How does AI optimize OnlyFans pricing?", answer: "Stimulus AI analyzes subscriber spending patterns, tests different price points across segments, and dynamically adjusts pricing to maximize revenue." },
      { question: "Should I use a free or paid OnlyFans page?", answer: "It depends on your strategy. Free pages maximize audience size but require aggressive PPV selling. Paid pages create a recurring revenue base." },
      { question: "What is the best PPV price for OnlyFans?", answer: "There is no single best price. Stimulus AI uses dynamic pricing that varies by subscriber segment, content type, and engagement level." },
      { question: "How much more revenue can AI pricing generate?", answer: "Creators who switch to AI-optimized pricing typically see significant PPV revenue increases within the first month." },
      { question: "How do content bundles work?", answer: "Stimulus AI groups related content into bundles at a discount vs individual purchases, increasing average order value by 40-60%." },
    ],
    ctaText: "Optimize Your Pricing with AI Intelligence",
  },
  {
    slug: "onlyfans-content-scheduling",
    primaryKeyword: "OnlyFans content scheduling",
    title: "OnlyFans Content Scheduling — AI Finds Your Best Posting Times (2026)",
    description: "Automate your OnlyFans content calendar with AI. Stimulus analyzes audience activity, schedules posts at peak times, and manages multiple creator calendars.",
    h1: "OnlyFans Content Scheduling: AI-Powered Posting Automation",
    intro: "Consistent content scheduling is the backbone of a successful OnlyFans business. Stimulus AI handles content scheduling intelligently.",
    faq: [
      { question: "How often should I post on OnlyFans?", answer: "At minimum once daily for feed content plus 2-3 stories. Creators who post 2-3 times daily see 20% better retention." },
      { question: "What is the best time to post on OnlyFans?", answer: "It depends on your audience. For most creators, 8-10 PM in the primary audience timezone performs best." },
      { question: "Can AI schedule OnlyFans content automatically?", answer: "Yes. Stimulus AI allows you to upload content in batches and automatically schedules publishing at optimal times." },
      { question: "Does posting frequency affect subscriber retention?", answer: "Yes, significantly. Creators who post daily retain 40% more subscribers than those posting 2-3 times per week." },
      { question: "Can I manage multiple creator schedules from one dashboard?", answer: "Yes. Agencies can plan and manage content calendars for all their creators from a unified Stimulus AI dashboard." },
    ],
    ctaText: "Automate Your Content Schedule with AI",
  },
  {
    slug: "onlyfans-management-software",
    primaryKeyword: "OnlyFans management software",
    title: "Best OnlyFans Management Software 2026 — 5 Agency Tools Compared | Stimulus AI",
    description: "We compared 5 OnlyFans management platforms on AI chat, multi-model support, analytics, and pricing. See why Stimulus AI leads for agencies in 2026.",
    h1: "OnlyFans Management Software: Best Agency Tools in 2026",
    intro: "The OnlyFans management software market has exploded in 2026. Stimulus AI stands out as the most comprehensive solution.",
    faq: [
      { question: "What is the best OnlyFans management software in 2026?", answer: "Stimulus AI leads the market with the most advanced AI chat automation, comprehensive analytics, and unlimited multi-account support." },
      { question: "How much does OnlyFans management software cost?", answer: "Stimulus AI is typically 10-20% of what human chatters cost for the same workload, while delivering equal or higher revenue." },
      { question: "Can management software replace human chatters?", answer: "Stimulus AI can replace 85-95% of human chatter workload. Full automation is the key differentiator." },
      { question: "What features should I prioritize?", answer: "AI chat automation is the most impactful feature, followed by multi-account management, analytics, and content scheduling." },
      { question: "How long does it take to set up management software?", answer: "Stimulus AI onboarding takes less than 24 hours." },
    ],
    ctaText: "Try the Best OnlyFans Management Software",
  },
  {
    slug: "onlyfans-creator-tools",
    primaryKeyword: "OnlyFans creator tools",
    title: "OnlyFans Creator Tools 2026 — The Complete AI Automation Toolkit | Stimulus",
    description: "Every tool OnlyFans creators need in 2026: AI chatting, content scheduling, analytics, pricing optimization, and fan management — all in one platform.",
    h1: "OnlyFans Creator Tools: The Complete Automation Guide",
    intro: "Running a successful OnlyFans business in 2026 requires more than great content. Stimulus AI serves as the central hub for all creator tools.",
    faq: [
      { question: "What tools do successful OnlyFans creators use?", answer: "AI chat automation (like Stimulus AI), content scheduling tools, analytics platforms, and marketing tools." },
      { question: "Do I need multiple tools or one all-in-one platform?", answer: "An all-in-one platform like Stimulus AI is more efficient because features work together." },
      { question: "What is the most important tool for OnlyFans creators?", answer: "AI chat automation. Fan conversations consume 60-80% of working time and directly determine revenue." },
      { question: "How much should I spend on OnlyFans tools?", answer: "Stimulus AI typically costs 10-20% of what human chatters charge while delivering equal or higher revenue." },
      { question: "Can agencies use the same tools as solo creators?", answer: "Yes, but agencies need multi-account management, role-based access, and cross-account analytics." },
    ],
    ctaText: "Get the Complete Creator Tool Stack — Start with Stimulus AI",
  },
  {
    slug: "onlyfans-automation-roi",
    primaryKeyword: "OnlyFans automation ROI",
    title: "OnlyFans Automation ROI — 300%+ Return in 90 Days (2026 Cost-Benefit Analysis)",
    description: "Calculate your OnlyFans automation ROI. Solo creators save $1-2K/mo, agencies save $10-70K/mo. Full cost-benefit analysis with real numbers.",
    h1: "OnlyFans Automation ROI: The Financial Case for AI",
    intro: "Every business decision comes down to return on investment. This analysis breaks down the ROI of OnlyFans automation using real-world data.",
    faq: [
      { question: "What is the ROI of OnlyFans automation?", answer: "Most creators see 300%+ ROI within 90 days of switching to Stimulus AI." },
      { question: "How much can I save by replacing human chatters with AI?", answer: "Solo creators typically save $1,000-2,000/month. Agencies save $10,000-70,000/month depending on scale." },
      { question: "Does AI automation increase revenue or just reduce costs?", answer: "Both. Stimulus AI reduces costs AND increases revenue through 24/7 availability, consistent sales execution, and dynamic pricing." },
      { question: "How long until I see positive ROI?", answer: "Most creators see positive ROI within the first 30 days." },
      { question: "Is the ROI different for agencies vs solo creators?", answer: "Agencies typically see higher ROI due to the multiplicative effect across multiple accounts." },
    ],
    ctaText: "Calculate Your Automation ROI — Try Stimulus AI",
  },
  {
    slug: "onlyfans-bot",
    primaryKeyword: "OnlyFans bot",
    title: "OnlyFans Bot 2026 — AI Chat Automation That Sells Content 24/7 | Stimulus",
    description: "The smartest OnlyFans bot: AI-powered conversations, automatic PPV sales, and subscriber management. Setup in 15 minutes. Plans from $199/mo.",
    h1: "OnlyFans Bot: AI Chat Automation That Sells Content 24/7",
    intro: "An OnlyFans bot is an AI-powered tool that automates conversations with subscribers, handles content sales, and manages fan engagement without human intervention.",
    faq: [
      { question: "Are OnlyFans bots allowed?", answer: "OnlyFans does not explicitly prohibit chat automation tools. Stimulus AI operates within platform guidelines by using official messaging features and maintaining natural conversation patterns." },
      { question: "Will subscribers know they are talking to a bot?", answer: "Stimulus AI generates unique, contextual responses indistinguishable from human conversation. The AI adapts to your specific communication style." },
      { question: "How much does an OnlyFans bot cost?", answer: "Stimulus AI plans range from $199 to $499 per month, significantly less than hiring human chatters." },
      { question: "Can an OnlyFans bot sell PPV content?", answer: "Yes. Stimulus AI automatically identifies optimal moments to present PPV offers based on subscriber behavior and purchase history." },
      { question: "How long does it take to set up?", answer: "Initial setup takes about 15 minutes. The AI begins learning immediately and reaches full effectiveness within one week." },
    ],
    ctaText: "Automate Your OnlyFans Chats — Try Stimulus AI Bot",
  },
  {
    slug: "onlyfans-subscriber-growth",
    primaryKeyword: "OnlyFans subscriber growth",
    title: "OnlyFans Subscriber Growth — AI Strategies for 20-40% Faster Growth (2026)",
    description: "Grow your OnlyFans fanbase 20-40% faster with AI. Automated engagement, 80-85% retention rates, and conversion funnels that turn followers into subscribers.",
    h1: "OnlyFans Subscriber Growth: AI Strategies to Scale Your Fanbase",
    intro: "Growing your OnlyFans subscriber base in 2026 requires systematic growth strategies that combine acquisition, engagement, and retention into a compounding flywheel.",
    faq: [
      { question: "How fast can I grow my OnlyFans subscriber base?", answer: "With AI-powered engagement and retention, most creators see 20-40% faster net growth compared to manual management." },
      { question: "What is a good subscriber retention rate?", answer: "The industry average is 60-70% monthly retention. With Stimulus AI, creators typically achieve 80-85% retention." },
      { question: "How important is the welcome message for growth?", answer: "Subscribers who receive a personalized welcome within 5 minutes are 3x more likely to make a purchase and have significantly higher retention rates." },
      { question: "What is the biggest mistake creators make with growth?", answer: "Focusing exclusively on acquisition while ignoring retention. Reducing churn from 40% to 20% has the same impact as doubling new subscriber acquisition." },
      { question: "How long before I see growth results?", answer: "Most creators see improved retention within the first week. Measurable growth acceleration typically appears within 30 days." },
    ],
    ctaText: "Accelerate Your Subscriber Growth — Try Stimulus AI",
  },
  {
    slug: "onlyfans-revenue-optimization",
    primaryKeyword: "OnlyFans revenue optimization",
    title: "OnlyFans Revenue Optimization — From $15 to $40-80 Per Subscriber with AI (2026)",
    description: "Average revenue per subscriber: $15-30. With AI optimization: $40-80. Learn pricing, upselling, and LTV strategies that maximize your OnlyFans earnings.",
    h1: "OnlyFans Revenue Optimization: Maximize Earnings with AI",
    intro: "Revenue optimization on OnlyFans goes beyond simply raising prices. It requires a systematic approach to pricing, upselling, subscriber segmentation, and lifetime value maximization.",
    faq: [
      { question: "What is the average revenue per subscriber on OnlyFans?", answer: "The average is $15-30 per subscriber per month. With AI optimization, creators typically achieve $40-80 per subscriber." },
      { question: "How does AI optimize OnlyFans pricing?", answer: "Stimulus AI analyzes individual subscriber behavior to determine optimal pricing, considering purchase history, engagement level, and willingness to pay." },
      { question: "What is the biggest revenue opportunity most creators miss?", answer: "PPV content sales. AI-optimized PPV strategies can increase total revenue by shifting the revenue mix toward higher-margin content sales." },
      { question: "How quickly will I see revenue improvements?", answer: "Most creators see measurable revenue increases within the first 2 weeks as the AI begins optimizing PPV offers." },
      { question: "What is subscriber lifetime value?", answer: "LTV is the total revenue a subscriber generates over their entire subscription period. Increasing LTV is more profitable than acquiring new subscribers." },
    ],
    ctaText: "Optimize Your OnlyFans Revenue — Try Stimulus AI",
  },
  {
    slug: "onlyfans-promotion-guide",
    primaryKeyword: "OnlyFans promotion",
    title: "OnlyFans Promotion Guide 2026 — Multi-Channel Strategies That Actually Work",
    description: "Complete OnlyFans promotion guide: Twitter/X, Reddit, TikTok strategies, cross-promotion, and how AI maximizes the value of every new subscriber you acquire.",
    h1: "OnlyFans Promotion Guide: Proven Strategies for 2026",
    intro: "Promoting your OnlyFans account effectively in 2026 requires a multi-channel approach combining social media marketing, content strategy, and subscriber engagement optimization.",
    faq: [
      { question: "What is the best platform to promote OnlyFans?", answer: "Twitter/X and Reddit typically have the highest conversion rates. TikTok provides the most reach but requires indirect promotion strategies." },
      { question: "How much should I spend on OnlyFans promotion?", answer: "Start with organic promotion and reinvest 10-20% of revenue into paid promotion once you have a baseline." },
      { question: "How does AI help with OnlyFans promotion?", answer: "Stimulus AI maximizes the value of every subscriber acquired through promotion by automating engagement, optimizing monetization, and improving retention." },
      { question: "What content works best for promotion?", answer: "Personality-driven content, teasers, behind-the-scenes glimpses, and lifestyle posts outperform explicit previews for building a loyal subscriber base." },
      { question: "How long before promotion efforts show results?", answer: "Organic promotion typically takes 2-4 weeks. Paid promotion can generate subscribers within days but requires optimization." },
    ],
    ctaText: "Maximize Your Promotion ROI — Try Stimulus AI",
  },
  {
    slug: "onlyfans-analytics-tools",
    primaryKeyword: "OnlyFans analytics",
    title: "OnlyFans Analytics Tools 2026 — Track Revenue, Churn & Fan Behavior | Stimulus AI",
    description: "Go beyond basic OnlyFans stats. Stimulus AI tracks ARPS, churn prediction, engagement scores, and per-subscriber revenue — all in one analytics dashboard.",
    h1: "OnlyFans Analytics Tools: Track Revenue, Engagement & Growth",
    intro: "OnlyFans provides basic analytics, but serious creators and agencies need deeper insights. Stimulus AI integrates comprehensive analytics directly into its chat automation platform.",
    faq: [
      { question: "What analytics does OnlyFans provide natively?", answer: "OnlyFans provides basic metrics: total subscribers, earnings, and top fans. For deeper insights, you need third-party tools like Stimulus AI." },
      { question: "What is the most important OnlyFans metric to track?", answer: "Average Revenue Per Subscriber (ARPS) captures the combined effect of pricing, upselling, engagement, and retention in one number." },
      { question: "How does Stimulus AI collect analytics data?", answer: "Because Stimulus AI manages all subscriber conversations, it automatically collects comprehensive data on engagement, purchases, and behavior patterns." },
      { question: "What is churn prediction?", answer: "Churn prediction uses behavioral signals to identify subscribers likely to cancel before they do. Stimulus AI triggers retention campaigns automatically." },
      { question: "Do analytics tools work for agencies?", answer: "Yes. Stimulus AI provides agency-level analytics with per-model breakdowns, team performance tracking, and portfolio-wide revenue analysis." },
    ],
    ctaText: "Get AI-Powered OnlyFans Analytics — Try Stimulus AI",
  },
  {
    slug: "onlyfans-chatting-strategy",
    primaryKeyword: "OnlyFans chatting strategy",
    title: "OnlyFans Chatting Strategy 2026 — The 5-Step Framework That Converts Fans to Buyers",
    description: "Master the Connection-Discovery-Desire-Offer-Close framework. Learn sales psychology, optimal timing, and how AI executes your chatting strategy 24/7.",
    h1: "OnlyFans Chatting Strategy: Convert Fans to Buyers with AI",
    intro: "Your OnlyFans chatting strategy is the single biggest determinant of your revenue. Stimulus AI codifies proven strategies into automated systems that execute consistently.",
    faq: [
      { question: "What is the most effective OnlyFans chatting strategy?", answer: "The Connection-Discovery-Desire-Offer-Close framework builds genuine rapport before presenting purchase opportunities." },
      { question: "How does AI improve chatting strategy?", answer: "Stimulus AI executes proven strategies consistently across every subscriber, 24/7, applying sales psychology and optimizing timing based on behavior data." },
      { question: "How important is the first message?", answer: "Subscribers who receive a personalized first message within 5 minutes are 3x more likely to make a purchase in their first week." },
      { question: "What should I do when a subscriber says no?", answer: "Never pressure. Acknowledge their response, continue naturally, and revisit the offer later. Stimulus AI handles this automatically." },
      { question: "Can I customize the AI's chatting style?", answer: "Yes. Stimulus AI learns your communication style from history and allows you to set personality parameters, boundaries, and sales approach preferences." },
    ],
    ctaText: "Automate Your Chatting Strategy — Try Stimulus AI",
  },
];

// ─── Home Page FAQ ────────────────────────────────────────────────
export const homeFaq = [
  { question: "What is an OnlyFans AI chatter?", answer: "An OnlyFans AI chatter is an AI-powered tool that automates fan conversations on OnlyFans. Stimulus AI acts as your virtual chatter — it responds to messages, builds rapport with fans, and sells content automatically, 24/7." },
  { question: "How does Stimulus AI learn my communication style?", answer: "Stimulus analyzes your existing chat history and content to learn your unique voice, personality traits, and communication patterns. The AI adapts to each fan individually based on their behavior, preferences, and purchase history." },
  { question: "Is it safe to use AI for OnlyFans chatting?", answer: "Yes. Stimulus AI is designed with privacy and security as top priorities. All conversations are encrypted, fan data is protected, and you maintain full control over what the AI can and cannot say." },
  { question: "How much can I save by replacing human chatters with AI?", answer: "Most agencies save 60-80% on chatting costs. Stimulus AI works 24/7 at a fraction of the cost and handles unlimited conversations simultaneously." },
  { question: "Can Stimulus manage multiple OnlyFans accounts?", answer: "Absolutely. Stimulus is built for agencies managing multiple creators. You can manage 50+ models from a single dashboard, each with their own AI persona, content library, and analytics." },
  { question: "How quickly can I get started?", answer: "Setup takes minutes, not weeks. Upload your content, connect your account, and Stimulus starts learning immediately. Most creators see results within the first 24 hours." },
  { question: "What if a fan asks something the AI can't handle?", answer: "Stimulus intelligently routes complex or sensitive conversations to you or your team. You'll get real-time notifications for flagged messages, and you can seamlessly take over any conversation." },
];

// ─── All Pages Meta Map ───────────────────────────────────────────
export function getPageSeoMeta(path: string): PageSeoMeta | null {
  // Home page
  if (path === "/" || path === "") {
    return {
      title: "Stimulus AI — #1 OnlyFans AI Chatter for Creators & Agencies (2026)",
      description: "Stimulus AI automates OnlyFans fan conversations, sells PPV content 24/7, and replaces human chatters. Used by 500+ creators and agencies. Free to start.",
      canonical: `${BASE_URL}/`,
      ogImage: ogImageMap["homepage"],
      h1: "Upload your content. AI does the rest.",
      intro: "AI chats with fans, sells your content, and works 24/7. Replace human chatters, increase PPV revenue, and scale your OnlyFans business on autopilot.",
      faq: homeFaq,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Stimulus AI",
          url: BASE_URL,
          description: "AI-powered OnlyFans chat automation platform for creators and agencies.",
          sameAs: [
            "https://x.com/stimulusapp",
            "https://www.youtube.com/@StimulusAI",
            "https://www.tiktok.com/@stimulusapp",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Stimulus AI",
          description: "AI-powered OnlyFans chatter that automates fan conversations, boosts PPV revenue, and works 24/7 for creators and agencies.",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: BASE_URL,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to get started" },
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        },
      ],
    };
  }

  // Privacy Policy
  if (path === "/privacy") {
    return {
      title: "Privacy Policy — Stimulus AI (Only-Fans.AI) | Data Protection & GDPR",
      description: "How Stimulus AI collects, uses, and protects your personal data. GDPR-compliant privacy policy for Only-Fans.AI platform and services.",
      canonical: `${BASE_URL}/privacy`,
      h1: "Privacy Policy",
      jsonLd: [{ "@context": "https://schema.org", "@type": "WebPage", name: "Privacy Policy", url: `${BASE_URL}/privacy`, isPartOf: { "@type": "WebSite", name: "Stimulus AI", url: BASE_URL } }],
    };
  }

  // Terms of Service
  if (path === "/terms-service") {
    return {
      title: "Terms of Service — Stimulus AI (Only-Fans.AI) | Usage Terms & Conditions",
      description: "Terms and conditions for using Stimulus AI services at Only-Fans.AI. Service description, acceptable use, liability, and subscription terms.",
      canonical: `${BASE_URL}/terms-service`,
      h1: "Terms of Service",
      jsonLd: [{ "@context": "https://schema.org", "@type": "WebPage", name: "Terms of Service", url: `${BASE_URL}/terms-service`, isPartOf: { "@type": "WebSite", name: "Stimulus AI", url: BASE_URL } }],
    };
  }

  // Standalone pages
  const standalonePagesMeta: Record<string, { title: string; description: string; h1: string }> = {
    "/how-it-works": {
      title: "How Stimulus AI Works — 7-Stage Sales Engine for OnlyFans (2026)",
      description: "See exactly how Stimulus AI automates OnlyFans conversations: personality cloning, finite-state sales engine, 7-stage automated ladder, and real-time revenue optimization.",
      h1: "How Stimulus AI Works",
    },
    "/features": {
      title: "Stimulus AI Features — AI Chat, Content Library, Analytics & More (2026)",
      description: "Explore every Stimulus AI feature: AI-powered chatting, smart content library, pricing optimization, fan profiling, conversation stages, and agency tools. All-in-one platform.",
      h1: "Stimulus AI Features",
    },
    "/interface": {
      title: "Stimulus AI Interface — Real Dashboard Screenshots & Product Tour (2026)",
      description: "See the Stimulus AI dashboard in action: revenue overview, chat management, content library, analytics, automation settings, and agency tools. Real product screenshots.",
      h1: "Stimulus AI Interface",
    },
    "/calculator": {
      title: "OnlyFans Revenue Calculator — See How Much AI Can Earn You (Free Tool, 2026)",
      description: "Free OnlyFans revenue calculator. Enter your current earnings and see projected ROI with Stimulus AI: cost savings vs human chatters, payback period, and annual profit.",
      h1: "OnlyFans Revenue Calculator",
    },
    "/faq": {
      title: "Stimulus AI FAQ — 20+ Questions About OnlyFans AI Chatting Answered (2026)",
      description: "Get answers to 20+ questions: pricing, setup time, security, how AI learns your style, multi-account management, revenue expectations, and more. Updated for 2026.",
      h1: "Frequently Asked Questions",
    },
    "/about": {
      title: "About Stimulus AI — The Team Behind the #1 OnlyFans AI Chatter (2026)",
      description: "Meet the team building the most advanced OnlyFans chat automation platform. Our mission: help creators and agencies earn more with less work. Founded 2024.",
      h1: "About Stimulus AI",
    },

  };

  const standaloneMeta = standalonePagesMeta[path];
  if (standaloneMeta) {
    const standaloneSlug = path.replace(/^\//, "");
    const standaloneResult: PageSeoMeta = {
      title: standaloneMeta.title,
      description: standaloneMeta.description,
      canonical: `${BASE_URL}${path}`,
      h1: standaloneMeta.h1,
      ogImage: getOgImage(standaloneSlug),
    };
    if (path === "/how-it-works") {
      const hiwFaq = [
        { question: "How does Stimulus AI differ from a random chatbot?", answer: "Stimulus operates through a controlled finite-state machine (FSM) that defines each client stage and allowed transitions. Every message is governed by structured sales logic." },
        { question: "What is a Finite State Machine in the context of OnlyFans?", answer: "An FSM is a computational model where each fan exists in a defined stage (New, Warmup, Tease, Offer, Close, Paid). Transitions are triggered by message content, payments, time delays, or objection signals." },
        { question: "How does the automated sales ladder work?", answer: "The first sales ladder follows a fixed 7-stage sequence: Opening, Flirt, Tease, Offer, Objection Handling, Close, Hook. Logic is strictly controlled to protect conversion rates." },
        { question: "What happens after a fan makes a payment?", answer: "After payment, the lead is marked as converted, the account manager is notified, and the system transitions to a manual second ladder managed by humans." },
        { question: "How does the Model Personality System work?", answer: "Creators complete a personality questionnaire covering communication style, emotional tone, vocabulary preferences, and boundary definitions. The system generates a personality prompt for consistent conversations." },
      ];
      standaloneResult.faq = hiwFaq;
      standaloneResult.jsonLd = [
        { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Stimulus AI", description: standaloneMeta.description, applicationCategory: "BusinessApplication", operatingSystem: "Web", url: `${BASE_URL}${path}` },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: hiwFaq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      ];
    }
    return standaloneResult;
  }

  // Blog listing page
  if (path === "/blog") {
    return {
      title: "Stimulus AI Blog — OnlyFans Automation Guides, Case Studies & Insights (2026)",
      description: "Expert guides, real case studies, and industry analysis on OnlyFans AI chat automation, revenue optimization, and agency scaling. Updated weekly.",
      canonical: `${BASE_URL}/blog`,
      ogImage: getOgImage("homepage"),
      h1: "Stimulus AI Blog — Insights & Strategies",
      intro: "Expert guides, case studies, and industry analysis on OnlyFans AI automation, revenue optimization, and agency scaling.",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Stimulus AI Blog",
          description: "Expert guides, case studies, and industry analysis on OnlyFans AI chat automation.",
          url: `${BASE_URL}/blog`,
          publisher: {
            "@type": "Organization",
            name: "Stimulus AI",
            url: BASE_URL,
          },
        },
      ],
    };
  }

  // Blog article pages — use metaTitle/metaDescription from blogPosts data if available
  if (path.startsWith("/blog/")) {
    const articleSlug = path.replace("/blog/", "");
    // Try to get proper meta from blogPosts data (loaded via seoMiddleware cache)
    // Fallback to auto-generated title/description
    const fallbackTitle = `${articleSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} | Stimulus AI Blog`;
    const fallbackDesc = `Read about ${articleSlug.replace(/-/g, " ")} on the Stimulus AI blog. Expert insights on OnlyFans AI automation.`;
    return {
      title: fallbackTitle,
      description: fallbackDesc,
      canonical: `${BASE_URL}${path}`,
      h1: articleSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      ogImage: getOgImage(articleSlug),
    };
  }

  // SEO pages
  const slug = path.replace(/^\//, "");
  const seoPage = seoPages.find((p) => p.slug === slug);
  if (seoPage) {
    return {
      title: seoPage.title,
      description: seoPage.description,
      canonical: `${BASE_URL}/${seoPage.slug}`,
      ogImage: getOgImage(seoPage.slug),
      h1: seoPage.h1,
      intro: seoPage.intro,
      faq: seoPage.faq,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Stimulus AI",
          description: seoPage.description,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: `${BASE_URL}/${seoPage.slug}`,
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seoPage.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        },
      ],
    };
  }

  return null;
}

// ─── All known routes for sitemap ─────────────────────────────────
export function getAllRoutes(): string[] {
  return [
    "/",
    "/how-it-works",
    "/features",
    "/interface",
    "/calculator",
    "/faq",
    "/about",
    "/privacy",
    "/terms-service",
    ...seoPages.map((p) => `/${p.slug}`),
  ];
}
