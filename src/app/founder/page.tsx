"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Calendar, Users, Home, ArrowRight, Quote } from "lucide-react";

export default function FounderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20 border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
              <Heart className="h-3 w-3 fill-current" /> Leadership & Vision
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              A Message from the <span className="text-primary">Founder</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
              The story of how one small act of compassion in Rajasthan grew into a community-driven movement for street animals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Side: Photo & Bio Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-3xl p-6 shadow-xl relative overflow-hidden group"
              >
                <div className="aspect-[3/4] w-full relative rounded-2xl overflow-hidden mb-6 bg-muted">
                  <Image
                    src="/images/founder.jpg"
                    alt="Nitish Sharma - Founder"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-foreground">Nitish Sharma</h3>
                    <p className="text-sm font-semibold text-primary">Founder & President</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    "Every life deserves compassion. Protecting street animals and conserving nature are deeply connected."
                  </p>
                  
                  <hr className="border-border" />
                  
                  {/* Founder Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/40 p-3 rounded-xl">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5 mb-1">
                        <Calendar className="h-3.5 w-3.5 text-primary" /> Started
                      </div>
                      <div className="font-bold text-foreground text-sm">2020 (Jaitsar)</div>
                    </div>
                    <div className="bg-muted/40 p-3 rounded-xl">
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5 mb-1">
                        <Users className="h-3.5 w-3.5 text-primary" /> Volunteers
                      </div>
                      <div className="font-bold text-foreground text-sm">60+ Active</div>
                    </div>
                  </div>

                  <Link 
                    href="/transparency#donate"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    Support Our Mission <Heart className="h-4 w-4 fill-current" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Message & Story */}
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="prose prose-neutral max-w-none text-muted-foreground"
              >
                <div className="relative mb-8 bg-muted/30 p-6 rounded-2xl border-l-4 border-primary">
                  <Quote className="h-10 w-10 text-primary/20 absolute -top-4 -left-2 rotate-180" />
                  <p className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed pl-4">
                    "It Started With Compassion. It Became a Mission."
                  </p>
                </div>

                <div className="space-y-6 text-base md:text-lg leading-relaxed">
                  <p>
                    In <strong className="text-foreground">2020</strong>, during the difficult period of the COVID-19 pandemic, a silent crisis was unfolding on the streets and in the villages of Rajasthan. Animals were suffering from injuries, disease, hunger, and neglect, with very little access to timely care.
                  </p>
                  
                  <p>
                    One of the most difficult challenges during that period was the spread of <strong className="text-foreground">Lumpy Skin Disease among cattle and stray animals</strong>. Many animals were suffering in pain, while others were left helpless because there was simply no one available to help them.
                  </p>

                  <div className="py-4 my-6 border-y border-border text-center">
                    <span className="font-serif text-2xl text-foreground font-semibold block">"I could not look away."</span>
                  </div>

                  <p>
                    What began with helping one or two animals gradually became a responsibility I could no longer walk away from. With limited resources but a strong belief that <strong className="text-foreground">every life deserves compassion</strong>, I began rescuing and caring for animals one at a time.
                  </p>

                  <p>
                    Soon, people from the local community began joining the effort. Volunteers came forward, resources were contributed, and a small individual effort slowly grew into a collective mission.
                  </p>

                  <p className="bg-primary/5 p-5 rounded-2xl border border-primary/10">
                    That journey became <strong className="text-primary">Finding Peace Sansthan Jaitsar</strong>.
                  </p>

                  <p>
                    Today, our team of <strong className="text-foreground">60+ volunteers</strong> continues to work for injured, abandoned, and vulnerable animals, providing rescue, treatment, food, rehabilitation, and care. We also work towards environmental conservation and community awareness because we believe that protecting animals and protecting nature are deeply connected.
                  </p>

                  <div className="pt-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Home className="h-6 w-6 text-primary" /> Pashupati Nath Hospital for Animals
                    </h3>
                    <p>
                      But our journey cannot stop at rescue. Every day, we encounter animals who need treatment that is difficult to provide without proper infrastructure. This is why we have taken our next major step—the construction of <strong className="text-foreground">Pashupati Nath Hospital for Animals</strong>.
                    </p>
                    <p className="mt-4">
                      Our vision is to create a dedicated facility where injured and abandoned animals can receive timely medical treatment, rehabilitation, and compassionate care.
                    </p>
                  </div>

                  <p>
                    The journey has never been easy. We have grown with the support of local donors, volunteers, and people who believe in our cause. Every contribution, every volunteer, and every rescued life has strengthened our belief that meaningful change begins when someone chooses to care.
                  </p>

                  <div className="my-8 p-6 bg-card border border-border rounded-2xl space-y-4">
                    <h4 className="font-bold text-foreground flex items-center gap-2">
                      <Heart className="h-5 w-5 text-primary fill-primary/20" /> Our Commitment is Simple:
                    </h4>
                    <p className="font-serif text-lg text-foreground italic">
                      "No animal should suffer or lose its life simply because help was not available."
                    </p>
                  </div>

                  <p className="text-lg">
                    What began with helping one animal has become a mission to help thousands. And we are only getting started.
                  </p>
                </div>

                {/* Sign-off */}
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="font-serif text-xl font-bold text-foreground">— Founder</p>
                  <p className="text-sm font-semibold text-primary">Finding Peace Sansthan Jaitsar</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-muted py-16 border-t border-border mt-auto">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-serif text-3xl font-bold text-foreground">Be a Part of the Story</h2>
          <p className="text-muted-foreground text-lg">
            Whether through volunteering your time or donating resources, you can help us build Pashupati Nath Hospital and save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/volunteer" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              Join as a Volunteer <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/transparency#donate" 
              className="bg-background border border-border hover:bg-muted text-foreground px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
            >
              Donate to the Hospital <Heart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
