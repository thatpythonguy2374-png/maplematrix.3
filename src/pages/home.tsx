import Layout from "@/components/layout";
import Hero from "@/components/sections/home/hero";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

const Features = lazy(() => import("@/components/sections/home/features"));
const Confidence = lazy(() => import("@/components/sections/home/confidence"));
const Content = lazy(() => import("@/components/sections/home/content"));
const Pricing = lazy(() => import("@/components/sections/home/pricing"));
const Testimonials = lazy(
  () => import("@/components/sections/home/testimonials"),
);
const FAQ = lazy(() => import("@/components/sections/shared/faq"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Website Development Company in Delhi | Maple Matrix</title>

        <meta
          name="description"
          content="Maple Matrix is a website development company in Delhi offering custom website development, mobile app development, e-commerce solutions and digital services for businesses."
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Maple Matrix" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Maple Matrix | Website Development Company in Delhi"
        />

        <meta
          property="og:description"
          content="Build your digital presence with Maple Matrix. We create custom websites, mobile applications and e-commerce solutions for growing businesses."
        />

        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Maple Matrix | Website Development Company in Delhi"
        />

        <meta
          name="twitter:description"
          content="Custom website development, mobile apps and e-commerce solutions for modern businesses."
        />
      </Helmet>
      <Layout>
        <Hero />
        <Suspense fallback={null}>
          <Features />
        </Suspense>
        <Suspense fallback={null}>
          <Confidence />
        </Suspense>
        <Suspense fallback={null}>
          <Content />
        </Suspense>
        <Suspense fallback={null}>
          <Pricing />
        </Suspense>
        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
      </Layout>
    </>
  );
};

export default Home;
