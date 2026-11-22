import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const journeyTabs = [
  {
    title: "Understand Your Vision",
    description:
      "Every great solution starts with listening. We take the time to understand your business, your challenges, and your goals to create a digital strategy that truly fits your vision.",
    year: "01",
    subtitle: "Understanding",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Design With Purpose",
    description:
      "We believe great design goes beyond appearance. We create intuitive, engaging, and user-focused experiences that connect your brand with the people who matter most.",
    year: "02",
    subtitle: "Creativity",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Build With Innovation",
    description:
      "We turn ideas into reality through modern technologies and thoughtful development, building reliable, scalable, and high-performing digital solutions.",
    year: "03",
    subtitle: "Innovation",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Grow Together",
    description:
      "Our commitment doesn't end at launch. We believe in building lasting partnerships, helping businesses adapt, evolve, and unlock new opportunities through technology.",
    year: "04",
    subtitle: "Growth",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
  },
];

const JourneySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % journeyTabs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-[60px]">
      <Container className="md:space-y-20 space-y-12">
        {/* Section Heading */}
        <StaggerContainer className="text-center md:max-w-[630px] max-w-xs mx-auto">
          <AnimateOnView blur once>
            <h2 className="h2 md:mb-5 mb-3">We build what moves you forward</h2>
          </AnimateOnView>

          <AnimateOnView blur once delay={0.1}>
            <p className="text-muted-foreground">
              We think that all business should have a strong digital presence.
              We combine creativity, technology and thoughtful design to turn
              ambitious ideas into meaningful digital solutions.
            </p>
          </AnimateOnView>
        </StaggerContainer>

        {/* Mission Journey */}
        <div className="relative bg-card md:rounded-[40px] rounded-lg border border-border p-6 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col h-full justify-between py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="space-y-3">
                  <h3 className="h4">{journeyTabs[activeTab].title}</h3>

                  <p className="text-muted-foreground text-body-md leading-relaxed max-w-md">
                    {journeyTabs[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress and Step */}
              <div className="md:mt-12 mt-8 flex flex-col-reverse md:flex-col md:gap-8 gap-2">
                {/* Dots Pagination */}
                <div className="flex gap-3 p-2 bg-white/5 w-fit rounded-full border border-white/10">
                  {journeyTabs.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        activeTab === index
                          ? "w-8 bg-white"
                          : "w-2 bg-white/20",
                      )}
                    />
                  ))}
                </div>

                {/* Step Number */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}>
                    <div className="h3 mb-2">{journeyTabs[activeTab].year}</div>

                    <div className="text-lg text-muted-foreground font-medium">
                      {journeyTabs[activeTab].subtitle}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square overflow-hidden md:rounded-[32px] rounded-lg">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />

                  <img
                    src={journeyTabs[activeTab].image}
                    alt={journeyTabs[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JourneySection;
