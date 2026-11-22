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
    question: "How much does it cost to develop mobile app in India?",
    answer:
      "The price depends on the platforms, the feature required in the app. A simple content app costs way more less compared to a feature packed app. ",
  },
  {
    question: "How much time does it take to build a mobile application?",
    answer:
      "It completely depends on the scope of application also how quickly we get approval on our designs by you. Along count few more days extra because of the review of Play Store and App Store, also App Store's review can be stricter ",
  },
  {
    question: "How can I choose the platform?",
    answer:
      "First know your audience. If you have more potential Android user or iOS user, according to StatCounter (Oct 2025 – Oct 2026), Android holds about 94.85% of India's mobile operating system market share, compared to 5.1% for iOS, usually businesses go for cross platform applications for one codebase.",
  },
  {
    question: "Which is better Cross-platform or native?",
    answer:
      "Neither is universally better. It depends on you requirement which suits you better Cross-platform comes handy with tighter budget and limited timeline, whereas Native comes handy where deep hardware usage and maximum performance is required",
  },
  {
    question: "Do I have to pay to Play Store and App Store?",
    answer:
      "Yes, both store charge a developer account registration fee separately. Play Store charges 2,100 Rupees + 18% GST which is a one time payment, whereas App Store charges 8,700 Rupees yearly. ",
  },
  {
    question: "Can you add features and improve my existing application?",
    answer:
      "Yes, But first we will review everything about your application to check what is worth keeping then we will give you the idea how we will going to fix or rebuild your application. ",
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
                className="w-full"
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/40 px-0"
                  >
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
