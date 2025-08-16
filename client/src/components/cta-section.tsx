import { motion } from "framer-motion";
import { Shield, Clock, Download, ArrowRight } from "lucide-react";

export default function CTASection() {
  const handleSubscription = () => {
    // TODO: Implement Chrome Web Store redirect and payment processing
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  return (
    <section id="pricing" className="py-24 hero-gradient relative overflow-hidden" data-testid="cta-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="cta-content"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral" data-testid="text-cta-title">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
              Join thousands of professionals who've already streamlined their form-filling process.
            </p>
          </div>
          
          <div className="space-y-6">
            <motion.button 
              className="gradient-bg text-white font-semibold px-12 py-4 rounded-2xl text-lg shadow-lg inline-flex items-center space-x-3 transition-all duration-300"
              onClick={handleSubscription}
              whileHover={{ y: -2, boxShadow: "0 20px 40px -8px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-subscribe"
            >
              <span>Start using it for only $10/month</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500" data-testid="cta-guarantees">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-accent" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="h-4 w-4 text-accent" />
                <span>Instant access</span>
              </div>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-gray-500 text-sm" data-testid="text-cta-social-proof">
              Chrome Web Store • 4.8/5 stars • 10,000+ users
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 gradient-bg opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 secondary-gradient opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
