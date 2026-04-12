export type VATask =
  | "CV_REWRITE"
  | "JOB_APPLICATION"
  | "HR_LETTER"
  | "INTERVIEW_PREP";

export async function createVATask(task: {
  type: VATask;
  payload: any;
  userId: string;
}) {
  return {
    status: "queued",
    taskId: crypto.randomUUID(),
    type: task.type,
    createdAt: new Date().toISOString(),
  };
}
