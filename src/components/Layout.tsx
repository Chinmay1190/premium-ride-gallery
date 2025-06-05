
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, CreditCard, Shield, Truck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Header from './Header';
import { useToast } from '@/hooks/use-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Newsletter Subscription",
      description: "Thank you for subscribing to our newsletter!",
    });
    // Reset the form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-card border-t border-border">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-luxury-gradient rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-xl">LC</span>
                </div>
                <span className="text-2xl font-bold bg-luxury-gradient bg-clip-text text-transparent">
                  LuxuryCars
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                India's premier luxury automobile marketplace, offering an unparalleled collection of the world's finest vehicles.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <span className="text-muted-foreground">
                    123 Luxury Avenue, Mumbai, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <span className="text-muted-foreground">
                    +91 22 4567 8901
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <span className="text-muted-foreground">
                    info@luxurycars.com
                  </span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link to="/cars" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> All Cars
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> Contact
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="flex items-center text-muted-foreground hover:text-luxury-gold transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Car Brands */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Luxury Brands</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                <li>
                  <Link to="/brands/mercedes" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Mercedes-Benz
                  </Link>
                </li>
                <li>
                  <Link to="/brands/bmw" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    BMW
                  </Link>
                </li>
                <li>
                  <Link to="/brands/audi" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Audi
                  </Link>
                </li>
                <li>
                  <Link to="/brands/lexus" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Lexus
                  </Link>
                </li>
                <li>
                  <Link to="/brands/jaguar" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Jaguar
                  </Link>
                </li>
                <li>
                  <Link to="/brands/porsche" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Porsche
                  </Link>
                </li>
                <li>
                  <Link to="/brands/bentley" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Bentley
                  </Link>
                </li>
                <li>
                  <Link to="/brands/maserati" className="text-muted-foreground hover:text-luxury-gold transition-colors">
                    Maserati
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for exclusive updates, offers, and automotive insights.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    required 
                    className="rounded-r-none"
                  />
                  <Button type="submit" className="rounded-l-none bg-luxury-gold text-black hover:bg-luxury-gold-dark">
                    Subscribe
                  </Button>
                </div>
              </form>
              
              <div className="mt-6">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                    <Facebook className="w-5 h-5 text-luxury-gold" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                    <Instagram className="w-5 h-5 text-luxury-gold" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                    <Twitter className="w-5 h-5 text-luxury-gold" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                    <Youtube className="w-5 h-5 text-luxury-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="border-t border-border py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-medium">Secure Transactions</h4>
                <p className="text-sm text-muted-foreground">
                  All payments protected with encryption
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-3">
                  <Truck className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-medium">Premium Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  White glove delivery nationwide
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-medium">Flexible Payment Options</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple payment methods available
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-black text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-sm">
                  &copy; {new Date().getFullYear()} LuxuryCars. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-4 text-sm">
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
