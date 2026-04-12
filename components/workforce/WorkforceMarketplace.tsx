export default function WorkforceMarketplace({
  initialSkills,
  viewerCapabilities,
}: {
  initialSkills: any[];
  viewerCapabilities: any;
}) {
  return (
    <div>
      <p>Marketplace is connected.</p>

      <p>Total skills loaded: {initialSkills.length}</p>

      <p>
        Can contact:{" "}
        {viewerCapabilities?.canContactWorkforce
          ? "YES"
          : "NO"}
      </p>
    </div>
  );
}
