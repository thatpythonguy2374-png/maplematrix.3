"use client";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import { Menu, XIcon, ChevronDown } from "lucide-react";
import React from "react";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link } from "react-router-dom";

// Maple Matrix Services
const servicePages = [
  {
    name: "Website Development",
    href: "/services/website-development",
  },
  {
    name: "E-commerce Development",
    href: "/services/e-commerce",
  },
  {
    name: "SEO Optimization",
    href: "/services/seo",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 py-3 backdrop-blur-md"
          : "py-6 md:py-10"
      }`}>
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 xl:w-[35%] md:w-[30%] w-fit">
          <img
            src="/images/common/logo1.png"
            alt="Maple Matrix"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Mobile Navigation (same items as desktop: About, Services, Contact / User) */}
        <div className="flex items-center gap-2 lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="cursor-pointer text-white h-11 w-11 flex items-center justify-center">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent className="flex flex-col bg-black border-border overflow-y-auto">
              <SheetHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-5">
                <SheetTitle>
                  <Link to="/" onClick={closeMobileMenu}>
                    <img
                      src="/images/common/logo1.png"
                      alt="Maple Matrix"
                      className="h-8 w-auto object-contain"
                    />
                  </Link>
                </SheetTitle>

                <SheetPrimitive.Close className="h-11 w-11 flex items-center justify-center rounded-md opacity-70 hover:opacity-100">
                  <XIcon className="size-5 text-white" />
                  <span className="sr-only">Close</span>
                </SheetPrimitive.Close>
              </SheetHeader>

              <div className="px-2 py-6 flex flex-col gap-2">
                {/* About */}
                <Link
                  to="/about"
                  onClick={closeMobileMenu}
                  className="block py-3 text-lg text-white hover:text-primary transition-colors">
                  About
                </Link>

                {/* Services (expandable, same as the desktop dropdown) */}
                <div>
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full py-3 text-lg text-white hover:text-primary transition-colors">
                    Services
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}>
                    <div className="overflow-hidden">
                      <div className="ml-1 pl-3 border-l border-white/10 space-y-1 pb-2">
                        {servicePages.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            onClick={closeMobileMenu}
                            tabIndex={mobileServicesOpen ? 0 : -1}
                            className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Us Button */}
                <div className="pt-5 mt-3 border-t border-white/10">
                  <Button asChild className="w-full rounded-full">
                    <Link to="/contact" onClick={closeMobileMenu}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList className="gap-1">
            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className="px-4 py-2 text-white hover:text-primary transition-colors">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary">
                Services
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-[260px] bg-background p-5">
                  <div className="space-y-1">
                    {servicePages.map((service) => (
                      <NavigationMenuLink asChild key={service.href}>
                        <Link
                          to={service.href}
                          className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none">
                          {service.name}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact / User Menu */}
        <div className="hidden lg:flex gap-2 items-center xl:w-[35%] md:w-[30%] w-fit justify-end">
          <Button asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
