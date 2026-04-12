export function evaluateJob(job: {
  title: string;
  salary?: number;
  country?: string;
}) {
  const risks: string[] = [];

  if (!job.salary || job.salary < 15000) {
    risks.push("low_salary");
  }

  if (!job.country) {
    risks.push("unknown_location");
  }

  const fraudScore =
    risks.length === 0 ? 10 : risks.length * 30;

  return {
    visaEligible: job.country ? true : false,
    fraudScore,
    salaryFlag: job.salary && job.salary < 20000,
    risks,
  };
}
