import { Bot, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2" data-testid="footer-logo">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Bot className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold text-neutral">FillBot</span>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-gray-500" data-testid="footer-links">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-support">
              Support
            </a>
          </div>
          
          <div className="flex items-center space-x-4" data-testid="footer-social">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors" data-testid="link-twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors" data-testid="link-github">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors" data-testid="link-email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p data-testid="text-copyright">&copy; 2024 FillBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
