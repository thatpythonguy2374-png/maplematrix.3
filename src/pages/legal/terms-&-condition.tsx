import Container from "@/components/container";
import Layout from "@/components/layout";
import LegalHero from "@/components/sections/legal/hero";
import { appConfig } from "@/utils/app-config";

const TermsAndConditionPage = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Terms & Conditions | ${appConfig.name}`,
    description: `${appConfig.description}`,
    url: `${appConfig.url}/legal/terms-&-condition`,
  };

  return (
    <>
      <Layout>
        <LegalHero
          title={`Terms & Conditions`}
          description={`Last updated - November 25, 2026`}
        />
        <section>
          <Container className="flex flex-col lg:flex-row justify-center md:gap-10 gap-6 py-[60px]">
            {/* Main Content Column */}
            <article className="max-w-[1030px]">
              <h3 className="mb-2">1. Acceptance of Terms</h3>
              <p className="md:mb-8 mb-4">
                By accessing or using Maple Matrix's services, website, or any
                associated content (collectively, the "Service"), you agree to
                be bound by these Terms of Service. If you do not agree to these
                terms, please do not use our Service.
              </p>

              <h3 className="mb-2"> 2. Description of Service</h3>
              <p className="mb-4">
                Maple Matrix provides online educational content, courses, and
                resources focused on AI prompt engineering and related skills.
                Our Service includes video lessons, written materials, community
                access, and other educational resources.
              </p>

              <h3 className="mb-2"> 3. User Accounts</h3>
              <p className="md:mb-8 mb-4">
                To access certain features of the Service, you must create an
                account. You are responsible for maintaining the confidentiality
                of your account credentials and for all activities that occur
                under your account. You agree to notify us immediately of any
                unauthorized use of your account.
              </p>

              <h3 className="mb-2">4. Payment and Refunds</h3>
              <p className="md:mb-8 mb-4">
                Certain features of the Service require payment. All payments
                are processed securely through our payment providers. We offer a
                30-day money-back guarantee for course purchases. Refund
                requests must be submitted within 30 days of purchase.
              </p>

              <h3 className="mb-2"> 5. Intellectual Property</h3>
              <p className="md:mb-8 mb-4">
                All content provided through the Service, including but not
                limited to text, graphics, logos, videos, and course materials,
                is the property of Maple Matrix or its content suppliers and is
                protected by intellectual property laws. You may not reproduce,
                distribute, or create derivative works without our express
                written permission.
              </p>

              <h3 className="mb-2"> 6. User Conduct</h3>
              <p className="md:mb-8 mb-4">
                You agree not to use the Service to: share account access with
                others; distribute course content without authorization; engage
                in any activity that interferes with or disrupts the Service;
                attempt to gain unauthorized access to any portion of the
                Service; or violate any applicable laws or regulations.
              </p>

              <h3 className="mb-2">7. Disclaimer of Warranties</h3>
              <p className="md:mb-8 mb-4">
                The Service is provided "as is" without warranties of any kind,
                either express or implied. We do not guarantee that the Service
                will be uninterrupted, secure, or error-free. Your use of the
                Service is at your own risk.
              </p>

              <h3 className="mb-2"> 8. Limitation of Liability</h3>
              <p className="md:mb-8 mb-4">
                To the maximum extent permitted by law, Maple Matrix shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages arising out of or relating to your use of
                the Service.
              </p>
              <h3 className="mb-2"> 9. Changes to Terms</h3>
              <p className="md:mb-8 mb-4">
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of significant changes by posting a
                notice on our website. Your continued use of the Service after
                changes are posted constitutes your acceptance of the modified
                terms.
              </p>
              <h3 className="mb-2"> 10. Contact Information</h3>
              <p className="md:mb-8 mb-4">
                If you have any questions about these Terms of Service, please
                contact us at legal@maplematrix.com.
              </p>
            </article>
          </Container>
        </section>
      </Layout>
    </>
  );
};

export default TermsAndConditionPage;
