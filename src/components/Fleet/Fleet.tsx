import { SectionHeading } from "../Common/SectionHeading";
import { FleetCard } from "../FleetCard/FleetCard";
import { fleet } from "../../data/fleet";

export function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-dark-900 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Our Premium Fleet"
          subtitle="Choose from our curated collection of luxury and adventure-ready vehicles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          {fleet.map((vehicle, index) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
