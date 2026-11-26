import Layout from "@/components/layout";
import AboutHero from "@/components/sections/about/about-hero";
import AboutTestimonials from "@/components/sections/about/about-testimonials";
import ConfidenceSection from "@/components/sections/about/confidence-section";
import InnovationSection from "@/components/sections/about/innovation-section";
import JourneySection from "@/components/sections/about/journey-section";
import WorldwideStats from "@/components/sections/about/worldwide-stats";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        <title>
          About Maple Matrix | Web & App Development Company in Delhi
        </title>

        <meta
          name="description"
          content="Get know about Maple Matrix, web development company in Dwarka, New Delhi, Delhi. Offering App Development, E-commerce Development and SEO."
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Maple Matrix" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Maple Matrix | Website development company in Delhi"
        />

        <meta
          property="og:description"
          content="We build your ideas into meaningful experiences. With scope, creativity and technology, combining all we create websites, mobile applications, and e-commerce websites that help businesses move forward."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maplematrix.in/about" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Maple Matrix | Who we are and our expertise."
        />

        <meta
          name="twitter:description"
          content="Learn about Maple Matrix and how we build websites, e-commerce portal, mobile applications for your brand to take your business forward."
        />
        <link rel="canonical" href="https://www.maplematrix.in/about" />
      </Helmet>
      <Layout>
        <AboutHero />
        <ConfidenceSection />
        <InnovationSection />
        <JourneySection />
        {/* <AboutTestimonials /> */}
        <WorldwideStats />
      </Layout>
    </>
  );
};

export default About;
