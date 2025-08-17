import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="hero-gradient min-h-screen flex items-center relative overflow-hidden"
      data-testid="hero-section"
    >
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
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                data-testid="text-hero-headline"
              >
                Fill forms faster and{" "}
                <span className="bg-clip-text">accurately</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed"
                data-testid="text-hero-subtext"
              >
                Let AI handle the tedious work while you focus on what matters
                most.
              </p>
            </div>

            <div
              className="flex items-center space-x-4 text-sm text-gray-500"
              data-testid="hero-features"
            >
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
            <div className="relative w-full h-full flex items-center justify-center min-h-[400px]">
              <video
                className="w-full h-full object-cover rounded-3xl"
                autoPlay
                muted
                loop
                data-testid="video-demo"
              >
                <source
                  src="https://pub-216fe63ea86645958432f8da7c245b0f.r2.dev/fillBotDemo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
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

<style jsx global>{`
  .tilted-underline {
    position: relative;
    display: inline-block;
  }
  .tilted-underline::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.1em;
    width: 100%;
    height: 0.22em;
    background: linear-gradient(90deg, #a5b4fc 0%, #818cf8 100%);
    border-radius: 0.15em;
    transform: rotate(-4deg);
    z-index: -1;
    opacity: 0.7;
    pointer-events: none;
  }
`}</style>;
