"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Wires", href: "/wires" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="glass-nav rounded-full px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full gradient-copper flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text-copper">PROCCO</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button className="bg-transparent text-foreground hover:text-primary transition-colors duration-300 rounded-full m-2" key={link.name}>
              {link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link href={link.href}>{link.name}</Link>
              ) : (
                <a href={link.href}>{link.name}</a>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="gradient-copper text-white hover:opacity-90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-10 px-4 hover:scale-105 cursor-grab">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav rounded-3xl mt-2 p-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-2xl hover:bg-muted transition-colors text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <button className="mt-2 gradient-copper text-white hover:opacity-90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold h-10 px-4 hover:scale-105 cursor-grab">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;