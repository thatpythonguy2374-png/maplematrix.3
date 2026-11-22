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
              Every online store has a potential to grow. We create e-commerce
              experiences that make you customer's shopping effortless along
              with it you can also keep track of your customer's requirements.
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
              Custom e-commerce development
            </FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              A store built from scratch on Next.js and a database, for
              businesses with unusual products, pricing rules, B2B ordering or
              integrations that platforms cannot handle.
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
            src="/images/feature/feature-alt-1.png"
            alt="Man using smartphone for financial analytics"
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
            <FeatureCardTitle>
              Payment gateway and checkout set-up
            </FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              We help you choose a payment gateway and connect it, including
              UPI, cards, net banking and cash on delivery where it makes sense,
              then test the full checkout.
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
            <FeatureCardTitle>Shipping and order management</FeatureCardTitle>
            <FeatureCardDescription className="mb-5">
              Courier and shipping rate integration, order status emails, GST
              invoices and returns handling, so the work after the sale runs
              smoothly.
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
        {/* Card 4: Product upload and catalogue set-up */}
        <FeatureCard
          imagePosition="left"
          className="border-0 bg-[rgba(20,20,20,1)] sticky top-24"
        >
          <FeatureCardImage
            src="/images/feature/crm-development.png"
            alt="CRM dashboard showing customer and sales management"
          />

          <FeatureCardContent>
            <FeatureCardTitle>
              Product upload and catalogue set-up
            </FeatureCardTitle>

            <FeatureCardDescription className="mb-5">
              Bulk upload of products, variants, categories and images, with
              clean URLs and descriptions ready for search.
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
            <FeatureCardTitle>E-commerce SEO and migration</FeatureCardTitle>

            <FeatureCardDescription className="mb-5">
              Category and product page optimisation, product schema and
              redirects. If you are moving from another platform, we protect the
              rankings you already have.
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
      </Container>
    </section>
  );
};

export default Features;
