export function validateApiKey(request: Request) {
  const apiKey = request.headers.get("x-api-key");
  const validKey = process.env.API_KEY;

  return apiKey === validKey;
}
