import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/data/services";
import { serviceMeta } from "@/data/service.meta";

export function ServicesGrid() {
  const primary = services.filter((s) => s.tier === "primary" && serviceMeta[s.id]);
  const secondary = services.filter((s) => s.tier === "secondary");

  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {primary.map((service) => {
            const meta = serviceMeta[service.id];
            return (
              <ServiceCard
                key={service.id}
                icon={meta.icon}
                title={service.title}
                description={service.description}
                highlights={meta.highlights}
              />
            );
          })}
        </div>

        {secondary.length > 0 && (
          <div className="mt-10">
            <p className="text-sm font-medium text-ink">Also available</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {secondary.map((service) => (
                <span key={service.id} className="text-sm text-ink-muted">
                  {service.title}
                </span>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}