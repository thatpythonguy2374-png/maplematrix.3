import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimateOnView } from "@/components/ui/motion/animate-on-view";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Maple Matrix?",
    answer:
      "Maple Matrix is a web development and digital solutions studio that helps businesses bring their ideas to life online. Whether you're starting from scratch or looking to improve your existing website, we work with you to create digital experiences that reflect your brand and help your business grow.",
  },
  {
    question: "What services does Maple Matrix offer?",
    answer:
      "We help businesses with everything from website design and development to UI/UX design, web applications, mobile apps, and AI-powered solutions. Every project is different, so we take the time to understand what you need before finding the right solution.",
  },
  {
    question: "Do you create custom websites or use templates?",
    answer:
      "We don't believe in making every website look the same. We take the time to understand your business, your audience, and what makes your brand different. Based on that, we create a website that feels like yours, rather than something copied from a ready-made template.",
  },
  {
    question: "Why should I choose Maple Matrix?",
    answer:
      "We care about more than just making a website look good. We focus on creating websites that are easy to use, work smoothly across devices, and support your business goals. From the first conversation to the final launch, we keep things simple, transparent, and focused on getting things right.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "It really depends on what you're looking to build. A simple business website may take a few weeks, while a more feature-rich website or custom application can take longer. Once we understand your requirements, we'll give you a realistic timeline so you know what to expect.",
  },
  {
    question: "How can I get started with Maple Matrix?",
    answer:
      "It's pretty simple! Just get in touch with us and tell us a little about your idea or project. We'll have a conversation about what you're looking to achieve, understand your requirements, and help you figure out the next steps. No complicated process, just a good conversation to get things moving.",
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
        <AnimateOnView once y={20} delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto md:mt-20 mt-8 md:py-2 md:pr-2 py-4 pr-4 pl-8 md:rounded-full rounded-md bg-card/50 border border-border/50 backdrop-blur-sm">
            <p className="text-lg font-medium text-center sm:text-left">
              Can't find the answer you're looking for?
            </p>

            <Button
              asChild
              className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 w-full sm:w-auto">
              <Link to="/contact">Ask Something</Link>
            </Button>
          </div>
        </AnimateOnView>
      </Container>
    </section>
  );
};

export default FAQ;
