
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, CreditCard, Star, Award, Users, Globe, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/CarCard';
import { getFeaturedCars, carBrands } from '@/data/carsData';

const Index = () => {
  const featuredCars = getFeaturedCars();

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-hero-gradient">
          <div className="absolute inset-0 bg-luxury-gradient opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/20 rounded-full floating-animation blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-luxury-gold/15 rounded-full floating-animation animation-delay-2000 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full floating-animation animation-delay-4000 blur-xl"></div>
        <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-luxury-gold/25 rounded-full floating-animation animation-delay-3000 blur-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="fade-in-scale">
            <Badge className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold mb-8 text-lg px-6 py-3 pulse-glow">
              <Crown className="w-5 h-5 mr-2" />
              Luxury Redefined
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Drive Your
              <span className="gradient-text block mt-2 font-luxury"> Dreams</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the epitome of luxury with our handpicked collection of the world's finest automobiles. 
              <span className="gradient-text font-semibold"> From prestigious brands to unmatched performance.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/cars">
                <Button size="lg" className="luxury-button text-xl px-12 py-6 group hover:bg-luxury-gradient-hover">
                  <Zap className="mr-3 w-6 h-6" />
                  Explore Collection
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/brands">
                <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black glass-effect">
                  <Award className="mr-3 w-6 h-6" />
                  View Brands
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-12 max-w-3xl mx-auto text-center">
              <div className="luxury-card p-6 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">65+</div>
                <div className="text-gray-300 text-lg">Luxury Cars</div>
              </div>
              <div className="luxury-card p-6 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">8</div>
                <div className="text-gray-300 text-lg">Premium Brands</div>
              </div>
              <div className="luxury-card p-6 hover-lift">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">100%</div>
                <div className="text-gray-300 text-lg">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-gentle">
          <div className="w-8 h-12 border-2 border-luxury-gold/70 rounded-full flex justify-center pulse-glow">
            <div className="w-2 h-4 bg-luxury-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold mb-6 text-lg px-6 py-3">
              <Star className="w-5 h-5 mr-2" />
              Handpicked Selection
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-luxury">Featured Luxury Cars</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover our most prestigious vehicles, carefully selected for their exceptional performance and timeless elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-16">
            {featuredCars.map((car, index) => (
              <div key={car.id} className="fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <CarCard car={car} className="card-hover hover-glow" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cars">
              <Button size="lg" className="luxury-button text-xl px-10 py-5">
                <ArrowRight className="mr-3 w-6 h-6" />
                View All Cars
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Brands Section */}
      <section className="py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-gold/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-luxury">Prestigious Brands</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Partner with the world's most prestigious automotive manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {carBrands.map((brand, index) => (
              <Link
                key={brand.id}
                to={`/brands/${brand.id}`}
                className="luxury-card p-8 text-center hover-lift hover-glow group transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 filter group-hover:drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-luxury-gold/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 blur-xl"></div>
                </div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-luxury-gold transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">Est. {brand.founded}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-luxury">Why Choose LuxuryCars</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Experience unparalleled service and the finest selection of luxury automobiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Shield, title: "Premium Quality", desc: "Every vehicle undergoes rigorous inspection to ensure the highest standards of luxury and performance." },
              { icon: Truck, title: "Worldwide Delivery", desc: "Professional delivery service to any location worldwide with full insurance and tracking." },
              { icon: CreditCard, title: "Secure Payment", desc: "Multiple secure payment options with full buyer protection and financing available." },
              { icon: Award, title: "Expert Service", desc: "Dedicated luxury car specialists providing personalized consultation and support." }
            ].map((feature, index) => (
              <div key={feature.title} className="luxury-card p-10 text-center group hover-lift hover-glow transition-all duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-20 h-20 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                  <feature.icon className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-luxury-gold transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-luxury">What Our Clients Say</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Discover why luxury car enthusiasts trust us for their automotive dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Rajesh Sharma", location: "Mumbai", rating: 5, text: "Exceptional service and an incredible selection of luxury cars. The purchase process was seamless and professional." },
              { name: "Priya Kapoor", location: "Delhi", rating: 5, text: "Amazing experience! Found my dream Bentley here. The team was knowledgeable and made the entire process effortless." },
              { name: "Arjun Menon", location: "Bangalore", rating: 5, text: "Outstanding collection and impeccable service. The delivery to Bangalore was prompt and the car was in perfect condition." }
            ].map((testimonial, index) => (
              <div key={testimonial.name} className="luxury-card p-10 hover-lift hover-glow transition-all duration-500" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-luxury-gold text-luxury-gold mr-1" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mr-6 pulse-glow">
                    <span className="text-black font-bold text-lg">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-luxury-dark-gray text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 via-transparent to-luxury-gold/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-luxury gradient-text">Stay Updated</h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Be the first to know about new arrivals, exclusive offers, and luxury automotive news.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-4 rounded-xl glass-effect text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold text-lg"
              />
              <Button className="luxury-button px-10 py-4 text-lg hover:bg-luxury-gradient-hover">
                <Zap className="mr-2 w-5 h-5" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
