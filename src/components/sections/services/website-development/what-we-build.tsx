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
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardContent>
            <FeatureCardTitle className="mb-5">
              Business Websites
            </FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Give your business a professional online presence with a website
              that communicates your brand, builds trust, and brings in new
              opportunities.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Monitor the client patterns effortlessly.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Generate detailed reports for informed decision-making.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Receive actionable alerts to stay ahead of competitors.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>
            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
          <FeatureCardImage
            src="/images/feature/web-dev.png"
            alt="Man using smartphone for financial analytics"
            className="border-2"
          ></FeatureCardImage>
        </FeatureCard>

        {/* Card 2: Effortless Payments And Transfers */}
        <FeatureCard
          imagePosition="left"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardImage
            src="/images/feature/feature-alt-2.png"
            alt="Person making payment transfer"
          ></FeatureCardImage>
          <FeatureCardContent>
            <FeatureCardTitle>E-commerce Websites</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Sell online with beautifully designed stores, seamless checkout
              experiences, secure payments, and easy product management.
            </FeatureCardDescription>
            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Seamless shopping experience across all devices.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Secure payment gateways and smooth checkout.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Easy product, inventory, and order management.
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
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardContent>
            <FeatureCardTitle>Landing pages</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              A single focused page for Google Ads, Meta Ads or a product
              launch. It loads fast, has one clear action, and tracks every form
              fill and call.
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
            alt="Business meeting and investment growth"
          ></FeatureCardImage>
        </FeatureCard>
        {/* Card 4: CRM Development */}
        <FeatureCard
          imagePosition="left"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardImage
            src="/images/feature/crm-development.png"
            alt="CRM dashboard showing customer and sales management"
          />

          <FeatureCardContent>
            <FeatureCardTitle>CRM Development</FeatureCardTitle>

            <FeatureCardDescription className="mb-5">
              Manage customer relationships, track leads, and streamline your
              sales process with a custom CRM solution designed around your
              business workflow.
            </FeatureCardDescription>

            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Centralized customer data and interaction history.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Lead tracking and automated sales workflows.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Custom dashboards and business performance insights.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>

            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
        </FeatureCard>
        {/* Card 5: Website Redesign & Migration */}
        <FeatureCard
          imagePosition="right"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardContent>
            <FeatureCardTitle>Website Redesign & Migration</FeatureCardTitle>

            <FeatureCardDescription className="mb-5">
              Give your existing website a fresh, modern look or move it to a
              better platform. We improve usability, performance, and
              functionality while keeping your digital presence intact.
            </FeatureCardDescription>

            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Modern layouts and improved user experiences.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Smooth platform migration with data preservation.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                SEO-friendly redirects and performance optimization.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>

            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>

          <FeatureCardImage
            src="/images/feature/website-redesign.png"
            alt="Old website transforming into a modern redesigned website"
          />
        </FeatureCard>
        {/* Card 6: Website Maintenance & Support */}
        <FeatureCard
          imagePosition="left"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardImage
            src="/images/feature/website-maintenance.png"
            alt="Website maintenance dashboard showing security and performance"
          />

          <FeatureCardContent>
            <FeatureCardTitle>Website Maintenance & Support</FeatureCardTitle>

            <FeatureCardDescription className="mb-5">
              Keep your website secure, updated, and running smoothly with
              ongoing maintenance, technical assistance, and proactive
              performance monitoring.
            </FeatureCardDescription>

            <FeatureCardBenefits>
              <FeatureCardBenefitItem>
                Regular updates, backups, and security monitoring.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Bug fixes and performance optimization.
              </FeatureCardBenefitItem>
              <FeatureCardBenefitItem>
                Reliable technical support and ongoing improvements.
              </FeatureCardBenefitItem>
            </FeatureCardBenefits>

            <FeatureCardAction>
              <Button asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </FeatureCardAction>
          </FeatureCardContent>
        </FeatureCard>
      </Container>
    </section>
  );
};

export default Features;
