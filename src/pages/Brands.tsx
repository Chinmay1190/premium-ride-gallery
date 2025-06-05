
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { carBrands } from '@/data/carsData';

const Brands = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-luxury-gradient opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1920&h=600&fit=crop&crop=center')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold mb-6 text-lg px-6 py-3">
            <Crown className="w-5 h-5 mr-2" />
            Premium Brands
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-luxury">
            Luxury Car Brands
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the world's most prestigious automotive manufacturers
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Premium Partners</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work exclusively with the finest automotive brands to bring you unparalleled luxury and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {carBrands.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                className="luxury-card p-8 text-center hover-lift hover-glow group transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 blur-xl"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-muted-foreground mb-4">Founded {brand.founded}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  <span className="text-sm text-muted-foreground">Premium Brand</span>
                </div>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="luxury-card p-8">
              <Award className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">{carBrands.length}+</h3>
              <p className="text-muted-foreground">Premium Brands</p>
            </div>
            <div className="luxury-card p-8">
              <Star className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-muted-foreground">Luxury Models</p>
            </div>
            <div className="luxury-card p-8">
              <Crown className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-muted-foreground">Expert Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
