import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import {
  Code2,
  Palette,
  ShoppingCart,
  Search,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Website Development",
    description:
      "Tailor-made websites built around your business goals, functionality, and unique requirements.",
    icon: Code2,
  },
  {
    title: "Website Re-design",
    description:
      "Give your existing website a modern look. We improve design, speed and user experience, making it look better, work faster and get better results for your business.",
    icon: Palette,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Create your online store to sell products or services on the internet. We create user friendly, easy to use and secure e-commerce websites to help you expand your business and reach more customers.",
    icon: ShoppingCart,
  },
  {
    title: "SEO & Digital Presence",
    description:
      "Improve your wehsbite's visibilty on Google and reach more potential customer. We use effective SEO strategies to help your business rank higher in search results and grow online.",
    icon: Search,
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into powerful mobile apps. We create simple-to-use Android and iOS apps to help your business engage with customers and grow digitally.",
    icon: Smartphone,
    highlight: true,
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your website and app running smoothly, securely and up to date. We offer regular updates, bug fixes, security checks and technical support when you need it.",
    icon: ShieldCheck,
  },
];

const InnovationSection = () => {
  return (
    <section className="py-12 md:py-[60px]">
      <Container className="md:space-y-20 space-y-12">
        <StaggerContainer className="text-center md:max-w-none max-w-sm mx-auto">
          <AnimateOnView blur once>
            <h2 className="h2 md:mb-5 mb-3">
              Innovation That Builds Your Digital Future
            </h2>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.1}>
            <p className="text-muted-foreground max-w-[660px] mx-auto">
              From stunning websites to scalable digital platforms, we deliver
              technology-driven solutions that help your business thrive.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimateOnView
              key={index}
              className={cn(
                "relative md:p-8 p-6 rounded-[20px] bg-card border border-border flex flex-col gap-6 overflow-hidden transition-all duration-300 hover:border-white/10 group",
              )}>
              {/* Highlight Glow Effect */}
              {feature.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16 pointer-events-none" />
              )}

              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>

              <div className="space-y-3">
                <h3 className="h4">{feature.title}</h3>

                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InnovationSection;
