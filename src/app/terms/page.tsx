"use client";

import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <section className="bg-primary/5 py-16 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-muted-foreground space-y-8">
          
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Finding_Peace29 website, you agree to abide by these Terms of Service. If you do not agree with these terms, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Donations & Refund Policy (Disclaimer)</h2>
            <p>
              All donations made to Finding_Peace29 are strictly voluntary and non-refundable. The funds raised are utilized at the discretion of the NGO's management for the rescue, treatment, and feeding of stray animals, as well as operational costs. We strive for 100% transparency, and financial reports can be requested, but donations do not entitle the donor to governance rights within the organization.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Volunteering Liability Disclaimer</h2>
            <p>
              Volunteering with Finding_Peace29 involves interacting with stray and injured animals (dogs, cows, snakes, etc.), which inherently carries certain risks, including but not limited to bites, scratches, or infections. 
            </p>
            <p className="mt-2">
              <strong>By volunteering with us, you acknowledge and accept these risks.</strong> Finding_Peace29, its founder, and its management shall not be held legally or financially liable for any injury, illness, or damage sustained while volunteering, rescuing, or participating in any NGO-related activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Emergency Rescue Reports</h2>
            <p>
              While we strive to respond to every animal emergency reported to our helpline, our response is subject to the availability of volunteers, ambulances, and medical resources. Reporting an emergency does not legally guarantee an immediate rescue.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Website Content & Copyright</h2>
            <p>
              All content on this website, including photographs, rescue stories, and text, is the property of Finding_Peace29 unless otherwise stated. You may not use, reproduce, or distribute our content for commercial purposes without explicit written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Medical & Veterinary Advice Disclaimer</h2>
            <p>
              Any information, guidance, or advice provided by our team or volunteers through this website, our helpline, or social media is for general informational purposes only. It is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a qualified veterinarian for severe medical issues concerning animals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Tax Exemption Status</h2>
            <p>
              Please verify with us directly regarding our current 80G (Income Tax Act) registration status before making a donation if you require a tax-deductible receipt. Unless explicitly stated, please do not assume donations are automatically eligible for tax exemptions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. Any changes will be posted on this page, and your continued use of the website after such modifications constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of India. Any disputes arising out of these terms will be subject to the exclusive jurisdiction of the courts in Rajasthan, India.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
