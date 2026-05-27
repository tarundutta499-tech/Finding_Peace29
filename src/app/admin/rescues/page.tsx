"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { FileText, Plus, Loader2 } from "lucide-react";

type Rescue = {
  id: string;
  title?: string;
  condition?: string;
  reporterName?: string;
  reporterPhone?: string;
  location: string;
  status: string;
  createdAt: unknown;
};

export default function ManageRescues() {
  const [rescues, setRescues] = useState<Rescue[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("Dispatched");
  const [submitting, setSubmitting] = useState(false);

  const fetchRescues = async () => {
    try {
      if (!db.collection) {
        // Firebase dummy config check
        console.warn("Firebase not configured. Using dummy data.");
        setRescues([
          { id: "1", title: "Cow hit by truck", location: "Highway 15", status: "Critical", createdAt: new Date() },
          { id: "2", title: "Puppy stuck in drain", location: "Sector 4", status: "Recovering", createdAt: new Date() }
        ]);
        setLoading(false);
        return;
      }
      
      const q = query(collection(db, "rescues"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Rescue[];
      setRescues(data);
    } catch (error) {
      console.error("Error fetching rescues: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRescues();
  }, []);

  const handleAddRescue = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      if (!db.collection) {
         alert("Firebase not configured properly. Cannot save.");
         setSubmitting(false);
         return;
      }

      await addDoc(collection(db, "rescues"), {
        title,
        location,
        status,
        createdAt: serverTimestamp()
      });
      
      setTitle("");
      setLocation("");
      setStatus("Dispatched");
      
      await fetchRescues();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add rescue log.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-foreground flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Manage Rescues
        </h1>
        <p className="text-muted-foreground mt-1">Log new animal emergencies and update their status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Add New Rescue Form */}
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm h-fit">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4">Log New Rescue</h2>
          <form onSubmit={handleAddRescue} className="space-y-4">
            <div>
              <label className="text-sm font-semibold mb-1 block">Title / Animal</label>
              <input 
                type="text" required value={title} onChange={(e) => setTitle(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="e.g. Injured stray dog" 
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Location</label>
              <input 
                type="text" required value={location} onChange={(e) => setLocation(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="e.g. Railway Station Road" 
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Current Status</label>
              <select 
                value={status} onChange={(e) => setStatus(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Dispatched">Dispatched</option>
                <option value="In Surgery">In Surgery</option>
                <option value="Critical">Critical</option>
                <option value="Recovering">Recovering</option>
                <option value="Released">Released</option>
              </select>
            </div>
            <button 
              type="submit" disabled={submitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-xl mt-4 transition-all flex items-center justify-center gap-2"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
              Save Rescue Log
            </button>
          </form>
        </div>

        {/* Rescue List */}
        <div className="lg:col-span-2 bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4">Recent Rescue Logs</h2>
          {loading ? (
            <div className="py-8 flex justify-center text-primary"><Loader2 className="h-8 w-8 animate-spin" /></div>
          ) : rescues.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No rescue logs found.</p>
          ) : (
            <div className="space-y-3">
              {rescues.map((rescue) => (
                <div key={rescue.id} className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-colors border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{rescue.title || "Emergency Report"}</h4>
                      <p className="text-sm text-muted-foreground mt-0.5">{rescue.location}</p>
                      {!rescue.title && rescue.condition && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{rescue.condition}</p>
                      )}
                      {rescue.reporterName && (
                        <p className="text-xs text-primary/80 mt-1 font-medium">Reported by: {rescue.reporterName} ({rescue.reporterPhone})</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                     <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-md">
                      {rescue.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
