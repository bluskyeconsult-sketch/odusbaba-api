import { Headers } from "next/dist/compiled/@edge-runtime/primitives";

export function validateApiKey(headers: Headers | globalThis.Headers): boolean {
  const apiKey = headers.get("x-api-key");
  return apiKey === process.env.ODUSBABA_API_KEY;
}
