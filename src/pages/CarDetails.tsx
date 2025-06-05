
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share, ShoppingBag, Check, Shield, Award, Settings, Zap, Gauge, Info, Truck, Calendar, Tag, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCarById, formatPrice, getAllCars } from '@/data/carsData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import CarCard from '@/components/CarCard';

const CarDetails = () => {
  const { carId } = useParams<{ carId: string }>();
  const [car, setCar] = useState(getCarById(carId || ''));
  const [selectedColor, setSelectedColor] = useState(car?.colors[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [similarCars, setSimilarCars] = useState([]);
  
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (carId) {
      const foundCar = getCarById(carId);
      setCar(foundCar);
      
      if (foundCar) {
        setSelectedColor(foundCar.colors[0]);
        
        // Find similar cars (same brand, excluding current car)
        const similar = getAllCars()
          .filter(c => c.brand === foundCar.brand && c.id !== foundCar.id)
          .slice(0, 4);
        setSimilarCars(similar);
      }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [carId]);

  const handleAddToCart = () => {
    if (!car) return;
    
    for (let i = 0; i < quantity; i++) {
      addItem(car, selectedColor);
    }
    
    toast({
      title: "Added to Cart",
      description: `${quantity} ${car.name} in ${selectedColor} added to your cart.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${car?.name} ${isLiked ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: car?.name,
        text: `Check out this amazing ${car?.brand} ${car?.name}!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "The car details link has been copied to your clipboard.",
      });
    }
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Car not found</h1>
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
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Cars
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Car images */}
          <div className="lg:w-3/5">
            <div className="luxury-card p-4 mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {car.isNew && (
                    <Badge className="bg-luxury-gold text-black font-semibold">New</Badge>
                  )}
                  {car.isFeatured && (
                    <Badge className="bg-red-500 text-white font-semibold">Featured</Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Thumbnails (placeholder) */}
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="luxury-card p-2 cursor-pointer hover:border-luxury-gold transition-colors">
                  <img
                    src={car.image}
                    alt={`${car.name} view ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Car details */}
          <div className="lg:w-2/5">
            <div className="luxury-card p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
                    {car.brand}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={handleLike}
                    >
                      <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={handleShare}
                    >
                      <Share className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
                <p className="text-muted-foreground">{car.description}</p>
              </div>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end space-x-2">
                  <span className="text-4xl font-bold text-luxury-gold">{formatPrice(car.price)}</span>
                  {car.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(car.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  *Ex-showroom price, excludes road tax and registration
                </p>
              </div>
              
              {/* Key specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-medium">{car.year}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Top Speed</p>
                    <p className="font-medium">{car.topSpeed}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Acceleration</p>
                    <p className="font-medium">{car.acceleration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-medium">{car.engine}</p>
                  </div>
                </div>
              </div>
              
              {/* Color selection */}
              <div className="mb-6">
                <p className="font-medium mb-3">Select Color:</p>
                <div className="flex space-x-3 mb-2">
                  {car.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border-2 relative transition-all duration-200 ${
                        selectedColor === color 
                          ? 'border-luxury-gold scale-110 shadow-lg' 
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                       color.toLowerCase() === 'black' ? '#000000' :
                                       color.toLowerCase() === 'silver' ? '#C0C0C0' :
                                       color.toLowerCase() === 'red' ? '#DC2626' :
                                       color.toLowerCase() === 'blue' ? '#2563EB' :
                                       color.toLowerCase() === 'gray' || color.toLowerCase() === 'grey' ? '#6B7280' :
                                       color.toLowerCase() === 'brown' ? '#92400E' :
                                       color.toLowerCase() === 'green' ? '#059669' :
                                       color.toLowerCase() === 'yellow' ? '#EAB308' :
                                       '#6B7280'
                      }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      {selectedColor === color && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check className={`w-5 h-5 ${color.toLowerCase() === 'white' ? 'text-black' : 'text-white'}`} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Selected: {selectedColor}</p>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <p className="font-medium mb-3">Quantity:</p>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              {/* Add to cart */}
              <div className="flex space-x-4">
                <Button
                  className="flex-1 luxury-button group"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
                <Link to="/checkout" className="flex-1">
                  <Button
                    className="w-full border-luxury-gold bg-luxury-gold/10 text-luxury-gold hover:bg-luxury-gold hover:text-black"
                    onClick={() => {
                      addItem(car, selectedColor);
                    }}
                  >
                    Buy Now
                  </Button>
                </Link>
              </div>
              
              {/* Additional info */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-2">
                  <Truck className="w-4 h-4 text-luxury-gold" />
                  <span>Free delivery for orders over ₹2 Crore</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-2">
                  <Shield className="w-4 h-4 text-luxury-gold" />
                  <span>Secure payment with end-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Tag className="w-4 h-4 text-luxury-gold" />
                  <span>Exclusive offers and loyalty benefits</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs with car details */}
        <div className="mt-12">
          <Tabs defaultValue="specs">
            <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-8">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="warranty">Warranty</TabsTrigger>
            </TabsList>
            
            <div className="luxury-card p-8">
              <TabsContent value="specs">
                <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Brand</td>
                          <td className="py-4 font-medium">{car.brand}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Model</td>
                          <td className="py-4 font-medium">{car.name}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Year</td>
                          <td className="py-4 font-medium">{car.year}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Engine</td>
                          <td className="py-4 font-medium">{car.engine}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Power</td>
                          <td className="py-4 font-medium">{car.power}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <table className="w-full">
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Transmission</td>
                          <td className="py-4 font-medium">{car.transmission}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Fuel Type</td>
                          <td className="py-4 font-medium">{car.fuel}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Top Speed</td>
                          <td className="py-4 font-medium">{car.topSpeed}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Acceleration (0-100)</td>
                          <td className="py-4 font-medium">{car.acceleration}</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-4 text-muted-foreground">Available Colors</td>
                          <td className="py-4 font-medium">{car.colors.join(', ')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-luxury-gold/10 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-luxury-gold" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-muted/30 rounded-lg flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <Info className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Premium Features</h4>
                    <p className="text-muted-foreground">
                      Additional premium features and customization options are available. Contact our sales team for more information.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="performance">
                <h3 className="text-2xl font-bold mb-6">Performance Highlights</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="luxury-card p-6 text-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold mb-1">Acceleration</h4>
                    <p className="text-3xl font-bold text-luxury-gold mb-2">{car.acceleration}</p>
                    <p className="text-sm text-muted-foreground">0-100 km/h</p>
                  </div>
                  
                  <div className="luxury-card p-6 text-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gauge className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold mb-1">Top Speed</h4>
                    <p className="text-3xl font-bold text-luxury-gold mb-2">{car.topSpeed}</p>
                    <p className="text-sm text-muted-foreground">Maximum Speed</p>
                  </div>
                  
                  <div className="luxury-card p-6 text-center">
                    <div className="w-12 h-12 bg-luxury-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-6 h-6 text-black" />
                    </div>
                    <h4 className="font-semibold mb-1">Power Output</h4>
                    <p className="text-3xl font-bold text-luxury-gold mb-2">{car.power}</p>
                    <p className="text-sm text-muted-foreground">Maximum Power</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The {car.brand} {car.name} delivers exceptional performance in all driving conditions. Its powerful {car.engine} engine combined with precise {car.transmission} transmission ensures a responsive and dynamic driving experience.
                </p>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-lg flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Performance Notice</h4>
                    <p className="text-muted-foreground">
                      Performance figures may vary slightly depending on testing conditions and individual vehicle specifications. Always drive responsibly and in accordance with local laws.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="warranty">
                <h3 className="text-2xl font-bold mb-6">Warranty & Service</h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Standard Warranty</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="luxury-card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="w-6 h-6 text-luxury-gold" />
                        <h5 className="font-medium">Comprehensive Coverage</h5>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        3 years or 100,000 kilometers (whichever comes first) comprehensive warranty covering manufacturing defects and workmanship.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">Full mechanical and electrical components</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">24/7 roadside assistance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">Complimentary maintenance for 1 year</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="luxury-card p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Award className="w-6 h-6 text-luxury-gold" />
                        <h5 className="font-medium">Extended Warranty</h5>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Optional extended warranty packages available for additional peace of mind.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">Extend up to 5 years or 150,000 kilometers</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">Premium maintenance plans</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-luxury-gold mt-1" />
                          <span className="text-sm">Transferable to new owners</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-4">Service Schedule</h4>
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-4 text-left">Service Type</th>
                        <th className="py-4 text-left">Schedule</th>
                        <th className="py-4 text-left">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-4">Initial Service</td>
                        <td className="py-4">1,000 km or 1 month</td>
                        <td className="py-4 text-muted-foreground">Initial inspection and adjustments</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4">Regular Maintenance</td>
                        <td className="py-4">Every 10,000 km or 6 months</td>
                        <td className="py-4 text-muted-foreground">Oil change, filters, and routine checks</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-4">Major Service</td>
                        <td className="py-4">Every 30,000 km or 2 years</td>
                        <td className="py-4 text-muted-foreground">Comprehensive system inspection and maintenance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 p-4 bg-luxury-gold/10 rounded-lg flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <Shield className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Luxury Owner Benefits</h4>
                    <p className="text-muted-foreground mb-2">
                      As a {car.brand} owner, you'll enjoy exclusive benefits including:
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Priority servicing and dedicated service manager</li>
                      <li>• Complimentary vehicle pickup and delivery</li>
                      <li>• Access to exclusive owner events and experiences</li>
                      <li>• Concierge services for travel and accommodation</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Similar cars */}
        {similarCars.length > 0 && (
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Similar Cars You May Like</h2>
              <Link to={`/brands/${car.brand}`} className="text-luxury-gold hover:underline">
                View all {car.brand} cars
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
