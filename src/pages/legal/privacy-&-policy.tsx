import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";

const PrivacyPolicyPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Privacy & Policy | ${appConfig.name}`,
    description: `${appConfig.description}`,
    url: `${appConfig.url}/legal/privacy-&-policy`,
  };

  return (
    <>
      <SEO
        title={`Privacy & Policy | ${appConfig.name}`}
        description={`${appConfig.description}`}
        canonicalUrl={`/legal/privacy-&-policy`}
        ogType="website"
        jsonLd={jsonLd}
      />
      <Layout>
        <LegalHero
          title={`Privacy & Policy`}
          description={`  Last updated - November 25, 2026`}
        />
        <section>
          <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
            {/* Main Content Column */}
            <article className="max-w-[1030px]">
              <p className="lead text-xl text-muted-foreground md:mb-8 mb-4">
                In the rapidly evolving landscape of digital commerce, payment
                gateways have emerged as the unsung heroes, silently powering
                the transactions that drive the global economy.
              </p>
              <h3 className="mb-2"> 1. Introduction</h3>
              <p className="md:mb-8 mb-4">
                Maple Matrix ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                website and services.
              </p>

              <h3 className="mb-2">2. Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us, including:
                name and email address when you create an account; payment
                information when you make a purchase; communications you send to
                us; and any other information you choose to provide.
              </p>

              <blockquote className="md:mb-8 mb-4">
                " We automatically collect certain information when you use our
                Service, including: device and browser information; IP address;
                pages visited and time spent; referring website; and cookies and
                similar technologies."
              </blockquote>

              <h3 className="mb-2">3. How We Use Your Information</h3>
              <p className="md:mb-8 mb-4">
                We use the information we collect to: provide, maintain, and
                improve our Service; process transactions and send related
                information; send you technical notices and support messages;
                respond to your comments and questions; send promotional
                communications (with your consent); monitor and analyze trends
                and usage; and detect, investigate, and prevent security
                incidents.
              </p>

              <h3 className="mb-2">4. Information Sharing</h3>
              <p className="md:mb-8 mb-4">
                We do not sell your personal information. We may share your
                information with: service providers who assist in our
                operations; professional advisors such as lawyers and
                accountants; authorities when required by law; and other parties
                in connection with a merger, acquisition, or sale of assets.
              </p>

              <h3 className="mb-2"> 5. Data Security</h3>
              <p className="md:mb-8 mb-4">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure.
              </p>

              <h3 className="mb-2"> 6. Data Retention</h3>
              <p className="md:mb-8 mb-4">
                We retain your personal information for as long as necessary to
                fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, and enforce our agreements.
              </p>

              <h3 className="mb-2">7. Your Rights</h3>
              <p className="md:mb-8 mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including: accessing your
                personal data; correcting inaccurate data; requesting deletion
                of your data; objecting to processing; data portability; and
                withdrawing consent.
              </p>

              <h3 className="mb-2"> 8. Cookies</h3>
              <p className="md:mb-8 mb-4">
                We use cookies and similar tracking technologies to collect and
                track information about your browsing activity. You can instruct
                your browser to refuse all cookies or to indicate when a cookie
                is being sent. However, some features of the Service may not
                function properly without cookies.
              </p>
              <h3 className="mb-2"> 9. Third-Party Links</h3>
              <p className="md:mb-8 mb-4">
                Our Service may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage you to read their privacy policies.
              </p>
              <h3 className="mb-2">10. Children's Privacy</h3>
              <p className="md:mb-8 mb-4">
                Our Service is not intended for children under 16 years of age.
                We do not knowingly collect personal information from children
                under 16. If you become aware that a child has provided us with
                personal information, please contact us.
              </p>
              <h3 className="mb-2"> 11. Changes to This Policy</h3>
              <p className="md:mb-8 mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of changes by posting the new policy on this page and
                updating the "Last updated" date.
              </p>
              <h3 className="mb-2"> 12. Contact Us</h3>
              <p className="md:mb-8 mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@maplematrix.com.
              </p>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default PrivacyPolicyPage;
