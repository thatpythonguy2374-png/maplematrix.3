import Container from "@/components/container";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import {
  ArrowUpRight,
  Gauge,
  Layers3,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Designed Around Your Brand",
    description:
      "Your business is unique, and your application should be too. We create custom experiences that reflect your identity and connect with your audience.",
  },
  {
    icon: Smartphone,
    title: "Prototype",
    description:
      "Before development we provide written scope and clickable prototype, to showcase what you are paying for. After approval the development starts.",
  },
  {
    icon: Gauge,
    title: "Monitoring with admin panel",
    description:
      "We develop the application along with the admin panel so that your team can monitor the activities from the application.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-[#13110F] py-20 md:py-32">
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[#A98467]/10 blur-[120px]" />
      <div className="absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#C9A283]/[0.06] blur-[120px]" />

      <Container className="relative z-10">
        <AnimateOnView once blur>
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5F1ED]">
              Why Maple Matrix
            </span>
            <h2 className="h2 mt-4 mb-5 text-[#F5F1ED]">
              More Than Just a Website.{" "}
              <span className="text-gradient">A Better Way Forward.</span>
            </h2>
            <p className="text-body-md text-[#F5F1ED]">
              Good websites bring everything together: thoughtful design,
              reliable technology, and a clear understanding of what your
              business needs.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimateOnView once y={35} className="lg:col-span-2">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#C9A283]/20 bg-gradient-to-br from-[#292019] to-[#191613] p-8 md:p-10">
              <div className="absolute -right-10 -top-20 h-72 w-72 rounded-full bg-[#C9A283]/10 blur-[90px]" />

              <div className="relative z-10 max-w-lg">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A283]/25 bg-[#C9A283]/10">
                  <Sparkles className="h-6 w-6 text-[#C9A283]" />
                </div>

                <span className="text-xs uppercase tracking-widest text-[#C9A283]">
                  Our Approach
                </span>

                <h3 className="mt-3 mb-5 text-3xl font-medium text-[#F5F1ED] md:text-4xl">
                  Every Detail Has a Purpose.
                </h3>

                <p className="mb-8 leading-relaxed text-[#B8AAA0]">
                  We don't just build apps and call that mobile application. We
                  think about your users, your business goals and the experience
                  you want them to have on every screen. Each design and
                  development decision is taken to build an app that feels
                  intuitive, performs smoothly and delivers real value.
                </p>
              </div>

              <div className="absolute bottom-8 right-8 hidden opacity-20 md:block">
                <ShieldCheck className="h-32 w-32 text-[#C9A283]" />
              </div>
            </div>
          </AnimateOnView>

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <AnimateOnView
                key={benefit.title}
                once
                y={35}
                delay={index * 0.08}>
                <div className="h-full min-h-[240px] rounded-2xl border border-[#493B30]/60 bg-[#1C1917] p-7 transition-all duration-300 hover:border-[#C9A283]/40 hover:bg-[#211C18]">
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A283]/20 bg-[#C9A283]/10">
                    <Icon className="h-5 w-5 text-[#C9A283]" />
                  </div>

                  <h3 className="mb-3 text-xl font-medium text-[#F5F1ED]">
                    {benefit.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#B8AAA0]">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnView>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
