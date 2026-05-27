import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Share2, Globe, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/20 p-2 rounded-full">
                <Heart className="h-6 w-6 text-primary fill-primary" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-white">
                Finding<span className="text-primary">_Peace29</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Dedicated to rescuing, treating, and protecting stray and injured animals in Jaitsar, Rajasthan. Every life matters, and together we can be the voice for the voiceless.
            </p>
            <div className="text-muted-foreground text-xs space-y-1 bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="font-bold text-white/80">FINDING PEACE SANSTHAN JAITSAR</p>
              <p>Reg No: COOP/2023/SRIGANGANAGAR/201723</p>
              <p>PAN: AATBF0692C</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Social</span>
                <Share2 className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Website</span>
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Video</span>
                <Video className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full"></span>
                  About Our Journey
                </Link>
              </li>
              <li>
                <Link href="/rescues" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full"></span>
                  Rescue Stories
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full"></span>
                  Donation Transparency
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full"></span>
                  Become a Volunteer
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="h-1 w-1 bg-primary rounded-full"></span>
                  Image Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Jaitsar, District Sri Ganganagar, Rajasthan, India - 335702</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+919983297394" className="hover:text-white transition-colors">+91 99832 97394</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:help@findingpeace29.org" className="hover:text-white transition-colors">help@findingpeace29.org</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg text-white mb-6">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for monthly rescue updates and transparency reports.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-border mt-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Finding_Peace29. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
