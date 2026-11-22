import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "How much does an e-commerce store cost in India?",
    answer:
      "The price is completely depends on the store requirements, the amount the products and features. A small shopify project costs way more less as compared a custom store.",
  },
  {
    question: "Which is better Shopify, WooCommerce or custom?",
    answer:
      "Shopify is ideal for businesses looking for a quick, hassle-free setup, whereas Woocommerce is best for businesses seeking felixibility and great control over website. The custom development suits for the businesses that requires unique features and advanced integrations.",
  },
  {
    question: "How long does it takes to build an E-commerce store",
    answer:
      "It depends how soon you can get the product data and images ready.",
  },
  {
    question: "How can customers pay for their orders?",
    answer:
      "Most of the payment gateway offers UPI, credit cards, debit cards, net banking and also according to your requirement we will assist you to pick the most suitable. ",
  },
  {
    question: "Can we switch to the other platform?",
    answer:
      "Yes. We help you migrating to a newer platform by export all your old data and rebuilding them for the new platform.",
  },
];

const FAQ = () => {
  return (
    <section className="md:pt-20 xl:pt-32 pt-12 md:pb-20 xl:pb-32 pb-12">
      <Container>
        {/* FAQ Heading */}
        <AnimateOnView once blur>
          <div className="text-center mb-8 md:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Got Questions?
            </span>

            <h2 className="h2 mt-3">Frequently Asked Questions</h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Everything you need to know about our services, development
              process, and how Maple Matrix can help your business grow.
            </p>
          </div>
        </AnimateOnView>

        {/* FAQ Accordion */}
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          <div className="max-w-[900px] w-full">
            <AnimateOnView once y={40}>
              <Accordion
                type="single"
                collapsible
                defaultValue="item-0"
                className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/40 px-0">
                    <AccordionTrigger className="group text-left py-6 hover:no-underline [&>svg]:hidden">
                      <span className="h4 pr-8">{faq.question}</span>

                      {/* Animated Plus / Minus Icon */}
                      <div className="relative flex items-center justify-center w-6 h-6 shrink-0">
                        <Minus className="absolute w-5 h-5 transition-all duration-300 scale-0 rotate-90 group-data-[state=open]:scale-100 group-data-[state=open]:rotate-0" />

                        <Plus className="absolute w-5 h-5 transition-all duration-300 scale-100 rotate-0 group-data-[state=open]:scale-0 group-data-[state=open]:rotate-90" />
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnView>
          </div>
        </div>

        {/* Contact CTA */}
      </Container>
    </section>
  );
};

export default FAQ;
