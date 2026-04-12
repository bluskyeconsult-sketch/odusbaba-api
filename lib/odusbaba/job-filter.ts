import { evaluateJob } from "./job-intelligence";

export function filterJobs(jobs: any[]) {
  return jobs
    .map((job) => ({
      ...job,
      intelligence: evaluateJob(job),
    }))
    .filter((job) => job.intelligence.fraudScore < 60);
}
