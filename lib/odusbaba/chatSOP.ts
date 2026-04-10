// lib/odusbaba/chatSOP.ts

export function applyChatSOP(input: {
  message: string;
  country?: string;
}) {
  return {
    intent: detectIntent(input.message),
    country: input.country || "UK",
    format: "Situation → Analysis → Options → Recommendation",
  };
}

function detectIntent(message: string) {
  if (message.includes("dismiss")) return "employment_dispute";
  if (message.includes("visa")) return "job_search";
  return "general_hr";
}
