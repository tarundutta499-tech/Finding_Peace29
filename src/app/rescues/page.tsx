"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Search, Loader2 } from "lucide-react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

const CATEGORIES = ["All", "Dogs", "Cows", "Cats", "Birds", "Other"];

type Rescue = {
  id: string;
  title?: string;
  animalType?: string;
  date?: string;
  location: string;
  beforeImg?: string;
  afterImg?: string;
  story?: string;
  category?: string;
  status: string;
  createdAt: unknown;
};

export default function RescuesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [rescues, setRescues] = useState<Rescue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRescues = async () => {
      try {
        if (!db.collection) {
          setLoading(false);
          return;
        }
        const q = query(collection(db, "rescues"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Rescue[];
        
        // Filter out raw emergency reports. Only show rescues that have a title and a story assigned by admin.
        const publicRescues = data.filter(r => r.title && r.story);
        setRescues(publicRescues);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRescues();
  }, []);

  const filteredRescues = rescues.filter(rescue => {
    const matchesCategory = activeCategory === "All" || rescue.category === activeCategory;
    const matchesSearch = (rescue.title?.toLowerCase() || "").includes(searchTerm.toLowerCase()) || 
                          (rescue.story?.toLowerCase() || "").includes(searchTerm.toLowerCase());
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
          {loading ? (
            <div className="flex justify-center items-center py-32">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function RescueCard({ rescue }: { rescue: Rescue }) {
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
