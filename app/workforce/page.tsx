import WorkforceMarketplace from "@/components/workforce/WorkforceMarketplace";

export default async function WorkforcePage() {
  const skills: any[] = [];

  const viewerCapabilities = {
    canContactWorkforce: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
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
