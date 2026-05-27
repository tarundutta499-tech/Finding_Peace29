"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Heart, Award, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      {/* Header Section */}
      <section className="bg-primary/10 py-16 md:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            About <span className="text-primary">Finding_Peace29</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl mx-auto text-xl text-muted-foreground"
          >
            A community-driven initiative dedicated to bringing hope, healing, and happiness to the helpless animals of Jaitsar.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Five years ago, we noticed a heartbreaking reality in our town of Jaitsar: injured, abandoned, and sick animals were left to suffer on the streets. Without any dedicated veterinary care for strays, many innocent lives were lost.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Finding_Peace29 was born from a simple belief: <strong>Every life matters.</strong> We started small, feeding stray dogs and cows. Today, we operate a 24/7 emergency rescue service, providing complex medical surgeries and running daily feeding drives for thousands of animals.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                <div className="border border-border p-4 rounded-xl bg-card text-center flex flex-col justify-center">
                  <div className="text-3xl font-bold text-primary mb-1">2019</div>
                  <div className="text-sm text-muted-foreground">Year Founded</div>
                </div>
                <div className="border border-border p-4 rounded-xl bg-card text-center flex flex-col justify-center">
                  <div className="text-xl font-bold text-primary mb-1">Nitish Sharma</div>
                  <div className="text-sm text-muted-foreground">Founder</div>
                </div>
                <div className="border border-border p-4 rounded-xl bg-card text-center flex flex-col justify-center">
                  <div className="text-xl font-bold text-primary mb-1">Jaitsar</div>
                  <div className="text-sm text-muted-foreground">Operating Base</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url("/images/img4.jpg")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-10 rounded-3xl shadow-sm border border-border">
              <Target className="h-12 w-12 text-primary mb-6" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To rescue, treat, and rehabilitate sick and injured street animals. We strive to provide immediate medical attention, run widespread feeding drives, and educate the community on animal welfare and compassionate co-existence.
              </p>
            </div>
            <div className="bg-card p-10 rounded-3xl shadow-sm border border-border">
              <Heart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a society where no animal suffers from hunger, disease, or abuse. A future where every street animal is treated with dignity, and human-animal conflict is replaced by mutual respect and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our everyday rescue operations and community work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Heart />}
              title="Compassion"
              description="Unconditional love and care for every living being, regardless of their species."
            />
            <ValueCard 
              icon={<Shield />}
              title="Transparency"
              description="100% public accountability for every single donation and expense we make."
            />
            <ValueCard 
              icon={<Target />}
              title="Dedication"
              description="Working round the clock to ensure no emergency call goes unanswered."
            />
            <ValueCard 
              icon={<Award />}
              title="Excellence"
              description="Providing the highest standard of veterinary care possible for street animals."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border transition-all hover:shadow-md hover:border-primary/50">
      <div className="p-4 bg-primary/10 text-primary rounded-full mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-xl text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
