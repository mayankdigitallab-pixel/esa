import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // OpenAI / ChatGPT / SearchGPT
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      // Anthropic / Claude
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      // Google Gemini / Bard
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      // Microsoft Copilot / Bing AI
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "BingPreview", allow: "/" },
      // Perplexity
      { userAgent: "PerplexityBot", allow: "/" },
      // Apple Intelligence
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
      // Meta AI
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      // Amazon
      { userAgent: "Amazonbot", allow: "/" },
      // ByteDance / TikTok AI
      { userAgent: "Bytespider", allow: "/" },
      // You.com
      { userAgent: "YouBot", allow: "/" },
      // Cohere
      { userAgent: "cohere-ai", allow: "/" },
      // Common Crawl (training data for many LLMs)
      { userAgent: "CCBot", allow: "/" },
      // DuckDuckGo AI
      { userAgent: "DuckAssistBot", allow: "/" },
      // Diffbot
      { userAgent: "Diffbot", allow: "/" },
      // iAsk AI
      { userAgent: "iaskspider", allow: "/" },
      // AI2
      { userAgent: "AI2Bot", allow: "/" },
      // Hugging Face
      { userAgent: "HuggingFaceBot", allow: "/" },
      // xAI / Grok
      { userAgent: "xAI-Bot", allow: "/" },
      { userAgent: "Grok", allow: "/" },
      // Mistral
      { userAgent: "MistralBot", allow: "/" },
      // DeepSeek
      { userAgent: "DeepSeek-WebCrawler", allow: "/" },
      // Brave Search AI
      { userAgent: "Brave-Spider", allow: "/" },
      // Naver / HyperCLOVA
      { userAgent: "NaverBot", allow: "/" },
      // Baidu AI
      { userAgent: "Baiduspider", allow: "/" },
    ],
    sitemap: "https://www.theesa.in/sitemap.xml",
  };
}
