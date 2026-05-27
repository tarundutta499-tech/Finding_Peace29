"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Share2, Globe, Video } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! Your message has been sent successfully. We will get back to you shortly.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you want to volunteer, donate, or report an emergency, we are here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Shelter Address</h4>
                      <p className="text-muted-foreground leading-relaxed mt-1">
                        Finding Peace 29 Animal Rescue,<br/>
                        Main Market, Jaitsar,<br/>
                        District Sri Ganganagar,<br/>
                        Rajasthan, India - 335702
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Phone & WhatsApp</h4>
                      <div className="mt-1 space-y-1">
                        <p className="text-muted-foreground">Emergency: <a href="tel:+919983297394" className="text-primary font-bold hover:underline">+91 99832 97394</a> (24/7)</p>
                        <p className="text-muted-foreground">General Enquiries: <a href="tel:+919983297394" className="hover:text-foreground transition-colors">+91 99832 97394</a></p>
                        <a href="https://wa.me/919983297394" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#25D366] font-bold hover:underline mt-2">
                          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">Email Addresses</h4>
                      <div className="mt-1 space-y-1">
                        <p className="text-muted-foreground">Help: <a href="mailto:help@findingpeace29.org" className="hover:text-foreground transition-colors">help@findingpeace29.org</a></p>
                        <p className="text-muted-foreground">Donations: <a href="mailto:donations@findingpeace29.org" className="hover:text-foreground transition-colors">donations@findingpeace29.org</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Connect With Us</h2>
                <div className="flex gap-4">
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-4 rounded-full transition-colors">
                    <Share2 className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-4 rounded-full transition-colors">
                    <Globe className="h-6 w-6" />
                  </a>
                  <a href="#" className="bg-muted hover:bg-primary hover:text-white text-muted-foreground p-4 rounded-full transition-colors">
                    <Video className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form & Google Maps */}
            <div className="space-y-8">
              <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Name</label>
                    <input required type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address</label>
                    <input required type="email" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Subject</label>
                    <select required className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                      <option value="">Select a subject...</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="partnership">Partnership / Sponsorship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Message</label>
                    <textarea required rows={5} className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-xl font-bold shadow-md transition-all flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>

              {/* Google Maps Iframe */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border h-[300px]">
                <iframe 
                  src="https://maps.google.com/maps?q=Jaitsar,+Sri+Ganganagar,+Rajasthan+335702&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Finding Peace 29 - Jaitsar Rajasthan Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
