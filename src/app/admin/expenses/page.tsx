"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { IndianRupee, Plus, Loader2 } from "lucide-react";

type Expense = {
  id: string;
  title: string;
  amount: number;
  status: string;
  createdAt: any;
};

export default function ManageExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending Receipt");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      if (!db.collection) {
        console.warn("Firebase not configured. Using dummy data.");
        setExpenses([
          { id: "1", title: "City Vet Clinic - X-Rays", amount: 4500, status: "Verified", createdAt: new Date() },
          { id: "2", title: "Dog Food Supplier", amount: 12000, status: "Verified", createdAt: new Date() },
          { id: "3", title: "Ambulance Fuel", amount: 2500, status: "Pending Receipt", createdAt: new Date() }
        ]);
        setLoading(false);
        return;
      }
      
      const q = query(collection(db, "expenses"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Expense[];
      setExpenses(data);
    } catch (error) {
      console.error("Error fetching expenses: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      if (!db.collection) {
         alert("Firebase not configured properly. Cannot save.");
         setSubmitting(false);
         return;
      }

      await addDoc(collection(db, "expenses"), {
        title,
        amount: Number(amount),
        status,
        createdAt: serverTimestamp()
      });
      
      setTitle("");
      setAmount("");
      setStatus("Pending Receipt");
      
      await fetchExpenses();
    } catch (error) {
      console.error("Error adding expense: ", error);
      alert("Failed to add expense log.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-foreground flex items-center gap-3">
          <IndianRupee className="h-8 w-8 text-primary" />
          Manage Expenses
        </h1>
        <p className="text-muted-foreground mt-1">Log NGO expenses and track verification status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Add New Expense Form */}
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm h-fit">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4">Log Expense</h2>
          <form onSubmit={handleAddExpense} className="space-y-4">
            <div>
              <label className="text-sm font-semibold mb-1 block">Expense Title/Details</label>
              <input 
                type="text" required value={title} onChange={(e) => setTitle(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="e.g. City Vet Clinic Bill" 
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Amount (₹)</label>
              <input 
                type="number" required min="1" value={amount} onChange={(e) => setAmount(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="e.g. 4500" 
              />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Verification Status</label>
              <select 
                value={status} onChange={(e) => setStatus(e.target.value)} 
                className="w-full bg-muted border border-border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="Pending Receipt">Pending Receipt</option>
                <option value="Verified">Verified</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <button 
              type="submit" disabled={submitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-xl mt-4 transition-all flex items-center justify-center gap-2"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
              Save Expense Entry
            </button>
          </form>
        </div>

        {/* Expenses List */}
        <div className="lg:col-span-2 bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4">Recent Expense Logs</h2>
          {loading ? (
            <div className="py-8 flex justify-center text-primary"><Loader2 className="h-8 w-8 animate-spin" /></div>
          ) : expenses.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No expense logs found.</p>
          ) : (
            <div className="space-y-3">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-colors border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="mt-2 h-2 w-2 rounded-full bg-muted-foreground shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{expense.title}</h4>
                      <p className="text-sm font-bold text-foreground mt-0.5">₹ {expense.amount.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                     <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${
                       expense.status === 'Verified' ? 'bg-secondary/20 text-secondary' : 
                       expense.status === 'Rejected' ? 'bg-destructive/20 text-destructive' :
                       'bg-accent/20 text-accent-foreground'
                     }`}>
                      {expense.status}
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
