"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Landmark, HardHat, ShieldCheck, Activity, ArrowRight, Grid, LayoutDashboard } from "lucide-react";

const galleryImages = [
  {
    src: "/images/hospital_construction_3.jpg",
    title: "Brickwork and Layout Verification",
    desc: "Inspecting the wall alignment and structural design with onsite supervisors."
  },
  {
    src: "/images/hospital_construction_1.jpg",
    title: "Primary Structure Progress",
    desc: "Workers building up the main room brick partition walls."
  },
  {
    src: "/images/hospital_construction_2.jpg",
    title: "Spraying and Curing the Masonry",
    desc: "Curing the brickwork daily to ensure maximum structural strength."
  },
  {
    src: "/images/hospital_construction_4.jpg",
    title: "Groundwork and Foundation Excavation",
    desc: "Digging and preparing the foundational trenches for structural columns."
  },
  {
    src: "/images/hospital_construction_5.jpg",
    title: "Pillar Casting and High-Level Support",
    desc: "Workers casting the main concrete support pillars on elevated platforms."
  }
];

const specs = [
  { icon: <Activity className="h-6 w-6 text-primary" />, title: "Surgical Theatre", desc: "A sterile operating room equipped for complex bone/wound surgeries." },
  { icon: <Heart className="h-6 w-6 text-primary" />, title: "Specialized Wards", desc: "Separate recovery sections for dogs, large cattle (cows/bulls), and birds." },
  { icon: <Landmark className="h-6 w-6 text-primary" />, title: "ICU & Recovery Room", desc: "24/7 observation space for critical cases post-operation." },
  { icon: <ShieldCheck className="h-6 w-6 text-primary" />, title: "Outpatient Clinic", desc: "Daily medical checks, dressing, vaccinations, and first-aid center." }
];

export default function HospitalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
              <HardHat className="h-3.5 w-3.5" /> Construction Project
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Pashupati Nath <span className="text-primary">Hospital</span> for Animals
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
              Building Jaitsar's first dedicated emergency veterinary facility to ensure no injured animal is left untreated due to lack of infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview & Motivation */}
      <section className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Why We Are Building This Hospital</h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                For five years, our rescue team has provided first-aid and basic treatments on the streets. However, we frequently face critical situations—such as severe accidents, fractures, and spreading viral infections like Lumpy Skin Disease—that require sterile surgery rooms, isolation wards, and post-operative monitoring.
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                The **Pashupati Nath Hospital** is our solution. It will serve as a permanent sanctuary and state-of-the-art medical facility where stray animals, cattle, and birds can receive free, high-quality treatment and rehabilitation under the supervision of qualified veterinarians.
              </p>
            </div>
            
            <div className="lg:col-span-5 bg-card border border-border p-8 rounded-3xl shadow-lg relative">
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold py-1.5 px-3 rounded-full shadow-md">
                Active Project
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Project Highlights</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <span className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground"><strong>Location:</strong> Jaitsar, Sri Ganganagar District, Rajasthan.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground"><strong>Facility size:</strong> Dedicated surgical units, diagnostic center, and recovery sheds.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground"><strong>Expected Impact:</strong> Supporting 5,000+ emergency treatment cases annually.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Progress Gallery */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Live Construction Progress</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              A transparent look at the building phases of Pashupati Nath Hospital, funded by local contributors and well-wishers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-3xl overflow-hidden shadow-md group hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] relative bg-muted overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-bold text-foreground text-lg leading-tight">{img.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Infrastructure Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Key Infrastructure Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Pashupati Nath Hospital is designed to be a comprehensive medical environment specifically planned for the unique care requirements of street animals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, idx) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-3xl shadow-sm text-center flex flex-col items-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  {spec.icon}
                </div>
                <h3 className="font-bold text-foreground text-lg">{spec.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-foreground text-muted py-20 border-t border-border mt-auto relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Help Us Lay the Next Brick</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The bricks are being laid, the walls are rising, but we need your financial and volunteer support to finish the interior medical rooms, buy medical equipment, and support our veterinarians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/transparency#donate" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all text-base"
            >
              Donate for Hospital Construction <Heart className="h-5 w-5 fill-current" />
            </Link>
            <Link 
              href="/volunteer" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all text-base"
            >
              Volunteer on Site <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
