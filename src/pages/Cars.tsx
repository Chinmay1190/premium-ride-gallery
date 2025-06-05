
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Grid, List, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import CarCard from '@/components/CarCard';
import { getAllCars, carBrands, Car } from '@/data/carsData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

// Utility function to format price
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

const Cars = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [fuelType, setFuelType] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const allCars = getAllCars();

  const filteredAndSortedCars = useMemo(() => {
    let filtered = allCars.filter((car) => {
      const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           car.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrand === 'all' || car.brand === selectedBrand;
      const matchesFuel = fuelType === 'all' || car.fuel.toLowerCase() === fuelType.toLowerCase();
      
      let matchesPrice = true;
      if (priceRange !== 'all') {
        const price = car.price;
        switch (priceRange) {
          case 'under-10':
            matchesPrice = price < 10000000;
            break;
          case '10-20':
            matchesPrice = price >= 10000000 && price < 20000000;
            break;
          case '20-30':
            matchesPrice = price >= 20000000 && price < 30000000;
            break;
          case 'over-30':
            matchesPrice = price >= 30000000;
            break;
        }
      }

      return matchesSearch && matchesBrand && matchesFuel && matchesPrice;
    });

    // Sort cars
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'year':
          return b.year - a.year;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [allCars, searchQuery, selectedBrand, priceRange, fuelType, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setPriceRange('all');
    setFuelType('all');
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luxury Car Collection
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover our complete range of luxury automobiles from the world's finest brands.
          </p>
          
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="text-sm">
              {filteredAndSortedCars.length} cars available
            </Badge>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                className={viewMode === 'grid' ? 'bg-luxury-gold text-black' : ''}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                className={viewMode === 'list' ? 'bg-luxury-gold text-black' : ''}
                onClick={() => setViewMode('list')}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-card border border-border rounded-xl p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="relative md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name or brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="brand">Brand</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="year">Year (Newest)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {showFilters && (
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Brand</label>
                  <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Brands" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Brands</SelectItem>
                      {carBrands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.name}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Prices" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="under-10">Under ₹1 Crore</SelectItem>
                      <SelectItem value="10-20">₹1 Crore - ₹2 Crore</SelectItem>
                      <SelectItem value="20-30">₹2 Crore - ₹3 Crore</SelectItem>
                      <SelectItem value="over-30">Over ₹3 Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Fuel Type</label>
                  <Select value={fuelType} onValueChange={setFuelType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Fuel Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Fuel Types</SelectItem>
                      <SelectItem value="petrol">Petrol</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Cars Grid/List */}
        {filteredAndSortedCars.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
            : "space-y-6"
          }>
            {filteredAndSortedCars.map((car) => (
              viewMode === 'grid' ? (
                <CarCard key={car.id} car={car} />
              ) : (
                <CarListItem key={car.id} car={car} />
              )
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold mb-4">No cars found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Car List Item component for list view
const CarListItem: React.FC<{ car: Car }> = ({ car }) => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem(car, car.colors[0]);
    toast({
      title: "Added to Cart",
      description: `${car.name} has been added to your cart.`,
    });
  };

  return (
    <div className="luxury-card flex flex-col md:flex-row overflow-hidden animate-fade-in hover:scale-102 transition-transform duration-300">
      <div className="w-full md:w-1/3 relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-64 md:h-full object-cover"
        />
        {car.isNew && (
          <Badge className="absolute top-4 left-4 bg-luxury-gold text-black font-semibold">
            New
          </Badge>
        )}
        {car.isFeatured && (
          <Badge className="absolute top-4 right-4 bg-red-500 text-white font-semibold">
            Featured
          </Badge>
        )}
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{car.name}</h3>
            <Badge variant="outline" className="text-luxury-gold border-luxury-gold">
              {car.year}
            </Badge>
          </div>
          <p className="text-muted-foreground">{car.brand}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Engine</p>
            <p className="font-medium">{car.engine}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Power</p>
            <p className="font-medium">{car.power}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">0-100 km/h</p>
            <p className="font-medium">{car.acceleration}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Fuel</p>
            <p className="font-medium">{car.fuel}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6 line-clamp-2">{car.description}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-luxury-gold">
              {formatPrice(car.price)}
            </p>
            {car.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">
                {formatPrice(car.originalPrice)}
              </p>
            )}
          </div>
          
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Link to={`/car/${car.id}`}>
              <Button className="luxury-button">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
