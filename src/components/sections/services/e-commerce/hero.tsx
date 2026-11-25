import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { StaggerContainer } from "@/components/ui/motion/stagger";
import ServiceEnquiryForm from "@/components/sections/shared/service-enquiry-form";

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
                Build an Online Store That Drives Sales{" "}
                <span className="text-gradient">Forward.</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md text-[#E3DAD2] max-w-2xl mx-auto mb-5">
                Your online store should do more than display products. It
                should make shopping effortless, build customer confidence, and
                turn visitors into buyers. You get a store that is easy for
                customers to buy from, easy for your team to manage, and set up
                so Google can find your products.
              </p>
            </AnimateOnView>
          </StaggerContainer>

          {/* E-commerce Enquiry Form */}

          <StaggerContainer className="relative mx-auto mt-16 w-full max-w-[600px]">
            <AnimateOnView delay={0.2} className="w-full">
              <div className="relative overflow-hidden rounded-2xl border border-[#493B30] bg-[#1C1917]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#A98467]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 text-center">
                    <h2 className="text-2xl font-semibold text-[#F5F1ED] sm:text-3xl">
                      Let's Build Your{" "}
                      <span className="text-gradient">Online Store.</span>
                    </h2>

                    <p className="mt-2 text-sm text-[#B8AAA0]">
                      Tell us about your business and let's create an online
                      shopping experience that sells.
                    </p>
                  </div>

                  <ServiceEnquiryForm />
                </div>
              </div>
            </AnimateOnView>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Hero;
