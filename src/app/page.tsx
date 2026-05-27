"use client";

import Link from "next/link";
import { ArrowRight, Heart, Shield, Activity, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Placeholder for hero image. Should be replaced with actual image */}
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: 'url("/images/hero.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground font-semibold text-sm mb-4">
              5 Years of Compassion in Jaitsar
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Voice for the <span className="text-primary">Voiceless</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-white/90 leading-relaxed">
              Every life matters. Join us in rescuing, treating, and protecting the stray and injured animals that people usually ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                href="/transparency" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Donate Now <Heart className="h-5 w-5 fill-current" />
              </Link>
              <Link 
                href="/emergency" 
                className="bg-white hover:bg-gray-100 text-foreground px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                Report Emergency <Activity className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={<Heart />} number="5,000+" label="Animals Rescued" />
            <StatCard icon={<Activity />} number="3,500+" label="Medical Treatments" />
            <StatCard icon={<Users />} number="200+" label="Active Volunteers" />
            <StatCard icon={<Shield />} number="100%" label="Transparent Funds" />
          </div>
        </div>
      </section>

      {/* Mission/About Intro */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Compassion Beyond Species
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For the last 5 years, Finding_Peace29 has been a sanctuary for dogs, cows, birds, and all helpless street animals in Jaitsar. We provide immediate medical care, shelter, and love to those who need it most.
              </p>
              <ul className="space-y-4">
                <ListItem text="24/7 Emergency Animal Ambulance" />
                <ListItem text="Dedicated Veterinary Care & Surgeries" />
                <ListItem text="Daily Feeding Drives for Strays" />
              </ul>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                Read our full story <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Image Placeholder */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: 'url("/images/img2.jpg")' }}
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-2xl text-primary">5+</p>
                <p className="text-sm text-muted-foreground font-medium">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4 p-6 bg-card rounded-2xl shadow-sm border border-border">
      <div className="p-4 bg-primary/10 text-primary rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold font-serif text-foreground">{number}</h3>
        <p className="text-muted-foreground font-medium mt-1">{label}</p>
      </div>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center">
        <Heart className="h-3 w-3 text-secondary fill-secondary" />
      </div>
      <span className="text-foreground font-medium">{text}</span>
    </li>
  );
}
