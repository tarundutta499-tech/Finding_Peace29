"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle, MapPin, Camera, AlertTriangle, Send } from "lucide-react";

export default function EmergencyPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [locationStatus, setLocationStatus] = useState<"idle" | "fetching" | "success" | "error">("idle");
  const [coordinates, setCoordinates] = useState("");

  const handleGetLocation = () => {
    setLocationStatus("fetching");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates(`${position.coords.latitude}, ${position.coords.longitude}`);
          setLocationStatus("success");
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationStatus("error");
        }
      );
    } else {
      setLocationStatus("error");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Emergency report submitted successfully. Our team has been notified.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-destructive/10 py-16 border-b border-destructive/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-6 animate-pulse" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Emergency Animal <span className="text-destructive">Rescue</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            If you see an injured or distressed animal in Jaitsar, please act quickly. Every minute counts. Report it immediately using the form or call us.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+919983297394" className="bg-destructive hover:bg-destructive/90 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-destructive/20 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              <PhoneCall className="h-5 w-5" />
              Call Emergency Line
            </a>
            <a href="https://wa.me/919983297394" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border shadow-xl rounded-3xl overflow-hidden">
            <div className="p-8 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Report an Injured Animal</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Name</label>
                    <input required type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <input required type="tel" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Animal Type & Condition</label>
                  <textarea required rows={3} className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="E.g., A street dog hit by a bike, bleeding from the hind leg..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Location Details</label>
                  <div className="flex gap-2">
                    <input required type="text" value={coordinates} onChange={(e) => setCoordinates(e.target.value)} className="flex-1 bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Address or GPS Coordinates" />
                    <button 
                      type="button" 
                      onClick={handleGetLocation}
                      className={`px-4 py-3 rounded-xl border flex items-center gap-2 font-semibold transition-colors ${locationStatus === 'success' ? 'bg-secondary/10 border-secondary text-secondary' : 'bg-background border-border hover:bg-muted text-foreground'}`}
                    >
                      <MapPin className="h-5 w-5" />
                      {locationStatus === 'fetching' ? 'Fetching...' : locationStatus === 'success' ? 'Located' : 'Get GPS'}
                    </button>
                  </div>
                  {locationStatus === 'error' && <p className="text-xs text-destructive mt-1">Could not fetch location. Please type the address manually.</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Upload Photo (Optional but helpful)</label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm font-medium text-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-xl font-bold shadow-md transition-all flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting Report...</span>
                  ) : (
                    <>
                      Submit Emergency Report <Send className="h-5 w-5" />
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to stay at the location (if safe) until our rescue team arrives or contacts you.
                </p>
              </form>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
