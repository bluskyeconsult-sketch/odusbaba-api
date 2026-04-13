import { routeUserRequest } from "@/lib/odusbaba/va-router";

export async function POST(req: Request) {
  const body = await req.json();

  const result = await routeUserRequest({
    intent: body.intent,
    userId: body.userId || "anonymous",
    payload: body.payload,
  });

  return Response.json(result);
}
