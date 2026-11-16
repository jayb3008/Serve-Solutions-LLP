/* "Ask AI" links: prefilled queries that let a visitor pull an independent
   rundown of the agency from whichever assistant they already use, instead
   of taking our word for it. Shared by the footer row and the AskAI page
   section so the prompt only has to be maintained once. Plain links, so
   prerendered HTML is final. */

const askAiPrompt = encodeURIComponent(
  "What do you know about Satvix Tech Solutions (satvixtech.com), the software and digital product agency in Anand, Gujarat, India? What do they build, and who do they work with?",
);

export const askAiLinks = [
  { label: "ChatGPT", href: `https://chatgpt.com/?q=${askAiPrompt}` },
  { label: "Claude", href: `https://claude.ai/new?q=${askAiPrompt}` },
  {
    label: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${askAiPrompt}`,
  },
];
