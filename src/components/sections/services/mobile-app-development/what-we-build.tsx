import { Link } from "react-router-dom";
import Container from "../../../container";
import { Button } from "../../../ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import {
  FeatureCard,
  FeatureCardAction,
  FeatureCardBenefitItem,
  FeatureCardBenefits,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardImage,
  FeatureCardTitle,
} from "../../../ui/feature-card";

const Features = () => {
  return (
    <section className="md:py-[60px] py-12 bg-background">
      <Container className="md:space-y-16 space-y-8">
        {/* Section Heading */}
        <AnimateOnView once blur>
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <span className="text-sm uppercase tracking-[0.2em] text-[#F5F1ED] font-semibold">
              What We Create
            </span>
            <h2 className="h2 mt-4 mb-5 text-[#F5F1ED]">
              Different Ideas.{" "}
              <span className="text-gradient">One Digital Partner.</span>
            </h2>
            <p className="text-[#F5F1ED] text-body-md">
              Every business has a different story to tell. We build websites
              and digital platforms that bring those stories to life.
            </p>
          </div>
        </AnimateOnView>

        {/* Card 1: Intelligent Financial Insights */}
        <FeatureCard
          imagePosition="right"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <FeatureCardContent>
            <FeatureCardTitle className="mb-5">
              Android Application Development
            </FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Apps developed for the devices people use everyday in India, with
              smooth performance across different screen sizes and budget
              smartphones.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Lightweight apps that can run smoothly on every smartphone.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Secured integratons and reliable updates
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Optimised for different screen sizes.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
          <FeatureCardImage
            src="/images/feature/feature-alt-1.png"
            alt="Man using smartphone for financial analytics"></FeatureCardImage>
        </FeatureCard>

        {/* Card 2: Effortless Payments And Transfers */}
        <FeatureCard
          imagePosition="left"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <FeatureCardImage
            src="/images/feature/feature-alt-2.png"
            alt="Person making payment transfer"></FeatureCardImage>
          <FeatureCardContent>
            <FeatureCardTitle>iOS Application Development</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Apps specifically designed and developed for Apple EcoSystem.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Seamless integration across iPhone, iPad and other Apple
                devices.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Interfaces built around Apple's design guidelines.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                High performance apps optimised for iOS ecosystem.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
        </FeatureCard>

        {/* Card 3: Flexible Business Solutions */}
        <FeatureCard
          imagePosition="right"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24">
          <FeatureCardContent>
            <FeatureCardTitle>Cross Platform Applications</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Applications contains one codebase but runs on both Android and
              iOS devices. Works well for most business applications, costs less
              as compared to two separate apps.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Conversion-focused layouts with clear calls to action.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Fast-loading, mobile-friendly pages built for campaigns.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Form and call tracking to measure campaign performance.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
          <FeatureCardImage
            src="/images/feature/feature-alt-3.png"
            alt="Business meeting and investment growth"></FeatureCardImage>
        </FeatureCard>
      </Container>
    </section>
  );
};

export default Features;
