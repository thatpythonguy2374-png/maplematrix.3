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
    question: "How much does SEO cost in India?",
    answer:
      "Costing usually depends on the size of your project and for how many locations or services you want to rank, but first we audit your site then quote a montly plan which suits for you.",
  },
  {
    question: "How much time does SEO takes to reflect improvements?",
    answer:
      "The noticeable improvements may take upto 03 to 06 months in organic traffic. Where as for new projects it can go upto 06 to 12 months, because it also depends on the age of your site and how much fixing does it needs.",
  },
  {
    question: "Can someone guarantee number one ranking? ",
    answer:
      "It is something we call it too good to be true, because honestly no one can guarantee a 01 ranking on Google or any other search engine. ",
  },
  {
    question: "Local SEO works as normal SEO?",
    answer:
      "We can say that local SEO works on same core principles as normal SEO but it is used to improve ranking in terms of geograpically nearby searches, while normal SEO aims to rank nationally or globally depending on the business size.",
  },
  {
    question: "What information does SEO reports have?",
    answer:
      "We generated SEO reports monthly with information that contains core web vitals, page loading speed, top landing pages and AI referral traffic",
  },
  {
    question: "For how long should I keep SEO services?",
    answer:
      "SEO takes time, we usually suggest to keep it going for few months. Before that first understand the terms and conditions of the following agency.",
  },
  {
    question:
      "Is it possible to get my business appear in ChatGPT and Google AI answers?",
    answer:
      "Yes, It is possible to get featured in AI responses. It can be achieved by allowing AI crawlers, adding structured data, mainting strong taditional SEO and by building genuine Google Business Profile.",
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
