export type AuditEvent =
  | "SKILL_APPROVED"
  | "SKILL_REJECTED"
  | "USER_TIER_CHANGED"
  | "VA_TASK_CREATED"
  | "ENFORCEMENT_MODE_CHANGED";

export async function logAuditEvent({
  event,
  actor,
  metadata,
}: {
  event: AuditEvent;
  actor: any;
  metadata?: any;
}) {
  const logEntry = {
    id: crypto.randomUUID(),
    event,
    actor: actor?.id || "system",
    role: actor?.role || "unknown",
    metadata: metadata || {},
    timestamp: new Date().toISOString(),
  };

  // TEMP: console (later Supabase audit_logs table)
  console.log("AUDIT_LOG:", logEntry);

  return logEntry;
}
