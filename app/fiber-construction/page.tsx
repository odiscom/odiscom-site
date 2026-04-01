export const metadata = {
  title: "Fiber Optic Construction Services | Odiscom",
  description:
    "Odiscom provides turnkey fiber optic construction services including aerial, underground, and long-haul fiber builds across Texas and nationwide.",
};

export default function FiberConstructionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Fiber Optic Construction Services
      </h1>

      <p className="text-lg mb-6">
        Odiscom delivers turnkey fiber optic construction services for carriers,
        municipalities, and private networks across Texas and nationwide.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Aerial fiber construction</li>
        <li>Underground fiber installation</li>
        <li>Long-haul builds</li>
        <li>FTTH deployment</li>
      </ul>

      <a href="/contact" className="inline-block mt-10 bg-green-600 text-white px-6 py-3 rounded-lg">
        Request Proposal
      </a>
    </div>
  );
}
