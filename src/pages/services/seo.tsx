import Layout from "@/components/layout";
import Hero from "@/components/sections/services/seo/hero";
import WhatWeBuild from "@/components/sections/services/seo/what-we-build";
import WhyChooseUs from "@/components/sections/services/seo/why-choose-us";
import DevelopmentProcess from "@/components/sections/services/seo/development-process";

import FAQ from "@/components/sections/services/seo/faq";
const SEO = () => {
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

export default SEO;
