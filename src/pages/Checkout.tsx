
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, ShieldCheck, User, MapPin, Truck, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/carsData';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formCompleted, setFormCompleted] = useState({
    contact: false,
    shipping: false,
    payment: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      navigate('/payment-success');
      
      toast({
        title: "Order Placed Successfully",
        description: "Your payment has been processed and your order is confirmed.",
      });
    }, 2000);
  };

  const completeSection = (section: 'contact' | 'shipping' | 'payment') => {
    setFormCompleted({
      ...formCompleted,
      [section]: true
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="luxury-card p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Please add some items to your cart before checking out.
            </p>
            <Link to="/cars">
              <Button className="luxury-button">
                Browse Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Cart
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Checkout</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="luxury-card p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-bold">Contact Information</h2>
                </div>
                
                {formCompleted.contact ? (
                  <div className="bg-luxury-gold/10 rounded-lg p-4 flex items-start space-x-3">
                    <Check className="w-5 h-5 text-luxury-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Contact details completed</p>
                      <p className="text-sm text-muted-foreground">john.doe@example.com • +91 98765 43210</p>
                      <button 
                        type="button" 
                        className="text-sm text-luxury-gold mt-1"
                        onClick={() => setFormCompleted({...formCompleted, contact: false})}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" required className="mt-1" />
                    </div>
                    
                    <div className="md:col-span-2 flex justify-end">
                      <Button 
                        type="button" 
                        className="luxury-button"
                        onClick={() => completeSection('contact')}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Shipping Information */}
              <div className="luxury-card p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-bold">Shipping Address</h2>
                </div>
                
                {formCompleted.shipping ? (
                  <div className="bg-luxury-gold/10 rounded-lg p-4 flex items-start space-x-3">
                    <Check className="w-5 h-5 text-luxury-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Shipping address completed</p>
                      <p className="text-sm text-muted-foreground">123 Luxury Avenue, Mumbai, Maharashtra, 400001</p>
                      <button 
                        type="button" 
                        className="text-sm text-luxury-gold mt-1"
                        onClick={() => setFormCompleted({...formCompleted, shipping: false})}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" placeholder="123 Luxury Avenue" required className="mt-1" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Mumbai" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="Maharashtra" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="zip">PIN Code</Label>
                        <Input id="zip" placeholder="400001" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="India" required className="mt-1" defaultValue="India" />
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="saveAddress" className="rounded border-gray-300" />
                      <Label htmlFor="saveAddress" className="text-sm cursor-pointer">Save this address for future purchases</Label>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        className="luxury-button"
                        onClick={() => completeSection('shipping')}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Payment Information */}
              <div className="luxury-card p-6 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-bold">Payment Method</h2>
                </div>
                
                {formCompleted.payment ? (
                  <div className="bg-luxury-gold/10 rounded-lg p-4 flex items-start space-x-3">
                    <Check className="w-5 h-5 text-luxury-gold mt-0.5" />
                    <div>
                      <p className="font-medium">Payment details completed</p>
                      <p className="text-sm text-muted-foreground">Credit Card ending in 4242</p>
                      <button 
                        type="button" 
                        className="text-sm text-luxury-gold mt-1"
                        onClick={() => setFormCompleted({...formCompleted, payment: false})}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <RadioGroup 
                      value={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 border border-border rounded-lg p-4 transition-colors hover:bg-accent">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-white" />
                          </div>
                          <span>Credit / Debit Card</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border border-border rounded-lg p-4 transition-colors hover:bg-accent">
                        <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                        <Label htmlFor="bank-transfer" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4 10h16v8H4v-8zm0-2V6a2 2 0 012-2h12a2 2 0 012 2v2H4z" />
                              <path d="M8 14h8v2H8v-2z" />
                            </svg>
                          </div>
                          <span>Bank Transfer</span>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border border-border rounded-lg p-4 transition-colors hover:bg-accent">
                        <RadioGroupItem value="financing" id="financing" />
                        <Label htmlFor="financing" className="flex items-center space-x-3 cursor-pointer flex-1">
                          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 22V9.5M5 9.5V5a2 2 0 012-2h10a2 2 0 012 2v4.5M5 9.5h14M5 9.5c-1.5 0-3 .5-3 2v7a3 3 0 003 3h14a3 3 0 003-3v-7c0-1.5-1.5-2-3-2M12 17a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </div>
                          <span>Financing Options</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === 'credit-card' && (
                      <div className="space-y-4 pt-4 border-t border-border">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" required className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="4242 4242 4242 4242" required className="mt-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" placeholder="MM/YY" required className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" required className="mt-1" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'bank-transfer' && (
                      <div className="space-y-4 pt-4 border-t border-border">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Bank Transfer Instructions:</h3>
                          <p className="text-sm text-muted-foreground">
                            After placing your order, you will receive bank details to complete your transfer. Your order will be processed once payment is confirmed.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'financing' && (
                      <div className="space-y-4 pt-4 border-t border-border">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h3 className="font-medium mb-2">Financing Options:</h3>
                          <p className="text-sm text-muted-foreground">
                            Our financing partners offer flexible payment plans. After placing your order, a financing specialist will contact you to discuss available options.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        className="luxury-button"
                        onClick={() => completeSection('payment')}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Review Order */}
              <div className="luxury-card p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-black" />
                  </div>
                  <h2 className="text-xl font-bold">Review & Place Order</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-4">
                      <Truck className="w-5 h-5 text-luxury-gold" />
                      <h3 className="font-medium">Delivery Information</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Delivery of your new luxury vehicle will be arranged within 7-14 business days from the date of purchase. Our delivery team will contact you to schedule a convenient delivery time.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      For custom orders or specific delivery requirements, please contact our customer service.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="termsAgreed" required className="rounded border-gray-300" />
                    <Label htmlFor="termsAgreed" className="text-sm cursor-pointer">
                      I agree to the <Link to="/terms" className="text-luxury-gold hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-luxury-gold hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="luxury-button text-lg px-8 py-6"
                      disabled={!formCompleted.contact || !formCompleted.shipping || !formCompleted.payment || isSubmitting}
                    >
                      {isSubmitting ? (
                        <><span className="mr-2">Processing...</span><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg></>
                      ) : (
                        <>Place Order • {formatPrice(state.total * 1.18)}</>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="luxury-card p-6 sticky top-20">
              <h3 className="text-xl font-bold mb-6">Order Summary</h3>
              
              <div className="space-y-4 max-h-80 overflow-y-auto mb-6 pr-2">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="flex space-x-4 pb-4 border-b border-border">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <div
                          className="w-4 h-4 rounded-full border border-gray-300"
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
                        <span className="text-xs text-muted-foreground">{item.selectedColor}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-medium text-luxury-gold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
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
              
              <div className="bg-luxury-gold/10 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-luxury-gold" />
                  <h4 className="font-semibold">Secure Transaction</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  All transactions are secured with 256-bit SSL encryption. Your payment information is protected and never stored on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
