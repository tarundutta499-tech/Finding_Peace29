"use client";

import { useState } from "react";
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from "recharts";
import { 
  ShieldCheck, FileText, Download, TrendingUp, IndianRupee, 
  Building2, QrCode, CreditCard, Landmark, CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

const EXPENSE_DATA = [
  { name: "Medical Surgeries & Treatments", value: 450000, color: "#E85D04" },
  { name: "Animal Food & Nutrition", value: 320000, color: "#F9A03F" },
  { name: "Ambulance & Fuel", value: 150000, color: "#5B8A72" },
  { name: "Shelter Maintenance", value: 120000, color: "#6B7280" },
  { name: "Staff Salaries (Vet/Helpers)", value: 250000, color: "#1A1A1A" }
];

const MONTHLY_DONATIONS = [
  { month: "Jan", donations: 120000, expenses: 110000 },
  { month: "Feb", donations: 150000, expenses: 135000 },
  { month: "Mar", donations: 180000, expenses: 190000 },
  { month: "Apr", donations: 210000, expenses: 205000 },
  { month: "May", donations: 280000, expenses: 250000 }
];

export default function TransparencyPage() {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "bank">("upi");

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            100% Financial <span className="text-primary">Transparency</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We believe that every single rupee donated to us is a massive responsibility. We publicly share our expense breakdowns, vet bills, and donation receipts so you know exactly where your money goes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge text="80G Tax Exempted" />
            <Badge text="12A Registered NGO" />
            <Badge text="Government Approved" />
            <Badge text="Every Rupee Accounted" />
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBox title="Total Donations Received (YTD)" amount="₹ 9,40,000" icon={<TrendingUp className="text-secondary" />} />
            <StatBox title="Total Expenses (YTD)" amount="₹ 8,90,000" icon={<IndianRupee className="text-destructive" />} />
            <StatBox title="Remaining Emergency Fund" amount="₹ 50,000" icon={<ShieldCheck className="text-primary" />} highlight />
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Pie Chart */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Where Your Donation Goes</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={EXPENSE_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={110}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {EXPENSE_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RechartsTooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {EXPENSE_DATA.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Monthly Financial Report</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MONTHLY_DONATIONS} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E0D8" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                    <RechartsTooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} cursor={{fill: '#F3F0E6'}}/>
                    <Legend />
                    <Bar dataKey="donations" name="Donations" fill="#5B8A72" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="expenses" name="Expenses" fill="#E85D04" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reports Download */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Public Bills & Reports</h2>
              <p className="text-muted-foreground">Download our monthly CA audited reports and medical bills.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "May 2026 Expense Report", 
              "April 2026 Expense Report", 
              "Q1 2026 Audit Report", 
              "March Vet Bills (Combined)"
            ].map((report, idx) => (
              <div key={idx} className="bg-card p-6 rounded-2xl border border-border flex flex-col gap-4 hover:shadow-md transition-all group">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{report}</h4>
                  <p className="text-xs text-muted-foreground">PDF • ~1.2 MB</p>
                </div>
                <button className="flex items-center gap-2 text-sm font-semibold text-primary mt-auto hover:underline">
                  Download <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border shadow-xl rounded-3xl overflow-hidden">
            <div className="bg-primary p-8 text-center text-primary-foreground">
              <h2 className="font-serif text-3xl font-bold mb-4">Make a Life-Saving Donation</h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto">
                Your donation directly funds surgeries, food, and emergency ambulance fuel. Choose a preferred method below.
              </p>
            </div>
            
            <div className="p-8">
              {/* Payment Tabs */}
              <div className="flex bg-muted p-1 rounded-xl mb-8">
                <button 
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg flex justify-center items-center gap-2 transition-all ${paymentMethod === "upi" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <QrCode className="h-5 w-5" /> UPI / QR
                </button>
                <button 
                  onClick={() => setPaymentMethod("bank")}
                  className={`flex-1 py-3 text-sm font-bold rounded-lg flex justify-center items-center gap-2 transition-all ${paymentMethod === "bank" ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <Landmark className="h-5 w-5" /> Bank Transfer
                </button>

              </div>

              {/* Tab Content */}
              <div className="min-h-[300px] flex items-center justify-center">
                
                {paymentMethod === "upi" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="text-center w-full max-w-sm mx-auto">
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm inline-block mb-6">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=43527315639@sbi&pn=FINDING%20PEACE%20SANSTHAN%20JAITSAR&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
                    </div>
                    <div className="bg-muted py-3 px-4 rounded-xl flex justify-between items-center mb-4">
                      <span className="text-muted-foreground text-sm">UPI ID</span>
                      <span className="font-bold font-mono">43527315639@sbi</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Accepts Google Pay, PhonePe, Paytm, and all UPI apps.</p>
                  </motion.div>
                )}

                {paymentMethod === "bank" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="w-full max-w-md mx-auto space-y-4">
                    <BankDetail label="Account Name" value="Finding Peace 29 Animal Rescue" />
                    <BankDetail label="Account Number" value="0123456789101112" />
                    <BankDetail label="IFSC Code" value="ICIC0000123" />
                    <BankDetail label="Bank Branch" value="Jaitsar Main Branch" />
                    <BankDetail label="Account Type" value="Current Account" />
                  </motion.div>
                )}



              </div>
            </div>
            
            <div className="bg-muted/50 p-6 text-center border-t border-border">
              <p className="text-sm text-muted-foreground">
                For 80G tax exemption receipts, please email your PAN and transaction details to <span className="font-bold text-foreground">donations@findingpeace29.org</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold border border-primary/20 shadow-sm backdrop-blur-md">
      <CheckCircle2 className="h-4 w-4" />
      {text}
    </div>
  );
}

function StatBox({ title, amount, icon, highlight = false }: { title: string, amount: string, icon: React.ReactNode, highlight?: boolean }) {
  return (
    <div className={`p-6 rounded-2xl border ${highlight ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20' : 'bg-card border-border shadow-sm'}`}>
      <div className="flex justify-between items-start mb-4">
        <h4 className={`text-sm font-medium ${highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{title}</h4>
        <div className={`p-2 rounded-lg ${highlight ? 'bg-white/20' : 'bg-muted'}`}>
          {icon}
        </div>
      </div>
      <div className={`text-3xl font-bold font-serif ${highlight ? 'text-white' : 'text-foreground'}`}>
        {amount}
      </div>
    </div>
  );
}

function BankDetail({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-border last:border-0">
      <span className="text-muted-foreground text-sm">{label}</span>
      <span className="font-bold text-foreground font-mono bg-muted px-2 py-1 rounded">{value}</span>
    </div>
  );
}
