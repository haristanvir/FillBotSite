import { motion } from "framer-motion";
import { Zap, Target, Highlighter, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Fill complex forms in seconds, not minutes. Our AI instantly extracts and populates data from your documents.",
    metric: "10x faster than manual entry",
    gradient: "gradient-bg"
  },
  {
    icon: Target,
    title: "Pinpoint Accuracy",
    description: "Human-verified AI extractions ensure every field is filled correctly. Review and approve with highlighted confidence.",
    metric: "99.9% accuracy rate",
    gradient: "accent-gradient"
  },
  {
    icon: Highlighter,
    title: "Smart Highlighting",
    description: "Instantly see relevant information highlighted in your documents with our intelligent detection panel.",
    metric: "Contextual intelligence",
    gradient: "secondary-gradient"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="features-header"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral" data-testid="text-features-title">
            Why Choose FillBot?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-features-subtitle">
            Experience the perfect blend of AI efficiency and human reliability
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8" data-testid="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`card-feature-${index}`}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 ${feature.gradient} rounded-2xl flex items-center justify-center`}>
                  <feature.icon className="text-white text-2xl" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-neutral" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
                <div className="flex items-center text-sm font-medium text-primary">
                  <span data-testid={`text-feature-metric-${index}`}>{feature.metric}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent"></div>
    </section>
  );
}
