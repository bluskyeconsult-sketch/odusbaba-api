export function validateApiKey(headers: Headers) {
  const apiKey = headers.get("x-api-key");
  return apiKey === process.env.ODUSBABA_API_KEY;
}
