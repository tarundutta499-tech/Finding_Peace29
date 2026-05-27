"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Megaphone, Truck, HeartPulse, Stethoscope, HandHeart } from "lucide-react";

const VOLUNTEER_ROLES = [
  { id: "rescue", title: "Rescue Volunteer", icon: <Users className="h-6 w-6" />, desc: "Help our team in physically rescuing animals from the streets." },
  { id: "feeding", title: "Feeding Drives", icon: <HandHeart className="h-6 w-6" />, desc: "Participate in or lead daily feeding runs in your locality." },
  { id: "transport", title: "Transport Support", icon: <Truck className="h-6 w-6" />, desc: "Use your vehicle to transport animals to the clinic." },
  { id: "medical", title: "Medical Support", icon: <Stethoscope className="h-6 w-6" />, desc: "Assist vets with basic dressing and post-op care (training provided)." },
  { id: "awareness", title: "Awareness Campaigns", icon: <Megaphone className="h-6 w-6" />, desc: "Help educate schools and communities about animal welfare." }
];

export default function VolunteerPage() {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleRole = (id: string) => {
    if (selectedRoles.includes(id)) {
      setSelectedRoles(selectedRoles.filter(role => role !== id));
    } else {
      setSelectedRoles([...selectedRoles, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRoles.length === 0) {
      alert("Please select at least one area of interest.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for registering! We will contact you soon for the orientation.");
      setSelectedRoles([]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeartPulse className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Become a <span className="text-primary">Volunteer</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            You don't need a cape to be a hero, just a compassionate heart. Join our growing family of animal lovers and make a real difference in Jaitsar.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Why Volunteer With Us?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Volunteering at Finding_Peace29 is a deeply rewarding experience. Not only do you directly save lives, but you also join a passionate community of like-minded individuals. We provide all necessary training, safety equipment, and a supportive environment.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-sm">
                <h3 className="font-bold text-lg text-foreground mb-3">Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Must be at least 18 years old (or have parental consent)</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Ability to commit at least 4 hours a month</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Genuine compassion for street animals</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Willingness to learn and follow shelter protocols</li>
                </ul>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border shadow-xl rounded-3xl p-8 md:p-10">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Volunteer Registration Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name</label>
                      <input required type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number</label>
                      <input required type="tel" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address</label>
                      <input required type="email" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">City / Area</label>
                      <input required type="text" className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Main Market, Jaitsar" />
                    </div>
                  </div>

                  {/* Areas of Interest */}
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-foreground block">Areas of Interest (Select all that apply)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {VOLUNTEER_ROLES.map(role => (
                        <div 
                          key={role.id}
                          onClick={() => toggleRole(role.id)}
                          className={`cursor-pointer border rounded-xl p-4 transition-all flex items-start gap-4 ${
                            selectedRoles.includes(role.id) 
                              ? "bg-primary/5 border-primary shadow-sm" 
                              : "bg-background border-border hover:border-primary/50"
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${selectedRoles.includes(role.id) ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}>
                            {role.icon}
                          </div>
                          <div>
                            <h4 className={`font-bold text-sm ${selectedRoles.includes(role.id) ? "text-primary" : "text-foreground"}`}>{role.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{role.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Any past experience? (Optional)</label>
                    <textarea rows={3} className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Tell us if you have fostered or volunteered before..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-primary-foreground py-4 rounded-xl font-bold shadow-md transition-all flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
