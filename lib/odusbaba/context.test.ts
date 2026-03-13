import { resolveContext } from "./context";

describe("resolveContext", () => {
  it("returns free capability when no user exists", async () => {
    const ctx = await resolveContext({});

    expect(ctx.capability.tier).toBe("free");
  });

  it("returns free capability when user has no stripe plan", async () => {
    const ctx = await resolveContext({
      user: { id: "u1", email: "test@mail.com" },
    });

    expect(ctx.capability.tier).toBe("free");
  });

  it("returns correct capability for valid stripe plan", async () => {
    const ctx = await resolveContext({
      user: { id: "u2", stripe_plan_id: "pro" },
    });

    expect(ctx.capability.tier).toBe("pro");
    expect(ctx.capability.limits.aiCalls).toBe(1000);
  });

  it("falls back to free for unknown plan", async () => {
    const ctx = await resolveContext({
      user: { id: "u3", stripe_plan_id: "ghost-plan" },
    });

    expect(ctx.capability.tier).toBe("free");
  });
});
