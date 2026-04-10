export type EnforcementMode = "observe" | "block";

let CURRENT_MODE: EnforcementMode = "observe";

export function setEnforcementMode(
  mode: EnforcementMode,
  admin: any
) {
  if (admin?.role !== "admin") {
    throw new Error("ONLY_ADMIN_CAN_SET_ENFORCEMENT");
  }

  CURRENT_MODE = mode;
}

export function enforce(condition: boolean, message: string) {
  if (!condition) {
    if (CURRENT_MODE === "observe") {
      console.warn("ODUSBABA OBSERVE:", message);
      return;
    }

    if (CURRENT_MODE === "block") {
      throw new Error(message);
    }
  }
}
