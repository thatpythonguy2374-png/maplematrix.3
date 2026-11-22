import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import {
  Lightbulb,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "We perform some check on your site with Google Search Console data, light house scores and compare it with the competitors, then create a plan to overcome the issues. ",
    icon: Lightbulb,
    duration: "Understand",
  },
  {
    number: "02",
    title: "Keywords and Meta Data",
    description:
      "We identify the on-going high ranked keywords and page meta data that can be used in your site to increase the visiblity in Google Search.",
    icon: Palette,
    duration: "Visualize",
  },
  {
    number: "03",
    title: "Fixes",
    description:
      "We fix the page loading, unstructured data, page duplicacy and crawling errors so search engine crawlers can actually read and then index pages accordingly.",
    icon: Code2,
    duration: "Build",
  },
  {
    number: "04",
    title: "Content Optimization",
    description:
      "We build the content for your site page by page, which will lead to better content crawling to attain better page ranking.",
    icon: TestTube2,
    duration: "Refine",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative overflow-hidden bg-[#0E0D0C] py-20 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#A98467]/10 blur-[120px]" />

      <Container className="relative z-10">
        <AnimateOnView once blur>
          <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F1ED]">
              How We Work
            </span>
            <h2 className="h2 mt-4 mb-5 text-[#F5F1ED]">
              From First Idea to{" "}
              <span className="text-gradient">Final Launch.</span>
            </h2>
            <p className="text-body-md text-[#F5F1ED]">
              A good website takes more than good design. Here's how we turn
              your requirements into a digital experience that works.
            </p>
          </div>
        </AnimateOnView>

        <StaggerContainer className="relative mx-auto max-w-4xl space-y-5">
          {/* Timeline */}
          <div className="absolute bottom-12 left-[27px] top-12 hidden w-px bg-gradient-to-b from-[#C9A283] via-[#8F6B52] to-transparent md:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <AnimateOnView key={step.number} once y={30} delay={index * 0.08}>
                <div className="group relative grid gap-5 rounded-2xl border border-[#493B30]/60 bg-[#1C1917] p-6 transition-all duration-300 hover:border-[#C9A283]/40 hover:bg-[#211C18] md:grid-cols-[56px_1fr_auto] md:items-center md:gap-7 md:p-7">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-[#C9A283]/30 bg-[#292019]">
                    <Icon className="h-6 w-6 text-[#C9A283]" />
                  </div>

                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-semibold tracking-widest text-[#C9A283]">
                        STEP {step.number}
                      </span>
                      <span className="rounded-full border border-[#493B30] bg-[#292019] px-3 py-1 text-[10px] uppercase tracking-wider text-[#B8AAA0]">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="mb-2 text-xl font-medium text-[#F5F1ED]">
                      {step.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-[#B8AAA0]">
                      {step.description}
                    </p>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#493B30] text-[#C9A283] transition-all group-hover:border-[#C9A283]/50 group-hover:bg-[#C9A283]/10 md:flex">
                    <ArrowDown className="h-4 w-4 -rotate-45" />
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

export default DevelopmentProcess;
