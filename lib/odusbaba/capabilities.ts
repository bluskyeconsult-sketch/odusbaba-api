export function resolveCapabilities(tier: string) {
  const base = {
    "job:view": true,
    "job:apply": false,
    "job:post": false,
  };

  if (tier === "jobseeker") {
    return {
      ...base,
      "job:apply": true,
    };
  }

  if (tier === "employer") {
    return {
      ...base,
      "job:post": true,
    };
  }

  if (tier === "admin") {
    return {
      "job:view": true,
      "job:apply": true,
      "job:post": true,
    };
  }

  return base;
}
