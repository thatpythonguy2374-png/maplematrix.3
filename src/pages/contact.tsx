import Layout from "@/components/layout";
import ContactForm from "@/components/sections/contact/contact-form";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>
          Contact Maple Matrix | Web & App Development Company in Delhi
        </title>

        <meta
          name="description"
          content="Looking for website development, app development or e-commerce website services in India? Contact Maple Matrix for custom website development, e-commerce website, app development and SEO."
        />

        <meta name="robots" content="index, follow" />

        <meta name="author" content="Maple Matrix" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Maple Matrix | Website development company in Delhi"
        />

        <meta
          property="og:description"
          content="Have a project in mind? Connect with Maple Matrix for website development, mobile app development and e-commerce solutions. We work with businesses across India."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.maplematrix.in/contact" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Contact Maple Matrix | Get in Touch"
        />

        <meta
          name="twitter:description"
          content="Let's bring your ideas to life. Contact Maple Matrix for website, app and e-commerce development services across India."
        />
        <link rel="canonical" href="https://www.maplematrix.in/contact" />
      </Helmet>
      <Layout>
        <ContactForm />
      </Layout>
    </>
  );
};

export default Contact;
