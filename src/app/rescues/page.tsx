"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Search } from "lucide-react";

// Mock data (would come from Firebase)
const MOCK_RESCUES = [
  {
    id: 1,
    title: "Ganga: Saved from a Deep Trench",
    animalType: "Cow",
    date: "July 12, 2026",
    location: "Outskirts of Jaitsar",
    beforeImg: "/images/cow_hole.jpg",
    afterImg: "/images/cow_crane_rescue.jpg",
    story: "Our team received an urgent call about a cow that had slipped and fallen deep into a narrow, dark, and deep ground borewell trench. Trapped several feet below, the space was too confined for manual lifting. Our volunteers worked tirelessly for hours, ensuring the distressed cow had air, water, and emotional comfort. Collaborating with local operators, we secured a JCB crane and rigged a custom hoisting harness. With precise guidance, Ganga was lifted out safely without major injuries. Today, she is fully recovered and reunited with her herd.",
    category: "Cows"
  },
  {
    id: 2,
    title: "Dollar: Overcoming Human Cruelty",
    animalType: "Dog",
    date: "August 3, 2026",
    location: "Sector 4, Jaitsar",
    beforeImg: "/images/dog_burn_before.jpg",
    afterImg: "/images/dog_burn_after.jpg",
    story: "Dollar suffered a horrific act of cruelty when someone intentionally set fire, causing severe burns to his face and snout. We received a distress call and rushed to the location immediately. Our medical team cleaned his wounds, applied antiseptic treatments, and administered pain relief. Over weeks of intense care and love at our sanctuary, Dollar showed incredible resilience. Today, his burns have completely healed, and he is a healthy, energetic, and happy dog who trusts humans again.",
    category: "Dogs"
  },
  {
    id: 3,
    title: "Rocky: Healing a Fractured Leg",
    animalType: "Dog",
    date: "August 10, 2026",
    location: "National Highway, Jaitsar",
    beforeImg: "/images/puppy_fracture_after.jpg",
    afterImg: "/images/puppy_fracture_before.jpg",
    story: "Rocky, a young puppy, was struck by a speeding vehicle on the busy highway, resulting in a severe fracture to his front right leg. Curled up in pain and unable to move, he was in a critical state when we received the call. Our emergency rescue team rushed to the spot, brought him to the clinic, and carefully set and bandaged his fractured leg. With daily medication, plaster care, and nutritious food at our shelter, Rocky recovered quickly. Within weeks, he was fit and fine, and today he is happily running around and playing with other dogs in our sanctuary.",
    category: "Dogs"
  },
  {
    id: 4,
    title: "Lakshmi: Overcoming Prolapse Disease",
    animalType: "Cow",
    date: "August 15, 2026",
    location: "7 GB (Jaitsar)",
    beforeImg: "/images/cow_prolapse_before.jpg",
    afterImg: "/images/cow_prolapse_after.jpg",
    story: "We received an urgent call from 7 GB village regarding a cow suffering from a severe, life-threatening uterine prolapse. She was in excruciating pain, and the exposed tissue was at high risk of a fatal infection. Our medical team immediately reached the location, carefully cleaned and disinfected the area, performed the complex tissue reduction and replacement, and secured it. After several days of intensive antibiotic care, wound dressing, and special feeding at our shelter, the cow made a full recovery. Today, she is completely healthy, infection-free, and living happily in our sanctuary.",
    category: "Cows"
  }
];

const CATEGORIES = ["All", "Dogs", "Cows", "Cats", "Birds", "Other"];

export default function RescuesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRescues = MOCK_RESCUES.filter(rescue => {
    const matchesCategory = activeCategory === "All" || rescue.category === activeCategory;
    const matchesSearch = rescue.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          rescue.story.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rescue <span className="text-primary">Stories</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Witness the incredible transformations made possible by your support and our dedicated team. Every life saved is a story worth telling.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 sticky top-20 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 w-full md:w-auto hide-scrollbar gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-muted border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <AnimatePresence>
              {filteredRescues.map((rescue) => (
                <RescueCard key={rescue.id} rescue={rescue} />
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredRescues.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No rescue stories found matching your criteria.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function RescueCard({ rescue }: { rescue: any }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="grid grid-cols-2 h-48 md:h-64 relative">
        <div className="relative w-full h-full">
          <img src={rescue.beforeImg} alt="Before rescue" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs font-bold backdrop-blur-md">
            Before
          </div>
        </div>
        <div className="relative w-full h-full border-l-4 border-primary">
          <img src={rescue.afterImg} alt="After rescue" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-bold shadow-md">
            After
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold">
            {rescue.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{rescue.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{rescue.location}</span>
          </div>
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{rescue.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {rescue.story}
        </p>
      </div>
    </motion.div>
  );
}
