import Layout from "@/components/layout";
import Hero from "@/components/sections/services/mobile-app-development/hero";
import WhatWeBuild from "@/components/sections/services/mobile-app-development/what-we-build";
import WhyChooseUs from "@/components/sections/services/mobile-app-development/why-choose-us";
import DevelopmentProcess from "@/components/sections/services/mobile-app-development/development-process";
import FAQ from "@/components/sections/services/mobile-app-development/faq";

const MobileApp = () => {
  return (
    <Layout>
      <Hero />
      <WhatWeBuild />
      <WhyChooseUs />
      <DevelopmentProcess />
      <FAQ />
    </Layout>
  );
};

export default MobileApp;
