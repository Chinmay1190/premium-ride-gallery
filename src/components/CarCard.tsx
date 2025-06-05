
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Car, formatPrice } from '@/data/carsData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CarCardProps {
  car: Car;
  className?: string;
}

const CarCard: React.FC<CarCardProps> = ({ car, className = '' }) => {
  const [selectedColor, setSelectedColor] = useState(car.colors[0]);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(car, selectedColor);
    toast({
      title: "Added to Cart",
      description: `${car.name} in ${selectedColor} has been added to your cart.`,
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${car.name} ${isLiked ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  return (
    <div className={`luxury-card group hover:scale-105 transition-all duration-500 ${className}`}>
      <div className="relative overflow-hidden rounded-t-xl">
        {/* Car Image */}
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay with badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {car.isNew && (
            <Badge className="bg-luxury-gold text-black font-semibold">New</Badge>
          )}
          {car.isFeatured && (
            <Badge className="bg-red-500 text-white font-semibold">Featured</Badge>
          )}
          {car.originalPrice && (
            <Badge variant="secondary" className="bg-green-500 text-white font-semibold">
              Save {formatPrice(car.originalPrice - car.price)}
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="icon"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white"
            onClick={handleLike}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Link to={`/car/${car.id}`}>
            <Button
              variant="secondary"
              size="icon"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white"
            >
              <Eye className="w-5 h-5 text-gray-600" />
            </Button>
          </Link>
        </div>

        {/* Brand logo */}
        <div className="absolute bottom-4 left-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xs font-bold text-gray-800">{car.brand.charAt(0)}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Car Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-luxury-gold transition-colors">
            {car.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{car.brand} • {car.year}</p>
          
          {/* Specifications */}
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
            <span>{car.fuel}</span>
            <span>•</span>
            <span>{car.transmission}</span>
            <span>•</span>
            <span>{car.power}</span>
          </div>

          {/* Rating (simulated) */}
          <div className="flex items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">(4.8)</span>
          </div>
        </div>

        {/* Color selection */}
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Color:</p>
          <div className="flex space-x-2">
            {car.colors.map((color) => (
              <button
                key={color}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
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
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedColor(color);
                }}
                title={color}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">{selectedColor}</p>
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-luxury-gold">
              {formatPrice(car.price)}
            </span>
            {car.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 luxury-button group"
          >
            <ShoppingBag className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Add to Cart
          </Button>
          <Link to={`/car/${car.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
