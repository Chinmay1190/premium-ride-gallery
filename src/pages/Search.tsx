import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Search as SearchIcon, Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAllCars, Car } from '@/data/carsData';
import CarCard from '@/components/CarCard';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';
  
  const [searchResults, setSearchResults] = useState<Car[]>([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState('all');
  const [fuelType, setFuelType] = useState('all');
  
  useEffect(() => {
    if (query) {
      const allCars = getAllCars();
      const filtered = allCars.filter(car => 
        car.name.toLowerCase().includes(query.toLowerCase()) ||
        car.brand.toLowerCase().includes(query.toLowerCase()) ||
        car.description.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  // Apply filters and sorting
  const filteredAndSortedResults = React.useMemo(() => {
    let filtered = [...searchResults];
    
    // Filter by price range
    if (priceRange !== 'all') {
      filtered = filtered.filter(car => {
        const price = car.price;
        switch (priceRange) {
          case 'under-10':
            return price < 10000000;
          case '10-20':
            return price >= 10000000 && price < 20000000;
          case '20-30':
            return price >= 20000000 && price < 30000000;
          case 'over-30':
            return price >= 30000000;
          default:
            return true;
        }
      });
    }
    
    // Filter by fuel type
    if (fuelType !== 'all') {
      filtered = filtered.filter(car => 
        car.fuel.toLowerCase() === fuelType.toLowerCase()
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'brand':
        filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case 'year':
        filtered.sort((a, b) => b.year - a.year);
        break;
      // For relevance, keep the original order (based on match to the query)
      default:
        break;
    }
    
    return filtered;
  }, [searchResults, sortBy, priceRange, fuelType]);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to All Cars
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <SearchIcon className="mr-3 w-8 h-8" /> Search Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Found {filteredAndSortedResults.length} results for "{query}"
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 luxury-card p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-luxury-gold" />
              <span className="font-medium">Filters:</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
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
                <Select value={fuelType} onValueChange={setFuelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Fuel Type" />
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
              
              <div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <div className="flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4" />
                      <SelectValue placeholder="Sort by" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="price-high">Price (High to Low)</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="brand">Brand</SelectItem>
                    <SelectItem value="year">Year (Newest)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="md:w-auto"
              onClick={() => {
                setPriceRange('all');
                setFuelType('all');
                setSortBy('relevance');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        {filteredAndSortedResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredAndSortedResults.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        ) : (
          <div className="luxury-card p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">No results found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find any cars matching "{query}". Try adjusting your search or browse our collection.
            </p>
            <Link to="/cars">
              <Button className="luxury-button">
                Browse All Cars
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
