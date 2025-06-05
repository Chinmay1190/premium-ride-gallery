
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info, Star, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/CarCard';
import { getBrandById, getCarsByBrand } from '@/data/carsData';

const Brand = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const [brand, setBrand] = useState(getBrandById(brandId || ''));
  const [cars, setCars] = useState(getCarsByBrand(brandId || ''));

  useEffect(() => {
    if (brandId) {
      setBrand(getBrandById(brandId));
      setCars(getCarsByBrand(brandId));
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [brandId]);

  if (!brand) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Brand not found</h1>
          <Link to="/cars">
            <Button className="luxury-button">
              Browse All Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative bg-black">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-28">
          <Link to="/cars" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Cars
          </Link>
          
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {brand.name}
              </h1>
              <p className="text-white/80">
                Founded in {brand.founded} • {cars.length} models available
              </p>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-2xl">
            {brand.description}
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            <div className="p-6 text-center">
              <Star className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">{cars.length}</p>
              <p className="text-muted-foreground">Models</p>
            </div>
            <div className="p-6 text-center">
              <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">{brand.founded}</p>
              <p className="text-muted-foreground">Founded</p>
            </div>
            <div className="p-6 text-center">
              <Award className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">Premium</p>
              <p className="text-muted-foreground">Quality</p>
            </div>
            <div className="p-6 text-center">
              <Clock className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <p className="text-3xl font-bold mb-1">24/7</p>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cars collection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">
              {brand.name} Collection
            </h2>
            <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
              {cars.length} cars
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand history/about */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <Badge className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold mb-4">
                Brand Heritage
              </Badge>
              <h2 className="text-3xl font-bold mb-6">About {brand.name}</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in {brand.founded}, {brand.name} has established itself as one of the world's leading luxury automobile manufacturers. With a rich heritage spanning over {new Date().getFullYear() - brand.founded} years, the brand has consistently delivered exceptional performance, innovative technology, and timeless design.
                </p>
                <p>
                  Every {brand.name} vehicle is crafted with meticulous attention to detail, combining cutting-edge engineering with luxurious comfort. The brand's commitment to excellence has earned it a loyal following of discerning enthusiasts and collectors worldwide.
                </p>
                <p>
                  Today, {brand.name} continues to push the boundaries of automotive innovation while staying true to its heritage of quality and prestige.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="luxury-button">
                    <Info className="mr-2 w-4 h-4" />
                    Request More Information
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <img
                  src="/api/placeholder/800/600"
                  alt={`${brand.name} Showroom`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <p className="text-white text-lg font-semibold mb-2">
                      Experience {brand.name}
                    </p>
                    <p className="text-white/80">
                      Visit our showroom to discover the full range of {brand.name} vehicles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brand;
