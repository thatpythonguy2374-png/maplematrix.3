import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import TestimonialCard from "@/components/ui/testimonial-secondary-card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    title: "Latest Technology",
    quote:
      "We uses innovative marketing tools, AI-powered platforms, and comprehensive analytics to keep your business ahead of the competition. Using the latest digital marketing tools boosts campaign success while also ensuring accurate targeting, higher conversions, and a consistent experience for your audience across all channels.",

    rotation: -2,
  },
  {
    id: 2,
    title: "Fast and Timely delivery",
    quote:
      "In digital marketing, timing is key, and we at Maple Matrix understand how important it is to your brand's online growth. Our marketing team guarantees that each campaign, strategy, and deliverable is completed on schedule, allowing your company to go forward with confidence and consistency.",

    rotation: 1,
  },
  {
    id: 3,
    title: "Multiple options to choose from",
    quote:
      "Unsure which digital marketing technique will be most effective for your business? Don't worry, our professionals are here to help you. We provide a comprehensive range of digital solutions adapted to your needs, including SEO, social media marketing, and advertising. Simply schedule a free consultation with our experts to see how you can smoothly scale your business online without disrupting your current offline processes.",

    rotation: -1,
  },
  {
    id: 4,
    title: "Competitor Analysis",
    quote:
      "Understanding your competition is critical to establishing a stronger digital presence. At Maple Matrix, we undertake in-depth competitor analysis to determine what others in your industry are doing well, where they fall short, and how your brand may exceed them. We analyse their strategies, content, keywords, advertisements, social performance, and consumer interaction patterns to develop data-driven plans that will offer your company a competitive advantage and help you stay ahead of the competition.",

    rotation: 2,
  },
];

// How much scrolling (in vh) each card needs to fly away. Raise it for a slower
// effect, lower it for a faster one.
const SCROLL_PER_CARD_VH = 40;

const AboutTestimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Total height = one screen (the pinned view) + scroll for each card that leaves.
  // The last card stays, so it doesn't need scroll of its own.
  const stackHeightVh = 100 + (testimonials.length - 1) * SCROLL_PER_CARD_VH;

  return (
    <section className="relative md:py-[60px] py-12">
      <Container>
        <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
          <AnimateOnView blur once>
            <h2 className="h2 md:mb-5 mb-3">
              Why <span className="text-gradient">Maple Matrix?</span>
            </h2>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.1}>
            <p className="text-muted-foreground">
              We design and develop powerful digital experiences that help
              businesses grow, scale, and stand out.
            </p>
          </AnimateOnView>
        </StaggerContainer>
      </Container>

      {/* Desktop Wrapper: Scroll-Linked Stacking */}
      <div
        ref={containerRef}
        className="hidden lg:block"
        style={{ height: `${stackHeightVh}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              progress={scrollYProgress}
              index={index}
              total={testimonials.length}
            />
          ))}
        </div>
      </div>

      {/* Mobile Wrapper: Simple List */}
      <div className="lg:hidden pb-24 mt-8">
        <Container>
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-background border border-border rounded-2xl p-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="h3">{testimonial.title}</h3>

                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* <div className="flex flex-col">
                  <span className="text-white font-medium text-sm">
                    {testimonial.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div> */}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default AboutTestimonials;
