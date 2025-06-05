
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/contexts/CartContext';
import { carBrands } from '@/data/carsData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-luxury-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-black font-bold text-xl">LC</span>
            </div>
            <span className="text-2xl font-bold bg-luxury-gradient bg-clip-text text-transparent">
              LuxuryCars
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <span className="text-foreground hover:text-luxury-gold transition-colors font-medium cursor-pointer">
                Brands
              </span>
              <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {carBrands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/brands/${brand.id}`}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <img src={brand.logo} alt={brand.name} className="w-6 h-6" />
                      <span className="text-sm font-medium">{brand.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/cars" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              All Cars
            </Link>
            <Link to="/about" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-luxury-gold transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search luxury cars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64 luxury-card"
              />
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-luxury-gold text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className="text-foreground hover:text-luxury-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <span className="text-foreground font-medium">Brands</span>
                <div className="pl-4 space-y-2">
                  {carBrands.map((brand) => (
                    <Link
                      key={brand.id}
                      to={`/brands/${brand.id}`}
                      className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-luxury-gold transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img src={brand.logo} alt={brand.name} className="w-4 h-4" />
                      <span>{brand.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/cars"
                className="text-foreground hover:text-luxury-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Cars
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-luxury-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-luxury-gold transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mt-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search luxury cars..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-full luxury-card"
                  />
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
