import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import {
  FeatureCardBenefitItem,
  FeatureCardBenefits,
} from "@/components/ui/feature-card";
import { Box, Database, Settings, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const integrations = [
  {
    id: "website-development",
    name: "Website Development",
    description:
      "Your website is more than just an online identity. It's where people find your brand, get to know tour services and decide to work with you. We build digital experiences that matter on every interation.",
    benefits: [
      "Custom Next.JS & React responsive architecture.",
      "Fast, mobile-friendly pages on every screen.",
      "High performance custom web designs.",
    ],
    icon: <Sparkles className="w-6 h-6 text-rose-400" />,
    color: "bg-rose-500/10",
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    description:
      "Your online store should do more than display products. It should make shopping effortless, build customer confidence, and turn visitors into buyers. You get a store that is easy for customers to buy from, easy for your team to manage, and set up so Google can find your products.",
    benefits: [
      "Custom Shopify, WooCommerce and Custom store.",
      "Catelogue management.",
      "Payment gateway & logistics API integration.",
    ],
    icon: <Database className="w-6 h-6 text-blue-400" />,
    color: "bg-blue-500/10",
  },
  {
    id: "seo",
    name: "SEO",
    description:
      "A great website is just the starting point. Our SEO services help your business rank higher on Google, reach people who are actively seaching for what you offer, and turn that organic traffic into real enquiries and customers.",
    benefits: [
      "Technical auits & reviews.",
      "Content optimization page by page.",
      "Proper reports with clear explanation.",
    ],
    icon: <Settings className="w-6 h-6 text-pink-400" />,
    color: "bg-pink-500/10",
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    description:
      "We build, design and develop Android, iOS and cross platform mobile applications that delivers seamless user experience. You will get a complete working application with design by your approval.",
    benefits: [
      "Secured integratons and reliable updates.",
      "One build that works on iOS and Android.",
      "Support after launch as your app grows.",
    ],
    icon: <Box className="w-6 h-6 text-green-400" />,
    color: "bg-green-500/10",
  },
];

const IntegrationHero = () => {
  return (
    <section className="hero-padding-top pb-20 bg-background">
      <Container className="md:space-y-20 space-y-8">
        {/* Hero Section */}
        <StaggerContainer className="max-w-[540px] mx-auto text-center">
          <AnimateOnView blur>
            <h1 className="h2 md:mb-5 mb-3">Services That Fit Your Needs</h1>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-lg">
              At Maple Matrix we first listen to your ideas, grasp your
              requirements and define the scope of your project. We recommend
              services that best match your needs based on your goals, ensuring
              you get the right solutions without paying for what you don't
              need.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {integrations.map((item, index) => (
            <AnimateOnView key={item.id} y={20} blur once delay={index * 0.1}>
              <Link
                to={`/services/${item.id}`}
                className="group block h-full bg-card border border-border md:rounded-[32px] rounded-lg md:p-10 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
                <div
                  className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="h3 mb-4">{item.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {item.description}
                </p>
                <p>What's included.</p>
                <FeatureCardBenefits>
                  {item.benefits.map((benefit) => (
                    <FeatureCardBenefitItem key={benefit}>
                      {benefit}
                    </FeatureCardBenefitItem>
                  ))}
                </FeatureCardBenefits>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IntegrationHero;
