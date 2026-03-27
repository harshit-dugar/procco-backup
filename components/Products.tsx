import { ArrowRight, Cable, Plug, ToggleLeft } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Cable,
    title: "Premium Cables",
    description: "High-performance copper cables engineered for maximum conductivity and durability. FR, FRLSH, and armored variants available.",
    features: ["99.97% Pure Copper", "Fire Retardant", "UV Resistant"],
    gradient: "from-secondary/10 to-copper/10",
  },
  {
    icon: Plug,
    title: "Industrial Wires",
    description: "Multi-strand, commercial, and industrial applications with superior insulation.",
    features: ["Multi-strand", "High Flexibility", "Temperature Safe"],
    gradient: "from-primary/10 to-electric-blue/10",
  },
  {
    icon: ToggleLeft,
    title: "Switchgears",
    description: "Advanced circuit breakers, MCBs, RCCBs, and distribution boards with smart protection technology.",
    features: ["Smart Protection", "Arc Detection", "Surge Guard"],
    gradient: "from-copper/10 to-secondary/10",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5 text-secondary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Engineered for{" "}
            <span className="gradient-text-copper">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover our comprehensive range of electrical solutions designed with precision 
            and built to last generations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative rounded-4xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-linear-to-br ${product.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 glass-card" />
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl gradient-copper flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <product.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 grow">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/80 border border-border text-xs font-medium text-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button  className="w-full justify-between group/btn hover:bg-secondary/10  gradient-electric text-white hover:opacity-90 rounded-full shadow-lg hover:shadow-xl glow-blue transition-all duration-300 font-semibold">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Copper Wire Accent */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full border-4 border-copper/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="gradient-electric text-white hover:opacity-90 rounded-full shadow-lg hover:shadow-xl glow-blue transition-all duration-300 font-semibold h-12 px-8">
            <Link href="/wires">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
