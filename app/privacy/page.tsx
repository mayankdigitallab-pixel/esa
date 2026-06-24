import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy | Excellent Students' Academy Rohini",
  description:
    "How Excellent Students' Academy Rohini collects, uses and protects parent and student information shared during demo booking, enrolment and ongoing coaching.",
  alternates: { canonical: "https://www.theesa.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageBanner
        label="Legal"
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1920&q=80"
        imageAlt="ESA Rohini front desk"
        heading={<>How we handle your information.</>}
        subtitle="The data Excellent Students' Academy collects when you book a demo, enrol your child or visit our website - and how we keep it safe."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <article className="prose-esa mx-auto">
            <p className="text-sm text-neutral-500">
              Last updated: 22 June 2026
            </p>

            <h2>1. Who we are</h2>
            <p>
              Excellent Students&apos; Academy (&ldquo;ESA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a coaching institute located at C7/72, 2nd Floor, Sector 7, Rohini, New Delhi 110085. We operate the website www.theesa.in. This policy explains how we handle personal information of students, parents and visitors.
            </p>

            <h2>2. Information we collect</h2>
            <p>We collect only what we need to run our coaching programs. The categories are:</p>
            <ul>
              <li><strong>Contact details:</strong> parent or student name, phone number, WhatsApp number, email address, residential locality.</li>
              <li><strong>Academic details:</strong> class, board, school name, subjects of interest, previous exam scores shared by you.</li>
              <li><strong>Demo and enrolment data:</strong> demo slot booked, batches attended, fees paid, attendance.</li>
              <li><strong>Photographs:</strong> classroom and event photos in which a student may appear.</li>
              <li><strong>Website data:</strong> pages visited, device and browser type, approximate location from your IP address, anonymous analytics events.</li>
            </ul>

            <h2>3. How we use your information</h2>
            <ul>
              <li>To respond to demo enquiries via WhatsApp, call or email.</li>
              <li>To plan and run the right batch for your child.</li>
              <li>To share weekly test scores, monthly parent meeting invites and progress reports.</li>
              <li>To send fee receipts and renewal reminders.</li>
              <li>To publish board results (with explicit consent for names and photos).</li>
              <li>To improve the teaching method, batch design and the website.</li>
            </ul>

            <h2>4. WhatsApp communication</h2>
            <p>
              We use WhatsApp as our primary parent communication channel. By sharing your phone number with us you allow us to send weekly scorecards, batch notices, parent meeting invites and fee reminders. You can opt out at any time by replying STOP.
            </p>

            <h2>5. Sharing of information</h2>
            <p>
              We do not sell or rent your information. We share data only in these limited situations:
            </p>
            <ul>
              <li>With our own faculty and operations team to deliver the coaching.</li>
              <li>With payment providers strictly to process fee transactions.</li>
              <li>If required by law, court order or government request.</li>
            </ul>

            <h2>6. Cookies and analytics</h2>
            <p>
              Our website uses essential cookies to keep it running and basic analytics tools to understand which pages parents find useful. We do not use intrusive tracking. You can clear cookies anytime from your browser settings.
            </p>

            <h2>7. Data security</h2>
            <p>
              Parent records, attendance registers and fee receipts are stored at our Rohini centre and on access-controlled systems. Digital records are protected with passwords and limited staff access. We retain enrolment data for up to seven years for tax and academic reference purposes.
            </p>

            <h2>8. Your rights</h2>
            <p>
              You can ask us at any time to:
            </p>
            <ul>
              <li>See the information we hold about you or your child.</li>
              <li>Correct any details that are wrong.</li>
              <li>Remove your child&apos;s photo or name from our public materials.</li>
              <li>Stop receiving WhatsApp or email communication.</li>
              <li>Delete your contact records once the student leaves ESA.</li>
            </ul>
            <p>
              To exercise any of these rights, email <a href="mailto:excellentstudentsacademy1@gmail.com">excellentstudentsacademy1@gmail.com</a> from the registered contact and we will action it within 10 working days.
            </p>

            <h2>9. Children&apos;s privacy</h2>
            <p>
              Many of our students are minors. All communication is made through the parent or guardian. We do not collect personal information directly from children without parental consent.
            </p>

            <h2>10. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The updated version will be posted on this page with a fresh &ldquo;last updated&rdquo; date.
            </p>

            <h2>11. Contact</h2>
            <p>
              For any privacy-related question please write to us at <a href="mailto:excellentstudentsacademy1@gmail.com">excellentstudentsacademy1@gmail.com</a> or call <a href="tel:+919458012793">+91 94580 12793</a>.
            </p>
          </article>
        </Container>
      </section>
    </div>
  );
}
