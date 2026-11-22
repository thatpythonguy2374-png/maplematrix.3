import Layout from "@/components/layout";
import AboutHero from "@/components/sections/about/about-hero";
import AboutTestimonials from "@/components/sections/about/about-testimonials";
import ConfidenceSection from "@/components/sections/about/confidence-section";
import InnovationSection from "@/components/sections/about/innovation-section";
import JourneySection from "@/components/sections/about/journey-section";
import WorldwideStats from "@/components/sections/about/worldwide-stats";
const About = () => {
  return (
    <Layout>
      <AboutHero />
      <ConfidenceSection />
      <InnovationSection />
      <JourneySection />
      <AboutTestimonials />
      <WorldwideStats />
    </Layout>
  );
};

export default About;
