import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { Link } from "react-router-dom";
import Container from "../../container";
import { Button } from "../../ui/button";
import {
  FeatureCard,
  FeatureCardAction,
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardImage,
  FeatureCardTitle,
} from "../../ui/feature-card";

const cards = [
  {
    id: 1,
    title: "Looks right on every screen",
    description:
      "Your customers switch between phones, tablets and laptops all day. We build each page to feel natural on every one of them, so nobody has to pinch, zoom or squint to find what they need.",
    imageSrc: "images/home/feature-1.png",
    imageAlt: "A website displayed on a phone, tablet and desktop",
    cta: "See our work",
  },
  {
    id: 2,
    title: "Fast from the very first click",
    description:
      "People leave slow websites without a second thought. We keep our code clean and our images light, so your site opens quickly and keeps visitors around long enough to become customers.",
    imageSrc: "images/home/feature-2.png",
    imageAlt: "A fast-loading website with performance scores",
    cta: "See how we build",
  },
  {
    id: 3,
    title: "Made around your brand",
    description:
      "No cookie-cutter templates here. We start by getting to know your story, your goals and your audience, then design a site that looks and sounds like you.",
    imageSrc: "images/home/feature-3.png",
    imageAlt: "A custom website design with a brand's colors and style",
    cta: "Start a project",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-[60px] bg-background">
      <Container className="space-y-8 md:space-y-20">
        <StaggerContainer className="text-center max-w-xl mx-auto">
          <AnimateOnView blur>
            <h2 className="h2 mb-6">Websites that work as hard as you do</h2>
          </AnimateOnView>
          <AnimateOnView blur delay={0.2}>
            <p className="text-muted-foreground">
              We design and build sites that look great, load quickly and feel
              right on any device, so more of your visitors stay, trust you and
              get in touch.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        <StaggerContainer className="max-w-[1062px] mx-auto md:space-y-[60px] space-y-8">
          {cards.map((card, index) => (
            <AnimateOnView
              delay={index * 0.1}
              key={card.id}
              className="md:sticky md:top-24 z-10 bg-background md:rounded-[30px] rounded-lg">
              <FeatureCard imagePosition="right">
                <FeatureCardContent>
                  <FeatureCardTitle>{card.title}</FeatureCardTitle>
                  <FeatureCardDescription>
                    {card.description}
                  </FeatureCardDescription>
                  <FeatureCardAction>
                    <Button asChild>
                      <Link to="/contact">{card.cta}</Link>
                    </Button>
                  </FeatureCardAction>
                </FeatureCardContent>
                <FeatureCardImage
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  className="rounded-[24px] overflow-hidden"
                />
              </FeatureCard>
            </AnimateOnView>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

export default Features;
