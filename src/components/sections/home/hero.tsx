import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import { getDriveImageUrl } from "@/lib/drive";

const Hero = () => {
  const iPhone =
    "https://drive.google.com/thumbnail?id=10mqipo1UIlYC18MhgQLVjdox_b8lR88a&sz=w1000";

  return (
    <section
      className="
        relative flex items-center justify-center
        overflow-hidden
        hero-padding-top
        pb-0
        bg-[url('/images/home/hero-bg.webp')]
        bg-cover bg-center bg-no-repeat
      ">
      {/* Warm charcoal overlay */}
      <div className="absolute inset-0 bg-[#171412]/45 pointer-events-none" />

      {/* Copper ambient glow (top) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_25%,rgba(169,132,103,0.18),transparent_65%)]" />

      {/* Copper glow behind the devices, ties them to the page */}
      <div className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none bg-[radial-gradient(ellipse_at_50%_100%,rgba(169,132,103,0.22),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <StaggerContainer>
            <AnimateOnView blur>
              {/* text-balance fixes the stranded "For" on line one */}
              <h1 className="h1 text-[#F5F1ED] mb-5 text-balance">
                Web Designs That Speak For Your{" "}
                <span className="text-gradient">Brand.</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md text-[#EFE8E1] max-w-xl mx-auto mb-8 text-balance">
                Created for every screen, optimized for every experience. We
                build responsive websites that scale to any device, keeping your
                brand looking its best everywhere.
              </p>
            </AnimateOnView>

            {/* CTA: same Button as the navbar "Contact Us" */}
            <AnimateOnView delay={0.3}>
              <Button asChild>
                <Link to="/contact">Start a project</Link>
              </Button>
            </AnimateOnView>
          </StaggerContainer>

          {/*
            Device showcase.
            Phone sits clearly in front; tablet and monitor tuck behind it with a
            deliberate overlap (no more edge-to-edge tangents). All three share one
            ground line, one shadow, and a contact shadow on the "floor".
            The group is nudged down so the devices bleed off the bottom of the hero.
          */}
          <div className="relative mx-auto mt-12 md:mt-16 w-full max-w-[840px] aspect-[840/480] translate-y-[7%]">
            {/* Floor / contact shadow */}
            <div
              aria-hidden
              className="absolute inset-x-[2%] -bottom-3 h-14 pointer-events-none blur-xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65),transparent_70%)]"
            />

            <StaggerContainer className="absolute inset-0">
              {/* Tablet */}
              <div className="absolute bottom-0 left-[2%] w-[38%] aspect-[568/728] z-0">
                <AnimateOnView delay={0.3} className="w-full h-full">
                  <img
                    src="/images/home/tablet.webp"
                    alt="Responsive website displayed on a tablet"
                    width={568}
                    height={728}
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]"
                  />
                </AnimateOnView>
              </div>

              {/* Desktop */}
              <div className="absolute bottom-0 right-0 w-[50%] aspect-[808/600] z-0">
                <AnimateOnView delay={0.1} className="w-full h-full">
                  <img
                    src="/images/home/desktop.webp"
                    alt="Website displayed on a desktop monitor"
                    width={808}
                    height={600}
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.6)]"
                  />
                </AnimateOnView>
              </div>

              {/* Phone (hero device). Slightly dimmed so it doesn't outshine the headline */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[28%] aspect-[408/808] z-10">
                <AnimateOnView delay={0.2} className="w-full h-full">
                  <img
                    src="/images/home/phone.webp"
                    alt="Website displayed on a mobile phone"
                    width={408}
                    height={808}
                    fetchPriority="high"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-contain brightness-[0.88] drop-shadow-[0_24px_40px_rgba(0,0,0,0.7)]"
                  />
                </AnimateOnView>
              </div>
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* Bottom fade, now above the devices so they dissolve into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-20 bg-gradient-to-t from-[#0E0D0C] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
