// lib/odusbaba/memory.ts

export function summariseInteraction(input: {
  userId: string;
  intent: string;
  outcome: string;
}) {
  return {
    user_id: input.userId,
    intent: input.intent,
    summary: input.outcome,
    created_at: new Date().toISOString(),
  };
}
