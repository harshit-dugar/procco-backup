import { ArrowRight, Zap, Shield, Award } from "lucide-react";
import  Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Light Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-orange-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-copper/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[60px_60px]" />
        
        {/* Electric Sparks */}
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full animate-spark shadow-lg" />
        <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-primary rounded-full animate-spark shadow-lg" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-copper rounded-full animate-spark shadow-lg" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">Powering India Since 1995</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "100ms" }}>
            Premium{" "}
            <span className="gradient-text-copper">Electrical</span>
            <br />
            Solutions for{" "}
            <span className="gradient-text-electric">Tomorrow</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "200ms" }}>
            Industry-leading wires, cables, and switchgears crafted with precision. 
            Trusted by engineers and electricians across 50+ countries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "300ms" }}>
            <button className="group gradient-copper text-white rounded-full shadow-lg glow-orange hover:scale-105 transition-all duration-300 font-bold h-14 px-10 text-lg">
              <Link href="/wires">
                Explore Wires
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </button>
            <button className="bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full transition-all duration-300 font-semibold ">
              Download Catalog
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: "400ms" }}>
            {[
              { icon: Shield, value: "30+", label: "Years Experience" },
              { icon: Award, value: "500+", label: "Products" },
              { icon: Zap, value: "50+", label: "Countries" },
              { icon: Shield, value: "ISO", label: "Certified" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-3xl p-6 hover:scale-105 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold gradient-text-copper">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero