export default function VATaskMonitor({ tasks }: any) {
  return (
    <div className="space-y-3">
      {tasks.map((task: any) => (
        <div key={task.taskId} className="border p-3 rounded">
          <p className="font-medium">{task.type}</p>
          <p>Status: {task.status}</p>
          <p>Progress: {task.progress}%</p>
        </div>
      ))}
    </div>
  );
}
