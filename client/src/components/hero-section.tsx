import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-testid="hero-content"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-headline">
                Fill forms faster and more{" "}
                <span className="gradient-bg bg-clip-text text-transparent">reliable</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed" data-testid="text-hero-subtext">
                Let AI handle the tedious work while you focus on what matters most.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500" data-testid="hero-features">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Chrome Extension</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>AI Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Instant Setup</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Video Demo */}
          <motion.div 
            className="animate-fade-in-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            data-testid="hero-video"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                {/* Video placeholder with proper attributes for implementation */}
                <video 
                  className="w-full h-full rounded-xl shadow-2xl hidden" 
                  autoPlay 
                  muted 
                  loop
                  data-testid="video-demo"
                >
                  <source src="fillbot-demo.mp4" type="video/mp4" />
                </video>
                
                {/* Fallback content for mockup */}
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="h-16 w-16 text-primary mx-auto" />
                  </motion.div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-700" data-testid="text-video-title">FillBot Demo Video</p>
                    <p className="text-sm text-gray-500" data-testid="text-video-description">10-second looping demonstration</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 gradient-bg opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 accent-gradient opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
