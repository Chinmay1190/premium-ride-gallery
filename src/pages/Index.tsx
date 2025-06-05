
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, CreditCard, Star, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/CarCard';
import { getFeaturedCars, carBrands } from '@/data/carsData';

const Index = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-luxury-black">
          <div className="absolute inset-0 bg-luxury-gradient opacity-10"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-30"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-luxury-gold/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-luxury-gold/15 rounded-full animate-float animation-delay-2000 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-4000 blur-xl"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold mb-6 text-sm px-4 py-2">
              Luxury Redefined
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Drive Your
              <span className="bg-luxury-gradient bg-clip-text text-transparent"> Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the epitome of luxury with our handpicked collection of the world's finest automobiles. 
              From prestigious brands to unmatched performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/cars">
                <Button size="lg" className="luxury-button text-lg px-8 py-4 group">
                  Explore Collection
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/brands">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
                  View Brands
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">65+</div>
                <div className="text-gray-400">Luxury Cars</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">8</div>
                <div className="text-gray-400">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">100%</div>
                <div className="text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold mb-4">
              Handpicked Selection
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Luxury Cars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most prestigious vehicles, carefully selected for their exceptional performance and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} className="animate-fade-in" />
            ))}
          </div>

          <div className="text-center">
            <Link to="/cars">
              <Button size="lg" className="luxury-button">
                View All Cars
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prestigious Brands</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Partner with the world's most prestigious automotive manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {carBrands.map((brand) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                className="luxury-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-semibold text-foreground group-hover:text-luxury-gold transition-colors">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Est. {brand.founded}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose LuxuryCars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience unparalleled service and the finest selection of luxury automobiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card p-8 text-center group hover:bg-luxury-gold/5 transition-colors">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes rigorous inspection to ensure the highest standards of luxury and performance.
              </p>
            </div>

            <div className="luxury-card p-8 text-center group hover:bg-luxury-gold/5 transition-colors">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Worldwide Delivery</h3>
              <p className="text-muted-foreground">
                Professional delivery service to any location worldwide with full insurance and tracking.
              </p>
            </div>

            <div className="luxury-card p-8 text-center group hover:bg-luxury-gold/5 transition-colors">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Payment</h3>
              <p className="text-muted-foreground">
                Multiple secure payment options with full buyer protection and financing available.
              </p>
            </div>

            <div className="luxury-card p-8 text-center group hover:bg-luxury-gold/5 transition-colors">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Service</h3>
              <p className="text-muted-foreground">
                Dedicated luxury car specialists providing personalized consultation and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover why luxury car enthusiasts trust us for their automotive dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Exceptional service and an incredible selection of luxury cars. The purchase process was seamless and professional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">RS</span>
                </div>
                <div>
                  <div className="font-semibold">Rajesh Sharma</div>
                  <div className="text-sm text-muted-foreground">Mumbai</div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Amazing experience! Found my dream Bentley here. The team was knowledgeable and made the entire process effortless."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">PK</span>
                </div>
                <div>
                  <div className="font-semibold">Priya Kapoor</div>
                  <div className="text-sm text-muted-foreground">Delhi</div>
                </div>
              </div>
            </div>

            <div className="luxury-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Outstanding collection and impeccable service. The delivery to Bangalore was prompt and the car was in perfect condition."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mr-4">
                  <span className="text-black font-bold">AM</span>
                </div>
                <div>
                  <div className="font-semibold">Arjun Menon</div>
                  <div className="text-sm text-muted-foreground">Bangalore</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-luxury-dark-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new arrivals, exclusive offers, and luxury automotive news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <Button className="luxury-button px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
