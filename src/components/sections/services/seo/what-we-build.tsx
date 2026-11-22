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
            <FeatureCardTitle className="mb-5">SEO Audit</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              A full thorough checkup of your site which covers Technical SEO,
              On-Page SEO, Off-Page SEO.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Monitoring the Core Web Vitals.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Uncovers the issues preventing Google from crawling your site.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Regular SEO Audits helps to spot the outdates practises.
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
            <FeatureCardTitle>E-commerce SEO</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              We optimize the category and product pages of your e-commerce
              store, so that without paying for ads to a marketing company you
              can get free high-intent shoppers.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Helps bring down the marketing cost.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Visibility of your products will increase automatically.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Clean product data and schema help AI tools to recommend your
                products.
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
            <FeatureCardTitle>AI search optimization</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Structuring your brand in ChatGPT, Claude, Gemini, Perplexity and
              Google AI Overviews while answering user questions.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Already trust the suggestions once AI recommends your brand.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                It acts as an word of mouth.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Brings more potential customers as visitors.
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
