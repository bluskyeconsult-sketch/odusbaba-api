import WorkforceMarketplace from "@/components/workforce/WorkforceMarketplace";

export default async function WorkforcePage() {
  // SAFE STATIC MODE FIRST (no imports that can break build)

  const skills: any[] = [];

  const viewerCapabilities = {
    canContactWorkforce: false,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">
          Workforce Marketplace
        </h1>

        <p className="text-slate-500 mt-2">
          Discover verified talent across industries
        </p>
      </header>

      <WorkforceMarketplace
        initialSkills={skills}
        viewerCapabilities={viewerCapabilities}
      />
    </section>
  );
}
