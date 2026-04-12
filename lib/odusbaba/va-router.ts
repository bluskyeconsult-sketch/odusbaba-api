import { createVATask } from "./va-task-engine";

export async function routeUserRequest(request: {
  intent: string;
  userId: string;
  payload: any;
}) {
  switch (request.intent) {
    case "cv":
      return createVATask({
        type: "CV_REWRITE",
        payload: request.payload,
        userId: request.userId,
      });

    case "apply":
      return createVATask({
        type: "JOB_APPLICATION",
        payload: request.payload,
        userId: request.userId,
      });

    default:
      return {
        status: "unsupported_intent",
      };
  }
}
