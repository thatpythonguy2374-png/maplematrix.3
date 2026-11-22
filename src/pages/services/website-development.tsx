import Layout from "@/components/layout";
import Hero from "@/components/sections/services/website-development/hero";
import WhatWeBuild from "@/components/sections/services/website-development/what-we-build";
import WhyChooseUs from "@/components/sections/services/website-development/why-choose-us";
import DevelopmentProcess from "@/components/sections/services/website-development/development-process";
import Technologies from "@/components/sections/services/website-development/technologies";
import FAQ from "@/components/sections/services/website-development/faq";

const WebsiteMaintain = () => {
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
};

export default WebsiteMaintain;
