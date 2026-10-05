import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "seo-for-websites-practical-guide",
    title: "SEO for Websites: A Practical Guide to Ranking Higher on Google",
    description:
      "A practical beginner-friendly guide to SEO covering keyword research, on-page SEO, technical SEO, content, backlinks, local SEO, Core Web Vitals, and Google Search Console.",
    author: "Arbaaz Khan",
    publishedAt: "2026-10-05",
    categories: ["SEO"],
    tags: [
      "SEO",
      "Google Search Console",
      "Technical SEO",
      "Core Web Vitals",
      "Next.js SEO",
    ],
    content: [
      {
        type: "paragraph",
        text: "If you've ever built a website and wondered why it isn't showing up on Google, you're not alone. SEO (Search Engine Optimization) can feel overwhelming because it touches almost every part of a website — your content, code, links, performance, and even how clearly search engines can understand your pages. This guide breaks SEO down into the fundamentals that matter most and the practical steps you can take to improve your website.",
      },

      {
        type: "heading",
        level: 2,
        text: "1. Keyword research: find out what people actually search for",
      },
      {
        type: "paragraph",
        text: "Keyword research is one of the foundations of SEO. Before creating a page, it helps to understand what your potential visitors are actually searching for. Targeting a phrase that nobody searches for can make it difficult to attract organic traffic, even if the page itself is well written.",
      },
      {
        type: "list",
        items: [
          "Start with a seed term related to your business or topic (for example, \"tailor shop software\") and expand it using tools such as Google Keyword Planner, Ubersuggest, or Google's own search suggestions, People also ask, and Related searches.",
          "Prioritize search intent instead of focusing only on search volume. A keyword with 200 monthly searches from people looking for a solution can be more valuable than a keyword with thousands of searches from people who are only researching.",
          "Look for relevant long-tail keywords. More specific phrases such as \"CRM for small tailor shops\" can be easier to target than broad terms such as \"CRM software.\"",
          "Study the pages already ranking for your target keyword. Their content can reveal what searchers expect to find and where you can provide something more useful.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "2. On-page SEO: optimize what's actually on the page",
      },
      {
        type: "paragraph",
        text: "On-page SEO is about making each page clear and useful for both visitors and search engines. The goal isn't to fill a page with keywords. Instead, structure the page around the topic and search intent while making the content easy to understand.",
      },
      {
        type: "list",
        items: [
          "Title tag: create a clear, descriptive title that accurately represents the page and naturally includes the main topic or keyword.",
          "Meta description: write a concise and compelling summary that accurately describes the page. It doesn't directly determine rankings, but a useful description can encourage searchers to choose your result.",
          "Headings: use one clear H1 for the main topic and organize supporting information with logical H2 and H3 headings.",
          "URL: use short, descriptive URLs such as /blog/seo-guide instead of unclear URLs such as /blog/post-4821.",
          "Images: use appropriate image formats, descriptive filenames, and useful alt text where the image conveys meaningful information.",
          "Internal links: connect related pages using descriptive anchor text instead of generic phrases such as \"click here.\"",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "3. Technical SEO: make sure Google can crawl and understand your site",
      },
      {
        type: "paragraph",
        text: "Technical SEO covers the parts of your website that aren't always visible to visitors but can affect how search engines discover, crawl, understand, and index your content. Great content cannot perform well in search if important pages cannot be accessed or indexed properly.",
      },
      {
        type: "list",
        items: [
          "Create and submit an XML sitemap so search engines can discover the important URLs on your website.",
          "Use robots.txt to provide crawling guidance and avoid unintentionally blocking important pages.",
          "Use canonical URLs when appropriate to indicate the preferred version of pages that may have duplicate or very similar content.",
          "Use HTTPS to protect your visitors and establish a secure connection between the browser and your website.",
          "Fix broken links, incorrect redirects, and important 404 errors that could prevent users or crawlers from reaching useful content.",
          "Make sure important pages are indexable and aren't accidentally blocked by noindex directives or other technical settings.",
          "Use structured data when appropriate to help search engines understand the type and meaning of your content.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "4. Content: create something genuinely useful",
      },
      {
        type: "paragraph",
        text: "Technical SEO helps search engines discover and access your website, but useful content is what gives people a reason to visit it. The strongest approach is to create content that directly satisfies the searcher's intent and provides clear value.",
      },
      {
        type: "list",
        items: [
          "Write for people first. Use keywords naturally, but don't sacrifice readability just to include a phrase more times.",
          "Answer the main question quickly, then provide enough detail to fully solve the reader's problem.",
          "Cover the important aspects of a topic instead of adding unnecessary words just to make an article longer.",
          "Add your own experience, examples, screenshots, data, or practical advice whenever possible. Original value can make your content more useful than generic summaries.",
          "Keep important information accurate and update content when statistics, tools, technologies, or recommendations change.",
          "Use headings, short paragraphs, lists, tables, and other appropriate formatting to make longer content easier to scan.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "5. Backlinks: earn links from relevant websites",
      },
      {
        type: "paragraph",
        text: "A backlink is a link from another website to your website. Links can help search engines discover pages and can act as signals of authority and relevance. However, not all backlinks are equal. A relevant, trustworthy link can be much more valuable than a large number of low-quality links.",
      },
      {
        type: "list",
        items: [
          "Create genuinely useful resources that other websites would want to reference, such as detailed guides, original research, calculators, tools, or useful tutorials.",
          "Build relationships with relevant websites, businesses, communities, and publications where sharing your resource would genuinely help their audience.",
          "Promote your best content through appropriate channels instead of waiting for every backlink to happen automatically.",
          "Avoid buying manipulative links, participating in link schemes, or using low-quality link farms. Attempts to manipulate search rankings can create long-term problems for a website.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "6. Local SEO: reach customers in your area",
      },
      {
        type: "paragraph",
        text: "If your business serves customers in a specific city, region, or service area, local SEO can help you appear when people search for relevant businesses nearby.",
      },
      {
        type: "list",
        items: [
          "Create and fully complete your Google Business Profile with accurate business information, categories, hours, photos, and descriptions.",
          "Keep your business name, address, and phone number consistent across important online listings.",
          "Encourage genuine customers to leave honest reviews and respond professionally to reviews.",
          "Create useful location-specific pages or content when you genuinely serve those locations. Avoid creating dozens of nearly identical pages just to target different city names.",
          "Mention your service area naturally where it helps users understand where you operate.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "7. Core Web Vitals: improve the user experience",
      },
      {
        type: "paragraph",
        text: "Core Web Vitals are a set of metrics used to evaluate important aspects of the user experience, including loading performance, responsiveness, and visual stability. Good performance is important for users and forms part of Google's page experience signals.",
      },
      {
        type: "list",
        items: [
          "Largest Contentful Paint (LCP): measures loading performance. A good target is 2.5 seconds or less.",
          "Interaction to Next Paint (INP): measures how responsive a page is to user interactions. A good target is 200 milliseconds or less.",
          "Cumulative Layout Shift (CLS): measures unexpected visual movement during loading. A good target is 0.1 or less.",
        ],
      },
      {
        type: "paragraph",
        text: "Improving these metrics often involves optimizing images, reducing unnecessary JavaScript, improving server response times, using efficient fonts, reserving space for images and other dynamic content, and avoiding unnecessary work on the main browser thread.",
      },

      {
        type: "heading",
        level: 2,
        text: "8. SEO for modern web applications and Next.js",
      },
      {
        type: "paragraph",
        text: "Modern websites are often built with frameworks such as Next.js, React, and other JavaScript technologies. These tools can provide excellent performance and developer experience, but developers still need to make sure search engines can access and understand important content.",
      },
      {
        type: "list",
        items: [
          "Use meaningful page titles and meta descriptions for important routes.",
          "Make important content available in the initial HTML when appropriate instead of relying entirely on client-side JavaScript.",
          "Use semantic HTML elements such as header, main, nav, article, and section where they improve document structure.",
          "Generate a sitemap and robots.txt for your production website.",
          "Add canonical URLs when multiple URLs can represent the same content.",
          "Add Open Graph and social metadata so shared pages have useful previews.",
          "Use JSON-LD structured data where it accurately represents the content on the page.",
          "Optimize images and use responsive image techniques to reduce unnecessary downloads.",
          "Keep URLs clean, stable, descriptive, and easy for both users and search engines to understand.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "9. Google Search Console: understand how Google sees your site",
      },
      {
        type: "paragraph",
        text: "Google Search Console is one of the most useful free tools for website owners and developers. It provides first-party information about how Google crawls, indexes, and displays your website in search.",
      },
      {
        type: "list",
        items: [
          "Performance report: see the search queries, pages, clicks, impressions, and average position associated with your website.",
          "Indexing reports: identify pages that Google has indexed, pages with problems, and reasons some URLs may not be indexed.",
          "URL Inspection: check how Google understands a specific URL and request indexing when appropriate.",
          "Core Web Vitals: monitor real-world performance data for eligible pages and identify areas that need improvement.",
          "Sitemaps: submit your XML sitemap and monitor whether Google can process it successfully.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "10. A practical SEO checklist",
      },
      {
        type: "paragraph",
        text: "SEO is not a one-time task. You don't need to implement every technique on the first day. Start with the fundamentals, measure the results, and improve over time.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Set up Google Search Console and submit your sitemap.",
          "Make sure your important pages can be crawled and indexed.",
          "Check your website for broken links, incorrect redirects, duplicate pages, and accidental noindex directives.",
          "Research relevant keywords and understand the search intent behind them.",
          "Improve the titles, headings, URLs, and content of your most important pages.",
          "Publish genuinely useful content that answers questions your target audience is searching for.",
          "Improve Core Web Vitals and overall mobile performance.",
          "Add internal links between relevant pages.",
          "Build relevant, high-quality backlinks naturally over time.",
          "Review your Search Console data regularly and use what you learn to improve existing pages and create better content.",
        ],
      },

      {
        type: "heading",
        level: 2,
        text: "SEO is a long-term process",
      },
      {
        type: "paragraph",
        text: "There is no single SEO trick that guarantees a website will rank at the top of Google. Sustainable SEO comes from getting the fundamentals right, creating useful content, building authority, providing a good user experience, and continuously learning from your search data.",
      },
      {
        type: "quote",
        text: "SEO rewards consistency more than intensity — steady, correct fundamentals beat sporadic bursts of effort.",
      },

      {
        type: "paragraph",
        text: "Start with the basics, measure what happens, improve what isn't working, and keep publishing useful resources. The technical foundation you build today can continue working for your website long after the initial optimization is finished.",
      },
    ],
  },
  {
    slug: "geo-generative-engine-optimization-guide",
    title: "GEO (Generative Engine Optimization): A Practical Guide to Getting Your Website Found in AI Search",
    description:
      "How AI Overviews, ChatGPT search, Copilot, and Perplexity discover, understand, and cite web content — and what website owners and developers can actually do about it in 2026.",
    author: "Arbaaz Khan",
    publishedAt: "2026-10-06",
    categories: ["SEO", "GEO"],
    tags: ["GEO", "Generative Engine Optimization", "AI Search", "Next.js", "Structured Data", "SEO"],
    content: [
      {
        type: "paragraph",
        text: "Search has quietly split into two experiences. There's still the familiar list of blue links — and increasingly, there's an AI-generated answer sitting above or instead of it: Google's AI Overviews and AI Mode, ChatGPT's built-in search, Microsoft Copilot, Perplexity. These systems don't just rank pages, they read them, synthesize an answer, and sometimes cite a handful of sources. GEO (Generative Engine Optimization) is the practice of making your content more likely to be understood, used, and cited by those systems.",
      },
      {
        type: "paragraph",
        text: "This guide is written for people building and maintaining real websites — developers, SaaS founders, and marketers — who want a grounded, technically accurate starting point. No guaranteed formulas, because there aren't any public ones. Just what's actually known, what's reasonable to assume, and what's still genuinely uncertain.",
      },
      {
        type: "heading",
        level: 2,
        text: "What GEO actually is (and what it isn't)",
      },
      {
        type: "paragraph",
        text: "GEO is not a replacement for SEO — it's an extension of it. Traditional SEO is still how your pages get crawled, indexed, and judged relevant in the first place. Every major AI search system still relies on an underlying search index (Google's AI Overviews are built on Google Search; Perplexity and Copilot both perform live web retrieval) to find candidate pages before an AI model summarizes them. If a page isn't crawlable, indexable, and relevant, it's not getting cited — the AI layer only changes what happens after a page is found.",
      },
      {
        type: "list",
        items: [
          "SEO goal: rank a page highly enough that a human clicks it.",
          "GEO goal: be understood clearly enough that an AI system can accurately extract, summarize, and attribute a specific piece of information to your page — whether or not the reader ever visits your site.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "How AI search systems actually use web content",
      },
      {
        type: "paragraph",
        text: "It helps to think of the process in four stages, even though implementations differ across companies:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Crawling and indexing — the same foundational step as traditional search. A page has to be discoverable and renderable to even be a candidate.",
          "Retrieval — when a user asks a question, the system retrieves a set of relevant documents or passages from its index (or, for Perplexity and Copilot, from a live web search) rather than relying purely on its training data.",
          "Ranking/selection — the retrieved sources are filtered down to the handful that will actually inform the answer, generally favoring sources that are clear, relevant, and trustworthy.",
          "Generation and (sometimes) citation — the model synthesizes an answer from the selected sources, and some systems attach visible citations or links back to specific pages.",
        ],
      },
      {
        type: "paragraph",
        text: "The honest caveat: none of these companies publish the exact mechanics of steps 3 and 4. What follows is grounded in how retrieval-augmented systems generally behave and in patterns widely observed by people tracking AI-search citations — not a confirmed algorithm.",
      },
      {
        type: "heading",
        level: 2,
        text: "Entity optimization and topical authority",
      },
      {
        type: "paragraph",
        text: "AI systems increasingly reason in terms of entities (people, products, companies, concepts) and the relationships between them, rather than just matching strings of keywords. Being clearly, consistently identified as an authority on a specific entity matters more than ranking for dozens of loosely related keywords.",
      },
      {
        type: "list",
        items: [
          "State who you are and what you do plainly and consistently, on the page and in structured data — don't make an AI system infer it from vague marketing copy.",
          "Build topical depth, not just breadth. A site with ten thorough pages on one subject is a stronger entity signal than a hundred thin pages across unrelated topics.",
          "Link related pages to each other with descriptive anchor text, so both crawlers and AI systems can map how your content connects.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Writing content AI systems can actually extract and cite",
      },
      {
        type: "paragraph",
        text: "This is the single biggest practical lever available to most website owners. The difference between generic and citation-ready content usually isn't the information itself — it's how extractable that information is.",
      },
      {
        type: "list",
        items: [
          "Generic: \"Our platform offers a variety of tools to help businesses manage their operations more effectively.\" (Vague — nothing concrete to extract or cite.)",
          "Citation-ready: \"Mera Hisaab lets users log an expense or income entry in under 10 seconds, and tracks informal loans (udhaar) separately from regular spending.\" (Specific, concrete, directly quotable.)",
        ],
      },
      {
        type: "list",
        items: [
          "Answer the core question in the first 1-2 sentences of a section, before adding nuance — AI systems often extract the opening of a section as the candidate answer.",
          "Use clear, literal headings that match how people phrase questions (\"How much does X cost\" beats \"Pricing Philosophy\").",
          "Prefer concrete numbers, named examples, and direct statements over hedged, marketing-style language.",
          "Define key terms explicitly where relevant — a short, clear definition is one of the most commonly extracted content types.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Search intent and conversational queries",
      },
      {
        type: "paragraph",
        text: "Queries into AI search systems tend to be longer and more conversational than classic keyword searches — \"what's the best way to track expenses and loans for a small shop\" instead of \"expense tracker app.\" Content structured around real questions, in natural phrasing, matches this pattern far better than content optimized purely around short keyword phrases.",
      },
      {
        type: "heading",
        level: 2,
        text: "E-E-A-T: why credibility still matters, maybe more",
      },
      {
        type: "paragraph",
        text: "Google's E-E-A-T framework — Experience, Expertise, Authoritativeness, Trustworthiness — predates GEO, but it's arguably more relevant now. An AI system choosing which source to cite is making an implicit trust judgment on your behalf. Signals that support this include: first-hand experience clearly reflected in the writing (specific details a generic rewrite wouldn't include), transparent authorship, and content that doesn't overstate or mislead.",
      },
      {
        type: "heading",
        level: 2,
        text: "Structuring content for extraction: headings, lists, tables, FAQs",
      },
      {
        type: "paragraph",
        text: "Structure is a technical aid to extraction, not just a readability nicety. Clear, hierarchical HTML gives both crawlers and AI parsers an explicit map of your content.",
      },
      {
        type: "list",
        items: [
          "Use real heading tags (h2, h3) in logical order — not just bold text styled to look like a heading.",
          "Lists for anything that is genuinely a list (steps, features, comparisons) — they're easy to extract cleanly.",
          "Tables for structured comparisons (pricing tiers, feature matrices) — far easier for a system to parse than the same data buried in prose.",
          "A short, direct FAQ section at the end of long-form content, each question answered in 1-3 sentences before any elaboration.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Semantic SEO, internal linking, and topic clusters",
      },
      {
        type: "paragraph",
        text: "Group related content into clusters: a central \"pillar\" page covering a topic broadly, linked to and from several narrower pages that go deep on specific subtopics. This reinforces topical authority for both traditional SEO and GEO, and gives AI systems a clearer picture of how deeply you cover a subject rather than a single isolated page.",
      },
      {
        type: "heading",
        level: 2,
        text: "Structured data and JSON-LD: where it actually helps",
      },
      {
        type: "paragraph",
        text: "Schema.org structured data (usually implemented as JSON-LD) doesn't directly make an AI system cite you more — but it removes ambiguity about what a page is and who/what it's about, which supports both entity recognition and traditional rich-result eligibility. It's worth implementing correctly, not worth over-investing in as a silver bullet.",
      },
      {
        type: "list",
        items: [
          "Person / Organization schema to clearly establish identity and authorship.",
          "Article / BlogPosting schema on content pages, with accurate author and publish date.",
          "Product or SoftwareApplication schema where genuinely applicable — never fabricated to game rich results.",
          "FAQPage schema only when the page genuinely contains a real FAQ section, matching what's visibly on the page.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Technical foundations that still come first",
      },
      {
        type: "paragraph",
        text: "None of the above matters if the page isn't reliably crawlable and indexable in the first place. This part of GEO is just correct technical SEO, non-negotiable either way.",
      },
      {
        type: "list",
        items: [
          "An accurate, up-to-date XML sitemap, submitted through Google Search Console.",
          "A robots.txt file that doesn't accidentally block important content.",
          "Canonical URLs on any page with duplicate or near-duplicate variants.",
          "HTTPS everywhere, with no mixed-content warnings.",
          "Strong Core Web Vitals (LCP, INP, CLS) — a slow or unstable page is a worse candidate for both ranking and retrieval.",
          "Genuine mobile usability, since a large share of crawling and real-world usage is mobile-first.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "For developers: implementing GEO on a Next.js site",
      },
      {
        type: "paragraph",
        text: "Modern JavaScript frameworks raise one specific risk for GEO: if your important content only renders client-side after JavaScript executes, some crawlers and AI retrieval systems may see an incomplete page. Next.js's App Router, used correctly, largely solves this.",
      },
      {
        type: "list",
        items: [
          "Use Server Components (the App Router default) for content-bearing pages, so the full HTML — including your actual text content — is present in the initial server response, not assembled client-side after hydration.",
          "Set accurate per-page metadata via the metadata export or generateMetadata — title, description, Open Graph, and canonical URL for every route, not just the homepage.",
          "Use semantic HTML deliberately: one h1 per page, logical h2/h3 nesting, real <ul>/<ol>/<table> elements rather than div soup styled to look like them.",
          "Generate a real sitemap.ts and robots.ts (Next.js supports both natively) instead of a static, forgotten sitemap.xml.",
          "Embed JSON-LD via a <script type=\"application/ld+json\"> tag rendered server-side, so it's present in the initial HTML, not injected later by client JavaScript.",
          "Build genuine internal linking between related pages — Link components with descriptive text, not just a flat nav bar — so crawlers can trace topical relationships.",
          "If any critical content is genuinely client-rendered (e.g. inside a heavy interactive widget), consider whether an equivalent server-rendered summary should exist for crawlers and AI retrieval to read.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Authority beyond your own site: mentions, reviews, and digital PR",
      },
      {
        type: "paragraph",
        text: "AI systems don't just evaluate a page in isolation — a brand or entity that's referenced consistently across other reputable sites (reviews, directories, press, community discussions) builds a broader trust signal than any single page can on its own. This is slower, less direct work than on-page optimization, but it compounds.",
      },
      {
        type: "list",
        items: [
          "Genuine reviews on relevant platforms for your industry.",
          "Mentions or guest contributions on reputable, relevant third-party sites — not low-quality link farms.",
          "Active, honest participation in relevant communities where your expertise is genuinely useful.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "How to measure GEO (and what you honestly can't measure yet)",
      },
      {
        type: "paragraph",
        text: "This is the part most GEO content glosses over. Be realistic about what's actually measurable today.",
      },
      {
        type: "list",
        items: [
          "What you can measure: referral traffic from AI search platforms (increasingly visible as a distinct source in analytics), branded search volume over time, direct citations you can manually spot-check by asking AI systems relevant questions yourself, and traditional Search Console data as a proxy for crawlability and relevance.",
          "What you currently cannot reliably measure: exact citation frequency across AI platforms at scale, any platform's internal ranking logic, or a guaranteed causal link between a specific change you made and a citation appearing.",
        ],
      },
      {
        type: "paragraph",
        text: "Treat AI-search visibility as a long-term, directional signal you nudge and monitor — not a metric you can precisely optimize the way you might a Google Search Console ranking.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common GEO myths worth dismissing",
      },
      {
        type: "list",
        items: [
          "\"There's a known formula AI engines use to rank sources.\" No major AI search provider has published one, and the underlying systems differ from each other.",
          "\"Keyword-stuffing content for AI will get it cited more.\" AI extraction favors clarity and directness, not density — stuffed content is usually harder to extract cleanly, not easier.",
          "\"There are tricks to get ChatGPT to cite your site on demand.\" No legitimate, reliable method exists to force a citation; sustainable visibility comes from being a genuinely clear, authoritative source.",
          "\"Fake reviews or fabricated citations help.\" This risks real reputational and SEO harm, and most platforms actively work against manipulation like this.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "A practical 30-day GEO implementation plan",
      },
      {
        type: "paragraph",
        text: "Week 1 — Technical foundation",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Set up or audit Google Search Console and confirm the site is indexing correctly.",
          "Implement/verify sitemap.ts and robots.ts.",
          "Confirm HTTPS, canonical tags, and check for crawl errors.",
          "Run a Core Web Vitals check and fix the worst offenders.",
          "Confirm key pages render their core content in server-side HTML, not only after client-side JavaScript.",
        ],
      },
      {
        type: "paragraph",
        text: "Week 2 — Content and topical authority",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Pick 2-3 core topics you want to be known for and map existing content against them.",
          "Rewrite your weakest page's opening paragraphs to directly, concretely answer the core question in the first two sentences.",
          "Add a clear, genuine FAQ section to your most important page.",
          "Add or tighten internal links between related pages using descriptive anchor text.",
        ],
      },
      {
        type: "paragraph",
        text: "Week 3 — Authority, mentions, and distribution",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Implement or correct Person/Organization and Article/BlogPosting JSON-LD.",
          "Identify 3-5 reputable, relevant external sites where a genuine mention or link would make sense.",
          "Reach out or contribute where relevant — no link farms, no paid link schemes.",
          "Request or encourage genuine reviews where appropriate to your business.",
        ],
      },
      {
        type: "paragraph",
        text: "Week 4 — Measurement and optimization",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Set up tracking for referral traffic segments from AI search platforms where your analytics tool supports it.",
          "Manually spot-check a handful of relevant AI search queries to see whether your site appears or is cited.",
          "Review Search Console performance data for shifts in impressions or queries.",
          "Pick the next topic cluster or technical gap to tackle, and repeat the cycle.",
        ],
      },
      {
        type: "quote",
        text: "GEO doesn't replace the fundamentals — it rewards doing them with more clarity and precision than before.",
      },
    ],
  },
];

export function getAllPosts() {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(current: BlogPost, limit = 2) {
  return blogPosts
    .filter(
      (p) =>
        p.slug !== current.slug &&
        p.categories.some((c) => current.categories.includes(c))
    )
    .slice(0, limit);
}