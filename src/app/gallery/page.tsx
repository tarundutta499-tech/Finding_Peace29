"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";

// Mock Images
const GALLERY_IMAGES = [
  { id: 1, src: "/images/rescue 1.jpeg", title: "Rescue Operation", category: "Rescues", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/feeding 1.jpeg", title: "Feeding Drive", category: "Feeding Drives", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/images/treatment.jpeg", title: "Medical Treatment", category: "Treatments", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "/images/Team Work.jpeg", title: "Volunteer Team", category: "Team Work", span: "md:col-span-2 md:row-span-1" },
  { id: 5, src: "/images/rescue 2.jpeg", title: "Rescue Operation", category: "Rescues", span: "md:col-span-1 md:row-span-2" },
  { id: 6, src: "/images/feeding 3.jpeg", title: "Feeding Drive", category: "Feeding Drives", span: "md:col-span-1 md:row-span-1" },
  { id: 7, src: "/images/treatment 2.jpeg", title: "Medical Treatment", category: "Treatments", span: "md:col-span-2 md:row-span-1" },
  { id: 8, src: "/images/team work 2.jpeg", title: "Volunteer Team", category: "Team Work", span: "md:col-span-1 md:row-span-1" },
  { id: 9, src: "/images/team work 3.jpeg", title: "Volunteer Team", category: "Team Work", span: "md:col-span-1 md:row-span-2" },
  { id: 10, src: "/images/team work 4.jpeg", title: "Volunteer Team", category: "Team Work", span: "md:col-span-2 md:row-span-1" },
  { id: 11, src: "/images/treatment 3.jpeg", title: "Medical Treatment", category: "Treatments", span: "md:col-span-1 md:row-span-1" },
  { id: 12, src: "/images/team work 5.jpeg", title: "Volunteer Team", category: "Team Work", span: "md:col-span-1 md:row-span-1" },
  { id: 13, src: "/images/certificate_reg.png", title: "NGO Registration", category: "Certificates", span: "md:col-span-1 md:row-span-1" },
  { id: 14, src: "/images/certificate_pan.png", title: "Official PAN", category: "Certificates", span: "md:col-span-1 md:row-span-1" },
  { id: 15, src: "/images/certificate_committee.png", title: "Executive Committee", category: "Certificates", span: "md:col-span-1 md:row-span-1" },
  { id: 16, src: "/images/Achievements 1.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 17, src: "/images/Achievements 2.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 18, src: "/images/Achievements 3.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 19, src: "/images/Achievements 4.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 20, src: "/images/Achievements 5.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 21, src: "/images/Achievements 6.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 22, src: "/images/Achievements 7.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 23, src: "/images/Achievements 8.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" },
  { id: 24, src: "/images/Achievements 9.jpg", title: "NGO Achievement", category: "Achievements", span: "md:col-span-1 md:row-span-1" }
];

const CATEGORIES = ["All", "Rescues", "Feeding Drives", "Treatments", "Team Work", "Certificates", "Achievements"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredImages = GALLERY_IMAGES.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            A visual journey of compassion. See the faces of the lives you've helped save and the incredible work of our volunteers on the ground.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filteredImages.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid mb-4"
                >
                  <img src={img.src} alt={img.title} className="w-full h-auto block transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-primary font-semibold text-sm mb-1">{img.category}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{img.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full object-contain max-h-[85vh]" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
