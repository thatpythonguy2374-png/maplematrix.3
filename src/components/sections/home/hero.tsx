import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";

const Hero = () => {
  return (
    <section
      className="
        relative flex items-center justify-center
        overflow-hidden
        hero-padding-top
        pb-16 md:pb-24
        bg-[url('/images/home/hero-bg.webp')]
        bg-cover bg-center bg-no-repeat
      ">
      {/* Warm charcoal overlay */}
      <div className="absolute inset-0 bg-[#171412]/45 pointer-events-none" />

      {/* Copper ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_25%,rgba(169,132,103,0.18),transparent_65%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0E0D0C] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            <AnimateOnView blur>
              <h1 className="h1 text-[#F5F1ED] mb-5">
                Web Designs That Speak For Your Brand
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md text-[#E3DAD2] max-w-2xl mx-auto mb-5">
                Created for every screen, optimized for every experience. We
                build responsive websites that scale to any device, keeping your
                brand looking its best everywhere.
              </p>
            </AnimateOnView>
          </StaggerContainer>

          {/* Device showcase */}
          <StaggerContainer className="relative mx-auto mt-16 w-full max-w-[840px] aspect-[840/480]">
            {/* Tablet */}
            <div className="absolute bottom-0 left-0 w-[34%] aspect-[568/728] z-0">
              <AnimateOnView delay={0.3} className="w-full h-full">
                <img
                  src="/images/home/tablet.svg"
                  alt="Responsive website displayed on a tablet"
                  className="w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.65)]"
                />
              </AnimateOnView>
            </div>

            {/* Desktop */}
            <div className="absolute bottom-0 right-0 w-[46%] aspect-[808/600] z-0">
              <AnimateOnView delay={0.1} className="w-full h-full">
                <img
                  src="/images/home/desktop.svg"
                  alt="Website displayed on a desktop monitor"
                  className="w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.65)]"
                />
              </AnimateOnView>
            </div>

            {/* Phone */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28%] aspect-[408/808] z-10">
              <AnimateOnView delay={0.2} className="w-full h-full">
                <img
                  src="/images/home/phone.svg"
                  alt="Website displayed on a mobile phone"
                  className="w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)]"
                />
              </AnimateOnView>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
