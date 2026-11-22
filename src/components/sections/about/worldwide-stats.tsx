import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";

const stats = [
  {
    value: "28",
    label: "States Across India",
    description:
      "No matter which state you're in, we can build and support your website with the same care. Everything works smoothly online, so distance never gets in the way.",
  },
  {
    value: "08",
    label: "Union Territories",
    description:
      "From Delhi NCR to the smaller territories, we work with businesses of all sizes. If you're in one of them, we're happy to talk.",
  },
  {
    value: "Pan-India",
    label: "Digital Opportunities",
    description:
      "Big city or small town, new startup or long-running brand, there's room to grow online. We help you find that room and build for it.",
  },
];

const WorldwideStats = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-[60px]">
      {/* Soft glows, using the theme's primary color */}
      <div className="pointer-events-none absolute -left-40 -top-40 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <Container className="relative z-10 space-y-10 md:space-y-16">
        <div className="mx-auto max-w-[700px] text-center">
          <AnimateOnView blur>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Our Reach
            </p>
          </AnimateOnView>

          <AnimateOnView blur delay={0.1}>
            <h2 className="h2 mb-5">Building Across India</h2>
          </AnimateOnView>

          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              Whether you're just starting out or already established, we help
              businesses across India get a website that works as hard as they
              do.
            </p>
          </AnimateOnView>
        </div>

        {/* gap-px on a border-colored background draws the dividers */}
        <AnimateOnView y={30} once>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card px-6 py-8 transition-colors duration-300 hover:bg-secondary">
                <span className="mb-6 block text-xs font-medium tracking-widest text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="h3 mb-1">{stat.value}</h3>
                <p className="mb-4 text-base font-medium text-foreground/80">
                  {stat.label}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            ))}

            {/* Map cell */}
            <div className="relative min-h-[320px] bg-card px-6 py-8 sm:col-span-2 lg:col-span-1">
              <span className="mb-6 block text-xs font-medium tracking-widest text-primary">
                04
              </span>
              <h3 className="h4 max-w-[220px]">
                Wherever you are in India, we can help
              </h3>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none px-6 pb-4">
                {/* mix-blend-lighten makes the image's black background disappear */}
                <img
                  src="/images/about/india-map.webp"
                  alt="Map of India"
                  className="mx-auto h-auto w-[85%] max-w-[280px] object-contain mix-blend-lighten"
                />
              </div>
            </div>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default WorldwideStats;
