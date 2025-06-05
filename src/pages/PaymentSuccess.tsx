
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, Car, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const PaymentSuccess = () => {
  useEffect(() => {
    // Create confetti effect on component mount
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // Create gold confetti
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#D4AF37', '#FFD700', '#B8941F'],
      });
      
      // Create white confetti
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFFFFF', '#E5E4E2', '#C0C0C0'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="luxury-card max-w-3xl mx-auto p-8 md:p-12 text-center">
          <div className="w-24 h-24 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-14 h-14 text-luxury-gold" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          
          <div className="bg-muted/30 rounded-lg p-6 mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium">Order Confirmation</h3>
                  <p className="text-muted-foreground">
                    You will receive an email confirmation with your order details shortly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium">Personal Concierge</h3>
                  <p className="text-muted-foreground">
                    One of our luxury vehicle specialists will contact you within 24 hours to discuss delivery arrangements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-medium">Vehicle Preparation</h3>
                  <p className="text-muted-foreground">
                    Your luxury vehicle will be prepared to your specifications and undergo a comprehensive quality check.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-medium">Delivery</h3>
                  <p className="text-muted-foreground">
                    We will arrange delivery to your specified location at a time convenient for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" className="w-full">
                <Home className="mr-2 w-4 h-4" />
                Home
              </Button>
            </Link>
            <Link to="/cars">
              <Button variant="outline" className="w-full">
                <Car className="mr-2 w-4 h-4" />
                Browse More
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 w-4 h-4" />
                Contact Us
              </Button>
            </Link>
          </div>
          
          <div className="bg-luxury-gold/10 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Need Assistance?</h3>
            <p className="text-sm text-muted-foreground">
              If you have any questions about your order, please contact our customer service team at <span className="text-luxury-gold">support@luxurycars.com</span> or call <span className="text-luxury-gold">+91 123 456 7890</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
