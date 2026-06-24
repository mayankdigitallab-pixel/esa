import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Terms & Conditions | Excellent Students' Academy Rohini",
  description:
    "Terms and conditions for enrolling at Excellent Students' Academy, Rohini Sector 7. Read the agreement covering fees, demo classes, attendance, refunds and code of conduct.",
  alternates: { canonical: "https://www.theesa.in/terms" },
};

export default function TermsPage() {
  return (
    <div>
      <PageBanner
        label="Legal"
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Excellent Students' Academy Rohini classroom"
        heading={<>Terms &amp; conditions for ESA Rohini.</>}
        subtitle="The agreement that governs enrolment, demo classes, fees, attendance and conduct at Excellent Students' Academy."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <article className="prose-esa mx-auto">
            <p className="text-sm text-neutral-500">
              Last updated: 22 June 2026
            </p>

            <h2>1. About these terms</h2>
            <p>
              These terms apply to every student, parent or guardian who interacts with Excellent Students&apos; Academy (&ldquo;ESA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), whether you visit our Rohini Sector 7 centre, attend a demo class, enrol in a batch or use our website at www.theesa.in. By enrolling or paying fees you accept these terms in full.
            </p>

            <h2>2. Demo classes</h2>
            <p>
              We offer up to seven days of free demo classes for new students. Demo classes are an honest sample of our real batches - the same faculty, the same syllabus, the same pace. There is no registration fee for a demo. Booking a demo does not commit you to enrol.
            </p>

            <h2>3. Enrolment and fees</h2>
            <ul>
              <li>Fees are charged monthly or in agreed instalments depending on the program.</li>
              <li>Fees once paid are non-transferable and non-refundable except in the cases listed in clause 4.</li>
              <li>The fee structure shared at the time of enrolment is what we charge for the term. We will give you 30 days&apos; notice before any revision.</li>
              <li>A printed receipt is issued for every payment.</li>
            </ul>

            <h2>4. Refunds</h2>
            <p>
              A refund of unused fees can be requested within 7 days of enrolment if the student attends fewer than three classes. After the 7-day window or once three classes have been attended, fees become non-refundable. Refunds are processed within 14 working days to the original payment account.
            </p>

            <h2>5. Attendance and discipline</h2>
            <ul>
              <li>Students are expected to attend at least 80% of all classes in a term.</li>
              <li>Saturday weekly tests are compulsory. Missed tests may be written at the next available session.</li>
              <li>Parents are notified by WhatsApp if a student misses three consecutive classes.</li>
              <li>Disruptive behaviour, copying in tests, or disrespectful conduct may lead to suspension or expulsion at our sole discretion. Fees for the remaining term are not refundable in such cases.</li>
            </ul>

            <h2>6. Faculty and curriculum</h2>
            <p>
              We make best efforts to keep the same faculty teaching a batch for the full academic year. We reserve the right to substitute a faculty member if needed due to illness, leave or operational reasons. The substitute will hold the same qualification and seniority for that subject.
            </p>

            <h2>7. Use of images and content</h2>
            <p>
              Photographs from classroom activities, batch sessions, parent meetings or results may be used on our website, social channels and printed materials. Names of toppers are published with the consent of the parent or guardian. If you wish to opt out, please write to us at excellentstudentsacademy1@gmail.com and we will remove your details within 10 working days.
            </p>

            <h2>8. Intellectual property</h2>
            <p>
              All notes, mock papers, recorded classes and study material provided by ESA remain the property of Excellent Students&apos; Academy. They are for personal use of the enrolled student and may not be copied, redistributed or uploaded to third-party sites.
            </p>

            <h2>9. Liability</h2>
            <p>
              ESA is responsible for delivering coaching as agreed at enrolment. We are not liable for board exam results, college admissions or any third-party outcomes. Parents are responsible for the safe transit of their child to and from the centre.
            </p>

            <h2>10. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. The updated terms will be posted on this page with a fresh &ldquo;last updated&rdquo; date. Continued enrolment after a change means you accept the revised terms.
            </p>

            <h2>11. Contact us</h2>
            <p>
              For any question about these terms please write to us at <a href="mailto:excellentstudentsacademy1@gmail.com">excellentstudentsacademy1@gmail.com</a> or call <a href="tel:+919458012793">+91 94580 12793</a>. You can also visit us at C7/72, 2nd Floor, Sector 7, Rohini, New Delhi 110085.
            </p>
          </article>
        </Container>
      </section>
    </div>
  );
}
