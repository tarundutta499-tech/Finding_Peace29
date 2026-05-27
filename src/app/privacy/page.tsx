"use client";

import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-muted-foreground space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p>
              At Finding_Peace29, we are committed to protecting your privacy. We collect personal information when you voluntarily provide it to us, such as when you make a donation, sign up to volunteer, or report an animal emergency. This information may include your name, email address, phone number, and physical address.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Process your donations and issue receipts.</li>
              <li>Respond to your animal rescue emergency reports.</li>
              <li>Communicate with you regarding our campaigns, newsletters, and volunteer opportunities.</li>
              <li>Improve our website and community outreach programs.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Processing</h2>
            <p>
              We do not store your credit card or sensitive payment details on our servers. All donations and transactions are processed securely through trusted third-party payment gateways (such as Google Pay, PhonePe, Paytm, or direct Bank Transfers) which adhere to strict industry standards.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing of Information</h2>
            <p>
              We respect your privacy. <strong>We do not sell, rent, or trade your personal information to third parties.</strong> We may share your information only when required by law or to trusted third-party service providers who assist us in operating our NGO, provided those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br/><br/>
              <strong>Finding_Peace29</strong><br/>
              Jaitsar, Rajasthan, India<br/>
              Phone/WhatsApp: +91 99832 97394<br/>
              Founder: Nitish Sharma
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
