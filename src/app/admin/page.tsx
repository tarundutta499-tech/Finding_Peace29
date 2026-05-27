"use client";

import React, { useState, useEffect } from "react";
import { Heart, IndianRupee, TrendingUp, Users, Loader2 } from "lucide-react";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalDonations: 940000, // Still placeholder until we build donations module
    totalExpenses: 0,
    activeRescues: 0,
    newVolunteers: 15 // Placeholder
  });
  
  const [recentExpenses, setRecentExpenses] = useState<any[]>([]);
  const [recentRescues, setRecentRescues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      if (!db.collection) {
        console.warn("Firebase not configured. Using dummy dashboard data.");
        setRecentExpenses([
          { id: "1", title: "City Vet Clinic - X-Rays", amount: 4500, date: "Today", status: "Verified" },
          { id: "2", title: "Dog Food Supplier", amount: 12000, date: "Yesterday", status: "Verified" }
        ]);
        setRecentRescues([
          { id: "1", title: "Cow hit by truck", location: "Highway 15", status: "Critical" },
          { id: "2", title: "Puppy stuck in drain", location: "Sector 4", status: "Recovering" }
        ]);
        setStats(prev => ({ ...prev, totalExpenses: 16500, activeRescues: 2 }));
        setLoading(false);
        return;
      }

      // Fetch Recent Expenses
      const expensesQuery = query(collection(db, "expenses"), orderBy("createdAt", "desc"));
      const expensesSnap = await getDocs(expensesQuery);
      const allExpenses = expensesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      
      const totalExp = allExpenses.reduce((sum, item) => sum + (item.amount || 0), 0);
      
      // Fetch Recent Rescues
      const rescuesQuery = query(collection(db, "rescues"), orderBy("createdAt", "desc"));
      const rescuesSnap = await getDocs(rescuesQuery);
      const allRescues = rescuesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as any));
      
      const activeCount = allRescues.filter(r => r.status !== "Released").length;

      setStats(prev => ({ ...prev, totalExpenses: totalExp, activeRescues: activeCount }));
      setRecentExpenses(allExpenses.slice(0, 4));
      setRecentRescues(allRescues.slice(0, 4));
      
    } catch (error) {
      console.error("Error fetching dashboard data: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="py-20 flex justify-center"><Loader2 className="h-10 w-10 text-primary animate-spin" /></div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-serif text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-1">Welcome back. Here is the latest summary of our rescue operations and finances.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardStat icon={<IndianRupee />} title="Total Donations" value={`₹ ${stats.totalDonations.toLocaleString('en-IN')}`} trend="Placeholder" />
        <DashboardStat icon={<TrendingUp />} title="Total Expenses" value={`₹ ${stats.totalExpenses.toLocaleString('en-IN')}`} trend="Dynamic" />
        <DashboardStat icon={<Heart />} title="Active Rescues" value={stats.activeRescues.toString()} trend="Dynamic" />
        <DashboardStat icon={<Users />} title="New Volunteers" value={stats.newVolunteers.toString()} trend="Placeholder" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4 flex items-center justify-between">
            Recent Expense Entries
            <Link href="/admin/expenses" className="text-sm text-primary hover:underline font-sans font-medium">View All</Link>
          </h2>
          <div className="space-y-4">
            {recentExpenses.length === 0 ? <p className="text-muted-foreground text-sm">No expenses logged.</p> :
              recentExpenses.map(exp => (
                <ExpenseItem 
                  key={exp.id} 
                  title={exp.title} 
                  amount={`₹${exp.amount?.toLocaleString('en-IN')}`} 
                  date={exp.createdAt?.toDate ? new Date(exp.createdAt.toDate()).toLocaleDateString() : 'N/A'} 
                  status={exp.status} 
                />
              ))
            }
          </div>
        </div>

        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-xl font-bold font-serif text-foreground mb-4 flex items-center justify-between">
            Recent Rescue Logs
            <Link href="/admin/rescues" className="text-sm text-primary hover:underline font-sans font-medium">View All</Link>
          </h2>
          <div className="space-y-4">
            {recentRescues.length === 0 ? <p className="text-muted-foreground text-sm">No rescues logged.</p> :
              recentRescues.map(res => (
                <RescueItem 
                  key={res.id} 
                  title={res.title} 
                  location={res.location} 
                  status={res.status} 
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardStat({ icon, title, value, trend }: { icon: React.ReactNode, title: string, value: string, trend: string }) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
      <p className="text-xs text-primary font-medium mt-2">{trend}</p>
    </div>
  );
}

function ExpenseItem({ title, amount, date, status }: { title: string, amount: string, date: string, status: string }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-xl transition-colors">
      <div>
        <h4 className="font-semibold text-sm text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground mt-0.5">{date}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-sm text-foreground">{amount}</p>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${status === 'Verified' ? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent-foreground'}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

function RescueItem({ title, location, status }: { title: string, location: string, status: string }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-xl transition-colors">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
        <div>
          <h4 className="font-semibold text-sm text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{location}</p>
        </div>
      </div>
      <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-md">
        {status}
      </span>
    </div>
  );
}
