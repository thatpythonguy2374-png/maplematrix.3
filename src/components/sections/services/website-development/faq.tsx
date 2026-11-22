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
    question: "What types of websites do you develop?",
    answer:
      "We build a wide range of websites, including business and corporate sites, portfolio websites, landing pages, e-commerce stores, and custom web platforms. Whatever your goal, we shape the website around your business and your audience.",
  },
  {
    question: "Do you build custom websites or use pre-made templates?",
    answer:
      "Every website we build is custom-designed and developed around your brand. We don't rely on ready-made templates, so your website looks unique, performs better, and can grow along with your business.",
  },
  {
    question: "Which technologies do you use for website development?",
    answer:
      "We use modern, reliable technologies such as React, Next.js, Node.js, and Tailwind CSS, along with the right CMS or backend for your needs. We choose the stack based on your project's requirements, so your website is fast, secure, and easy to maintain.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. Every website we build is fully responsive and tested across phones, tablets, laptops, and desktops, so your visitors get a smooth experience on any screen size.",
  },
  {
    question: "Do you build SEO-friendly and fast-loading websites?",
    answer:
      "Yes. We follow SEO best practices from the start, including clean code, proper page structure, optimized images, and fast load times. This gives your website a strong foundation to rank well and keep visitors engaged.",
  },
  {
    question: "Can you redesign or improve my existing website?",
    answer:
      "Of course. If your current website looks outdated, loads slowly, or isn't bringing results, we can redesign it, improve its performance, or add new features without starting from scratch where it isn't needed.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "It depends on the size and complexity of the project. A simple business website usually takes 2-4 weeks, while larger websites with custom features or e-commerce can take 6-12 weeks. After understanding your requirements, we'll share a clear timeline.",
  },
  {
    question: "Will I be able to update the website content myself?",
    answer:
      "Yes. We can integrate a content management system or admin panel so you can easily update text, images, blogs, and products on your own, without needing any technical knowledge.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Yes, we do. We offer post-launch support for bug fixes, updates, security, and performance improvements. We're also available if you want to add new features or scale your website later.",
  },
  {
    question: "How can I get started with my website project?",
    answer:
      "Just get in touch with us and share a little about your business and what you're looking to build. We'll discuss your goals, understand your requirements, and guide you through the next steps with a clear plan and quote.",
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
