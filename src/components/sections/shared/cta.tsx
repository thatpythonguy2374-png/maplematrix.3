import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-32">
      {/* Background Gradient similar to design (dark with subtle glow) */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

      <Container className="relative z-10 space-y-10">
        <StaggerContainer className="text-center">
          <AnimateOnView blur>
            <h2 className="h2 md:mb-5 mb-3">
              Web Designs That Speaks For Your Brand
            </h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground md:mb-10 mb-5">
              Tell us about your project and we'll get back to you within one
              business day.{" "}
            </p>
          </AnimateOnView>
          <AnimateOnView>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </AnimateOnView>
        </StaggerContainer>
        <div className="w-full max-w-[1100px] mx-auto">
          <img
            src="/images/web-development-showcase.png"
            alt="Maple Matrix website development showcased across three desktop displays"
            className="w-full h-auto object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default CTA;
