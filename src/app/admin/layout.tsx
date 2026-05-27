"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Lock, LogOut, LayoutDashboard, FileText, Image as ImageIcon, IndianRupee } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthError("");
    } catch (err: any) {
      setAuthError("Invalid credentials or admin not found.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center">
          <Lock className="h-10 w-10 text-primary mb-4" />
          <p className="font-semibold">Verifying Admin Access...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
        <div className="max-w-md w-full bg-card p-8 rounded-3xl border border-border shadow-2xl">
          <div className="text-center mb-8">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-serif text-2xl font-bold">Admin Portal</h1>
            <p className="text-sm text-muted-foreground mt-1">Authorized personnel only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            {authError && <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-xl text-center font-medium">{authError}</div>}
            <div>
              <label className="text-sm font-semibold mb-1 block">Admin Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="admin@findingpeace29.org" />
            </div>
            <div>
              <label className="text-sm font-semibold mb-1 block">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-muted border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl mt-4 transition-all">
              Secure Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/10 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden md:flex flex-col">
        <div className="p-6 border-b border-border">
          <h2 className="font-serif font-bold text-xl text-foreground">Admin Portal</h2>
          <p className="text-xs text-muted-foreground mt-1 truncate">{user.email}</p>
        </div>
        <div className="flex-1 py-6 space-y-1 px-3">
          <AdminLink href="/admin" icon={<LayoutDashboard />} label="Dashboard" active={pathname === "/admin"} />
          <AdminLink href="/admin/expenses" icon={<IndianRupee />} label="Manage Expenses" active={pathname === "/admin/expenses"} />
          <AdminLink href="/admin/rescues" icon={<FileText />} label="Manage Rescues" active={pathname === "/admin/rescues"} />
          <AdminLink href="/admin/gallery" icon={<ImageIcon />} label="Manage Gallery" active={pathname === "/admin/gallery"} />
        </div>
        <div className="p-4 border-t border-border">
          <button onClick={handleLogout} className="w-full flex items-center gap-2 text-destructive hover:bg-destructive/10 px-4 py-2 rounded-lg transition-colors font-medium text-sm">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="md:hidden bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="font-serif font-bold text-lg">Admin Portal</h2>
          <button onClick={handleLogout} className="text-destructive p-2"><LogOut className="h-5 w-5"/></button>
        </div>
        <div className="p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function AdminLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
    >
      {/* Clone element to add sizing consistently */}
      {React.cloneElement(icon as React.ReactElement<any>, { className: "h-5 w-5" })}
      {label}
    </Link>
  );
}
