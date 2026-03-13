// lib/odusbaba/rules.ts

/**
 * applyRules
 * Governance enforcement
 * Returns true if allowed, false if access denied
 */
export function applyRules(context: any) {
  // Example rules:
  // Only admin can access some routes
  if (context.user.role === "public") {
    // Deny restricted actions
    return false;
  }

  // Subscriber or admin: allowed
  return true;
}
