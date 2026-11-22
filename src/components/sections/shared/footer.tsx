import Container from "@/components/container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const pageLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Our Work", href: "/feature" },
  { title: "Blog", href: "/blog" },
  { title: "Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
];

const serviceLinks = [
  { title: "E-Commerce Development", href: "/services/e-commerce" },
  { title: "SEO Services", href: "/services/seo" },
  { title: "UI/UX Design", href: "/services/ui-ux-design" },
  { title: "Web Applications", href: "/services/web-applications" },
  { title: "Website Development", href: "/services/website-development" },
  { title: "Website Maintenance", href: "/services/website-maintain" },
];

const utilityLinks = [
  { title: "Privacy Policy", href: "/legal/privacy-policy" },
  { title: "Terms & Conditions", href: "/legal/terms-&-condition" },
  { title: "Cookie Policy", href: "/legal/cookie-policy" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://x.com/",
    label: "X",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 md:pt-24 pb-10">
      <Container>
        {/* Main Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10 min-h-[340px] md:min-h-[390px]">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/images/common/logo1.png"
                alt="Maple Matrix"
                className="h-10 md:h-11 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>

            <p className="text-white/50 text-sm leading-7 mt-6 max-w-sm">
              We turn ideas into meaningful digital experiences. From creative
              design to powerful development, we help businesses build, grow,
              and thrive online.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 sm:gap-x-12 lg:gap-x-14 xl:gap-x-16 gap-y-10 w-full lg:w-auto">
            {/* Pages */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-7">Pages</h4>

              <ul className="space-y-5">
                {pageLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-white/65 hover:text-white transition-colors duration-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-7">
                Services
              </h4>

              <ul className="space-y-5">
                {serviceLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-white/65 hover:text-white transition-colors duration-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-7">Legal</h4>

              <ul className="space-y-5">
                {utilityLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-white/65 hover:text-white transition-colors duration-300">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-white/55 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Maple Matrix. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
