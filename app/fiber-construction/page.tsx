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
        municipalities, and private networks. Our team supports aerial and
        underground fiber deployment, long-haul builds, and rapid infrastructure
        expansion across Texas and nationwide.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Capabilities
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Aerial fiber construction (pole line installation)</li>
        <li>Underground fiber (trenching, boring, conduit placement)</li>
        <li>Long-haul and middle-mile fiber builds</li>
        <li>FTTH and last-mile deployment</li>
        <li>Splicing, testing, and turn-up</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Turnkey Project Delivery
      </h2>

      <p className="mb-6">
        From initial route planning and permitting through construction and
        final testing, Odiscom provides full lifecycle support. We integrate
        engineering, fielding, and construction to deliver projects efficiently
        and at scale.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Service Areas
      </h2>

      <p className="mb-6">
        Based in Texas, Odiscom supports fiber construction projects throughout
        the United States with a focus on high-demand infrastructure markets
        including Dallas, Houston, and surrounding regions.
      </p>

      <div className="mt-12 p-6 bg-gray-100 rounded-xl">
        <h3 className="text-xl font-semibold mb-3">
          Request a Proposal
        </h3>
        <p className="mb-4">
          Contact Odiscom to discuss your fiber construction project and receive
          a detailed proposal.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Request Proposal
        </a>
      </div>
    </div>
  );
}