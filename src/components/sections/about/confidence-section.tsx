import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ConfidenceSection = () => {
  const stats = [
    {
      label: "Modern technology",
      value: "100%",
      description: "Tailored to your business needs",
    },
    {
      label: "User experience",
      value: "UX/UI",
      description: "Designed with your customers in mind",
    },
    {
      label: "Built for growth",
      value: "24/7",
      description: "Your digital presence, always online",
    },
  ];

  return (
    <section className="py-12 md:py-[60px]">
      <Container className="md:space-y-20 space-y-12">
        <StaggerContainer className="text-center md:max-w-2xl max-w-sm mx-auto">
          <AnimateOnView blur once>
            <h2 className="h2 md:mb-5 mb-3">
              Build Your Digital Future With Confidence
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
              <span className="text-sm text-accent">{stat.label}</span>
              <div className="flex flex-col gap-2">
                <h3 className="h3 flex items-center gap-3">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ConfidenceSection;
