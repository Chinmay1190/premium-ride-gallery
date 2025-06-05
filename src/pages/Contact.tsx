
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="relative bg-black py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="bg-luxury-gradient bg-clip-text text-transparent">LuxuryCars</span>
            </h1>
            <p className="text-xl text-white/80">
              Get in touch with our luxury automobile specialists for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="luxury-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visit Our Showroom</h3>
                      <p className="text-muted-foreground">
                        123 Luxury Avenue<br />
                        Worli, Mumbai 400018<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="luxury-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-1">
                        Sales: +91 22 4567 8901
                      </p>
                      <p className="text-muted-foreground mb-1">
                        Service: +91 22 4567 8902
                      </p>
                      <p className="text-muted-foreground">
                        Support: +91 22 4567 8903
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="luxury-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-1">
                        Sales: sales@luxurycars.com
                      </p>
                      <p className="text-muted-foreground mb-1">
                        Service: service@luxurycars.com
                      </p>
                      <p className="text-muted-foreground">
                        Support: support@luxurycars.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="luxury-card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-muted-foreground mb-1">
                        Monday - Saturday: 10:00 AM - 8:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sunday: 11:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-luxury-gold mt-2">
                        Private viewings available by appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="luxury-card p-8">
                <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're interested in a specific vehicle, have questions about our services, or want to schedule a test drive, we're here to assist you.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        className="mt-1" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        className="mt-1" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        className="mt-1" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="Vehicle Inquiry" 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                        className="mt-1" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Please provide details about your inquiry..." 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      className="mt-1 h-32" 
                    />
                  </div>
                  
                  <div>
                    <Button 
                      type="submit" 
                      className="luxury-button w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <><span className="mr-2">Sending...</span><svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg></>
                      ) : (
                        <><Send className="mr-2 w-4 h-4" /> Send Message</>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Google Map (placeholder) */}
              <div className="mt-8">
                <div className="luxury-card p-2">
                  <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Map Will Be Displayed Here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit any of our luxury showrooms across India for a personalized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Mumbai Showroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4">Mumbai Flagship</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    123 Luxury Avenue, Worli, Mumbai 400018, Maharashtra
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    +91 22 4567 8901
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    10:00 AM - 8:00 PM (Mon-Sat)<br />
                    11:00 AM - 6:00 PM (Sun)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Delhi Showroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4">Delhi</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    456 Elegance Road, Vasant Vihar, New Delhi 110057
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    +91 11 2345 6789
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    10:00 AM - 8:00 PM (Mon-Sat)<br />
                    11:00 AM - 6:00 PM (Sun)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="luxury-card overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Bangalore Showroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4">Bangalore</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    789 Prestige Boulevard, Whitefield, Bangalore 560066
                  </p>
                </div>
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    +91 80 9876 5432
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <p className="text-muted-foreground">
                    10:00 AM - 8:00 PM (Mon-Sat)<br />
                    11:00 AM - 6:00 PM (Sun)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="luxury-card p-6">
                <h3 className="text-xl font-semibold mb-3">How can I schedule a test drive?</h3>
                <p className="text-muted-foreground">
                  You can schedule a test drive by contacting our sales team via phone, email, or by visiting one of our showrooms. For certain exclusive models, we can arrange for the vehicle to be brought to your location.
                </p>
              </div>
              
              <div className="luxury-card p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer financing options?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer a variety of financing solutions tailored to your needs. Our financial advisors can help you explore options from our partner banks and financial institutions to find the perfect arrangement for your purchase.
                </p>
              </div>
              
              <div className="luxury-card p-6">
                <h3 className="text-xl font-semibold mb-3">What is your after-sales service like?</h3>
                <p className="text-muted-foreground">
                  Our commitment to excellence extends beyond the purchase. We provide comprehensive after-sales service including scheduled maintenance, repairs, and 24/7 roadside assistance. Our service centers are equipped with the latest technology and staffed by factory-trained technicians.
                </p>
              </div>
              
              <div className="luxury-card p-6">
                <h3 className="text-xl font-semibold mb-3">Can you help with vehicle customization?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We offer extensive customization options for most of our luxury vehicles. Our design consultants can guide you through available factory options and bespoke modifications to create a truly personalized automobile.
                </p>
              </div>
              
              <div className="luxury-card p-6">
                <h3 className="text-xl font-semibold mb-3">Do you accept trade-ins?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept trade-ins of premium and luxury vehicles. Our appraisal team will provide a fair valuation based on the condition, history, and market value of your current vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
