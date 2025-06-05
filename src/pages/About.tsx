
import React from 'react';
import { Award, Shield, Clock, Users, Globe, Truck, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative bg-black py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="bg-luxury-gradient bg-clip-text text-transparent">LuxuryCars</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              India's premier destination for luxury automobiles, offering an unparalleled selection of the world's most prestigious brands.
            </p>
            <div className="flex space-x-4">
              <Link to="/cars">
                <Button className="luxury-button">
                  Our Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="Our Showroom" 
                className="w-full h-[400px] object-cover rounded-xl shadow-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, LuxuryCars was born from a passion for automotive excellence and a vision to create India's most prestigious luxury car marketplace.
                </p>
                <p>
                  What began as a small showroom in Mumbai has grown into a nationwide network of luxury automobile galleries, offering discerning clients access to the world's most coveted vehicles.
                </p>
                <p>
                  Our founder, Rajiv Patel, combined his engineering background with his love for luxury automobiles to create a unique experience that goes beyond simply purchasing a car. At LuxuryCars, we deliver dreams.
                </p>
                <p>
                  Today, we're proud to be India's leading luxury car retailer, with a commitment to excellence that has never wavered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              At the core of everything we do lies a set of principles that define who we are and how we operate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We refuse to compromise on quality, whether in our vehicles, our service, or our facilities.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-muted-foreground">
                Building lasting relationships through transparent practices and unwavering integrity.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-muted-foreground">
                Creating a culture of connection among luxury automobile enthusiasts across India.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-16 h-16 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Passion</h3>
              <p className="text-muted-foreground">
                Our love for extraordinary automobiles drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose LuxuryCars</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of partnering with India's premier luxury automobile marketplace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-8">
              <Clock className="w-10 h-10 text-luxury-gold mb-6" />
              <h3 className="text-xl font-semibold mb-3">Unmatched Experience</h3>
              <p className="text-muted-foreground mb-4">
                With over a decade in the luxury automobile industry, we bring unparalleled expertise to every interaction.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Expert staff with specialized training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Personalized consultations for every client</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Extensive network of industry connections</span>
                </li>
              </ul>
            </div>
            
            <div className="luxury-card p-8">
              <Globe className="w-10 h-10 text-luxury-gold mb-6" />
              <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
              <p className="text-muted-foreground mb-4">
                Our inventory represents the pinnacle of automotive engineering and design from across the globe.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Partnerships with premier global brands</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Rare and limited edition models</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Thoroughly inspected and authenticated vehicles</span>
                </li>
              </ul>
            </div>
            
            <div className="luxury-card p-8">
              <Truck className="w-10 h-10 text-luxury-gold mb-6" />
              <h3 className="text-xl font-semibold mb-3">Premium Service</h3>
              <p className="text-muted-foreground mb-4">
                Every aspect of our service is designed to exceed expectations and create exceptional experiences.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>White-glove delivery anywhere in India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Dedicated concierge for each client</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span>Comprehensive after-sales support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries who drive our company forward with passion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-luxury-gradient/20 overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Rajiv Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Rajiv Patel</h3>
              <p className="text-luxury-gold mb-3">Founder & CEO</p>
              <p className="text-sm text-muted-foreground">
                Former automotive engineer with a passion for luxury vehicles and over 20 years of industry experience.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-luxury-gradient/20 overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Priya Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
              <p className="text-luxury-gold mb-3">Chief Operating Officer</p>
              <p className="text-sm text-muted-foreground">
                Brings strategic vision and operational excellence from her background in luxury retail management.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-luxury-gradient/20 overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Vikram Malhotra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Vikram Malhotra</h3>
              <p className="text-luxury-gold mb-3">Head of Acquisitions</p>
              <p className="text-sm text-muted-foreground">
                Expert in sourcing rare and exclusive vehicles with extensive global connections in the automotive world.
              </p>
            </div>
            
            <div className="luxury-card p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-luxury-gradient/20 overflow-hidden mx-auto mb-6">
                <img 
                  src="/api/placeholder/150/150" 
                  alt="Anjali Desai" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Anjali Desai</h3>
              <p className="text-luxury-gold mb-3">Client Relations Director</p>
              <p className="text-sm text-muted-foreground">
                Dedicated to creating exceptional experiences for our clients with a background in luxury hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-luxury-dark-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Luxury Today</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the difference that defines LuxuryCars and begin your journey into the world of automotive excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button className="luxury-button text-lg px-8">
                Explore Our Collection
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
