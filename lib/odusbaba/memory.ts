// lib/odusbaba/memory.ts

/**
 * Phase 2 memory abstraction
 * Supabase will replace internals later
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
