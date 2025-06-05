
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Trash2, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/carsData';
import { useToast } from '@/hooks/use-toast';

const Cart = () => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast({
      title: "Item Removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link to="/cars" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold flex items-center">
            <ShoppingBag className="mr-3 w-8 h-8" /> Your Shopping Cart
          </h1>
        </div>

        {state.items.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="luxury-card divide-y divide-border">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="p-6 flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="w-full md:w-1/4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold">{item.name}</h3>
                          <p className="text-muted-foreground">{item.brand}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id, item.name)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-100"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Color:</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div
                              className="w-6 h-6 rounded-full border border-gray-300"
                              style={{ 
                                backgroundColor: item.selectedColor.toLowerCase() === 'white' ? '#ffffff' :
                                               item.selectedColor.toLowerCase() === 'black' ? '#000000' :
                                               item.selectedColor.toLowerCase() === 'silver' ? '#C0C0C0' :
                                               item.selectedColor.toLowerCase() === 'red' ? '#DC2626' :
                                               item.selectedColor.toLowerCase() === 'blue' ? '#2563EB' :
                                               item.selectedColor.toLowerCase() === 'gray' || item.selectedColor.toLowerCase() === 'grey' ? '#6B7280' :
                                               item.selectedColor.toLowerCase() === 'brown' ? '#92400E' :
                                               item.selectedColor.toLowerCase() === 'green' ? '#059669' :
                                               item.selectedColor.toLowerCase() === 'yellow' ? '#EAB308' :
                                               '#6B7280'
                              }}
                            />
                            <span className="text-sm">{item.selectedColor}</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground">Quantity:</p>
                          <div className="flex items-center space-x-3 mt-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Unit Price: {formatPrice(item.price)}
                        </p>
                        <p className="text-xl font-bold text-luxury-gold">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-between">
                <Button variant="outline" onClick={handleClearCart} className="text-red-500 border-red-500 hover:bg-red-50">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Cart
                </Button>
                <Link to="/cars">
                  <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="luxury-card p-6">
                <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(state.total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (GST 18%)</span>
                    <span>{formatPrice(state.total * 0.18)}</span>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold text-luxury-gold">
                      {formatPrice(state.total * 1.18)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    *Prices are inclusive of GST
                  </p>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full luxury-button mb-4 py-6 text-lg">
                    <CreditCard className="mr-2 w-5 h-5" />
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Options:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-luxury-gold" />
                      Credit/Debit Cards
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-luxury-gold" />
                      Bank Transfer
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="w-3 h-3 mr-2 text-luxury-gold" />
                      Financing Options
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="luxury-card p-12 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any luxury cars to your cart yet.
            </p>
            <Link to="/cars">
              <Button className="luxury-button">
                Browse Our Collection
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
