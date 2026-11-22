import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import {
  Code2,
  Server,
  Database,
  Palette,
  Cloud,
  Workflow,
} from "lucide-react";

const technologyGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces that feel intuitive and work beautifully.",
    icon: Code2,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
    ],
  },
  {
    title: "Backend Development",
    description: "Reliable application logic and server-side systems.",
    icon: Server,
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python",
      "Authentication",
    ],
  },
  {
    title: "Database & CMS",
    description: "Structured data and flexible content management.",
    icon: Database,
    technologies: ["PostgreSQL", "MySQL", "Supabase", "Strapi", "Prisma"],
  },
  {
    title: "UI/UX & Design",
    description: "Design systems focused on usability and clarity.",
    icon: Palette,
    technologies: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
  },
  {
    title: "Deployment & Hosting",
    description: "Getting your website online and ready to grow.",
    icon: Cloud,
    technologies: ["Vercel", "Render", "Cloudflare", "Git", "GitHub"],
  },
  {
    title: "Integrations",
    description: "Connecting your website with the tools you use.",
    icon: Workflow,
    technologies: [
      "Payment Gateways",
      "Third-party APIs",
      "Email Integration",
      "Automation",
    ],
  },
];

const Technologies = () => {
  return (
    <section className="relative overflow-hidden bg-[#13110F] py-20 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#A98467]/10 blur-[120px]" />

      <Container className="relative z-10">
        <AnimateOnView once blur>
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F1ED]">
              Our Technology Stack
            </span>
            <h2 className="h2 mt-4 mb-5 text-[#F5F1ED]">
              The Right Tools for{" "}
              <span className="text-gradient">Better Websites.</span>
            </h2>
            <p className="text-body-md text-[#F5F1ED]">
              We choose technologies based on what your project actually needs,
              building digital experiences that are practical, maintainable, and
              ready to grow.
            </p>
          </div>
        </AnimateOnView>

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <AnimateOnView key={group.title} once y={30} delay={index * 0.07}>
                <div className="group h-full rounded-2xl border border-[#493B30]/60 bg-[#1C1917] p-7 transition-all duration-300 hover:border-[#C9A283]/40 hover:bg-[#211C18]">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A283]/20 bg-[#C9A283]/10">
                    <Icon className="h-6 w-6 text-[#C9A283]" />
                  </div>

                  <h3 className="mb-2 text-xl font-medium text-[#F5F1ED]">
                    {group.title}
                  </h3>

                  <p className="mb-6 min-h-[44px] text-sm leading-relaxed text-[#B8AAA0]">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-[#493B30]/70 bg-[#292019] px-3 py-2 text-xs text-[#D4C4B7] transition-colors group-hover:border-[#C9A283]/25">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnView>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default Technologies;
