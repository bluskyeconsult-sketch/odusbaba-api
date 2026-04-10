// lib/odusbaba/memory.ts

/**
 * SEMANTIC MEMORY (WHAT TO REMEMBER)
 */
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

/**
 * STORAGE ABSTRACTION (HOW MEMORY IS STORED)
 * Supabase / Vector DB will replace internals later
 */
export function readMemory(key: string) {
  return {
    key,
    source: "stub",
    value: null,
  };
}

export function writeMemory(key: string, value: unknown) {
  return {
    key,
    stored: true,
    value,
  };
}
