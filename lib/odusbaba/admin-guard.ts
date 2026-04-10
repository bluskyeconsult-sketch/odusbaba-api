export function assertAdmin(user: {
  role?: string;
  tier?: string;
}) {
  if (user?.role !== "admin" && user?.tier !== "admin") {
    throw new Error("UNAUTHORISED_ADMIN_ACTION");
  }
}
