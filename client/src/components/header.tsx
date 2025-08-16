import { Bot } from "lucide-react";

export default function Header() {
  return (
    <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200" data-testid="header-navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2" data-testid="logo-fillbot">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Bot className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold text-neutral">FillBot</span>
          </div>
          <nav className="hidden md:flex space-x-8" data-testid="nav-menu">
            <a 
              href="#features" 
              className="text-custom hover:text-primary transition-colors"
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-custom hover:text-primary transition-colors"
              data-testid="link-pricing"
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="text-custom hover:text-primary transition-colors"
              data-testid="link-contact"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
