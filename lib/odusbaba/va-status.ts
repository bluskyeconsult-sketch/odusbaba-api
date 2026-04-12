export function getVATaskStatus(taskId: string) {
  return {
    taskId,
    status: "processing",
    progress: 40,
  };
}
