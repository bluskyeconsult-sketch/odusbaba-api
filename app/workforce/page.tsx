import { fetchApprovedWorkforceSkills } from "@/lib/workforce";
import WorkforceMarketplace from "@/components/workforce/WorkforceMarketplace";
import { resolveViewerCapabilities } from "@/lib/capabilities";

export default async function WorkforcePage() {
  const skills = await fetchApprovedWorkforceSkills();
  const viewer = await resolveViewerCapabilities();

  return (
    <WorkforceMarketplace
      initialSkills={skills}
      viewerCapabilities={viewer}
    />
  );
}
