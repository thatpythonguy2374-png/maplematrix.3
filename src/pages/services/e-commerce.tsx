import Hero from "@/components/sections/services/e-commerce/hero";
import Layout from "@/components/layout";
import WhatWeBuild from "@/components/sections/services/e-commerce/what-we-build";
import WhyChooseUs from "@/components/sections/services/e-commerce/why-choose-us";
import DevelopmentProcess from "@/components/sections/services/e-commerce/development-process";
import Technologies from "@/components/sections/services/e-commerce/technologies";
import FAQ from "@/components/sections/services/e-commerce/faq";
export default function EcommerceDevelopment() {
  return (
    <Layout>
      <Hero />
      <WhatWeBuild />
      <WhyChooseUs />
      <DevelopmentProcess />
      <Technologies />
      <FAQ />
    </Layout>
  );
}
