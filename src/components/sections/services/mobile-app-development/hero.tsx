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
                Let's Turn Your Ideas Into Powerful Mobile{" "}
                <span className="text-gradient"> Experiences.</span>
              </h1>
            </AnimateOnView>

            <AnimateOnView blur delay={0.2}>
              <p className="text-body-md text-[#E3DAD2] max-w-2xl mx-auto mb-5">
                We build, design and develop Android, iOS and cross platform
                mobile applications that delivers seamless user experience. You
                will get a complete working application with design by your
                approval.
              </p>
            </AnimateOnView>
          </StaggerContainer>

          {/* Device showcase */}

          <StaggerContainer className="relative mx-auto mt-16 w-full max-w-[600px]">
            <AnimateOnView delay={0.2} className="w-full">
              <div className="relative overflow-hidden rounded-2xl border border-[#493B30] bg-[#1C1917]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#A98467]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-7 text-center">
                    <h2 className="text-2xl font-semibold text-[#F5F1ED] sm:text-3xl">
                      Tell Us About Your{" "}
                      <span className="text-gradient">Project.</span>
                    </h2>

                    <p className="mt-2 text-sm text-[#B8AAA0]">
                      Share a few details and our team will get in touch with
                      you.
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      const form = e.currentTarget;
                      const formData = new FormData(form);

                      const enquiry = {
                        name: formData.get("name"),
                        phone: formData.get("phone"),
                        service: formData.get("service"),
                      };

                      console.log("Project enquiry:", enquiry);

                      // Connect your backend/API here.
                      // Example: await fetch("/api/enquiries", { ... })

                      form.reset();
                    }}
                    className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[#F5F1ED]">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-xl border border-[#493B30] bg-[#0E0D0C]/80 px-4 py-3 text-sm text-[#F5F1ED] outline-none transition placeholder:text-[#786C63] focus:border-[#C9A283] focus:ring-2 focus:ring-[#C9A283]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-[#F5F1ED]">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        pattern="[+]?[0-9\s-]{10,15}"
                        required
                        className="w-full rounded-xl border border-[#493B30] bg-[#0E0D0C]/80 px-4 py-3 text-sm text-[#F5F1ED] outline-none transition placeholder:text-[#786C63] focus:border-[#C9A283] focus:ring-2 focus:ring-[#C9A283]/15"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-[#F5F1ED]">
                        Type of Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border border-[#493B30] bg-[#0E0D0C]/80 px-4 py-3 text-sm text-[#B8AAA0] outline-none transition focus:border-[#C9A283] focus:ring-2 focus:ring-[#C9A283]/15">
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="E-commerce Development">
                          E-commerce Development
                        </option>
                        <option value="Web Application Development">
                          Web Application Development
                        </option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO Services">SEO Services</option>
                        <option value="Website Maintenance">
                          Website Maintenance
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A283] to-[#8F6B52] px-6 py-3.5 text-sm font-semibold text-[#17110D] shadow-lg shadow-[#8F6B52]/15 transition hover:-translate-y-0.5 hover:shadow-[#8F6B52]/30">
                      Get a Free Consultation
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <p className="text-center text-xs text-[#887B70]">
                      Your information is safe with us. We'll only contact you
                      about your enquiry.
                    </p>
                  </form>
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
