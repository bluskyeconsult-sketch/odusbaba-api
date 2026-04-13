import WorkforceMarketplace from "@/components/workforce/WorkforceMarketplace";
import { fetchApprovedWorkforceSkills } from "@/lib/workforce/fetchApprovedWorkforceSkills";
import OnboardingBanner from "@/components/ui/OnboardingBanner";

export const dynamic = "force-dynamic";

export default async function WorkforcePage() {
  const skills = await fetchApprovedWorkforceSkills();

  const viewerCapabilities = {
    canContactWorkforce: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <OnboardingBanner />

      <h1 className="text-4xl font-bold mb-6">
        Workforce Marketplace
      </h1>

      <WorkforceMarketplace
        initialSkills={skills}
        viewerCapabilities={viewerCapabilities}
      />
    </section>
  );
}
