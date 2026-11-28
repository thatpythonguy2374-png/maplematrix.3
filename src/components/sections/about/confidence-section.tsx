import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ConfidenceSection = () => {
  const stats = [
    {
      value: "Latest Technology",
      description:
        "We uses innovative marketing tools, AI-powered platforms, and comprehensive analytics to keep your business ahead of the competition. Using the latest digital marketing tools boosts campaign success while also ensuring accurate targeting, higher conversions, and a consistent experience for your audience across all channels.",
    },
    {
      value: "Fast and Timely delivery",
      description:
        "In digital marketing, timing is key, and we at Maple Matrix understand how important it is to your brand's online growth. Our marketing team guarantees that each campaign, strategy, and deliverable is completed on schedule, allowing your company to go forward with confidence and consistency.",
    },
    {
      value: "Multiple options to choose from",
      description:
        "Unsure which digital marketing technique will be most effective for your business? Don't worry, our professionals are here to help you. We provide a comprehensive range of digital solutions adapted to your needs, including SEO, social media marketing, and advertising. Simply schedule a free consultation with our experts to see how you can smoothly scale your business online without disrupting your current offline processes.",
    },
    {
      value: "Competitor Analysis",
      description:
        "Understanding your competition is critical to establishing a stronger digital presence. At Maple Matrix, we undertake in-depth competitor analysis to determine what others in your industry are doing well, where they fall short, and how your brand may exceed them. We analyse their strategies, content, keywords, advertisements, social performance, and consumer interaction patterns to develop data-driven plans that will offer your company a competitive advantage and help you stay ahead of the competition.",
    },
  ];

  return (
    <section className="py-12 md:py-[60px]">
      <Container className="md:space-y-20 space-y-12">
        <StaggerContainer className="text-center md:max-w-2xl max-w-sm mx-auto">
          <AnimateOnView blur once>
            <h2 className="h2 md:mb-5 mb-3">
              Why <span className="text-gradient">Maple Matrix?</span>
            </h2>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.1}>
            <p className="text-muted-foreground md:mb-8 mb-5">
              We design and develop powerful digital experiences that help
              businesses grow, scale, and stand out.
            </p>
          </AnimateOnView>

          <AnimateOnView
            y={20}
            once
            delay={0.2}
            className="flex flex-col items-center gap-4">
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((stat, index) => (
            <AnimateOnView
              key={index}
              className="py-6 pl-6 pr-3 rounded-[20px] bg-card border border-border flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="h3 flex items-center gap-3 pt3">{stat.value}</h3>
                <p className="text-muted-foreground pt-5">{stat.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ConfidenceSection;
