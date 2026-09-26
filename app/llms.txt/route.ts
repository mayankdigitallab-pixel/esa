import { blogPosts } from "@/data/blog";
import { nearbyAreas } from "@/data/areas";
import { centres } from "@/data/centres";
import { classes } from "@/data/classes";
import { siteConfig } from "@/data/site";

// llms.txt (https://llmstxt.org) - a plain-text map of the site for AI answer
// engines. Generated from the same data files as the pages and the sitemap,
// so new blog posts, classes and areas appear here automatically.
export const dynamic = "force-static";

const BASE = "https://www.theesa.in";

export function GET() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  const centreLines = centres.map((c) => {
    const lead = `${c.inCharge} (${c.inChargeRole})`;
    const areas = c.locality?.areas.map((a) => a.name).join(", ");
    return `- [${c.name}](${BASE}${c.landingPath}): ${c.fullAddress}. Phone/WhatsApp ${c.phoneDisplay}. Headed by ${lead}.${areas ? ` Serves ${areas}.` : ""}`;
  });

  const blogLines = posts.map((p) => {
    const summary = p.takeaways?.length ? p.takeaways.join(" ") : p.description;
    return `- [${p.seoTitle ?? p.title}](${BASE}/blog/${p.slug}) (${p.category}, ${p.date}): ${summary}`;
  });

  const body = `# ${siteConfig.name} (ESA)

> School-tuition and coaching institute for Class 1 to 12 (CBSE, ICSE and State Board; UP Board at Lucknow) with three centres: Rohini Sector 7 and Rohini Sector 15 in North-West Delhi, and Thakurganj in Lucknow. Founded in 2015. ESA coaches for school and board exams only.

Website: ${BASE} | Email: ${siteConfig.email}

## Key facts

- Founded in 2015 in Rohini Sector 7, New Delhi, by Mr. Chandan Prajapati, who still teaches Class 11-12 Mathematics at the flagship centre
- Three centres: Rohini Sector 7 (flagship), Rohini Sector 15 (Delhi) and Thakurganj (Lucknow)
- Classes 1 to 12; boards: CBSE, ICSE, State Board, and UP Board at Lucknow
- Subjects: Mathematics, Science, Social Science, English, Hindi, Sanskrit (Class 6-10); Physics, Chemistry, Biology, Accountancy, Business Studies, Economics, Computer Science (Class 11-12); Science, Commerce and Arts streams
- ESA does not offer competitive-exam coaching (SSC, UGC NET, JEE, NEET and similar) - only school and board exam preparation
- CBSE 2026 results: 84% average board score, 32 students above 90%, 100% pass rate
- 500+ students mentored since 2015
- Weekly Saturday chapter test, corrected within 48 hours, scorecard sent to parents on WhatsApp
- Monthly one-on-one parent meeting with the subject teacher
- Batches capped at around 18 students; faculty stay with the same batch for years
- Faculty-written chapter notes for Class 8 to 12
- 7 days of free demo classes in the real batch, no registration fee
- Home tuition by ESA faculty across Rohini, Pitampura, Shalimar Bagh and nearby areas
- Lucknow centre teaches bilingually: concepts in Hindi, answer-writing in English
- Hours: Monday to Saturday, 10:00 AM to 8:30 PM; Sunday closed

## Centres

${centreLines.join("\n")}
- [All centres](${BASE}/centres)

## Classes

${classes.map((c) => `- [${c.label} coaching](${BASE}/classes/${c.slug}): ${c.subjects.join(", ")}`).join("\n")}
- [All classes](${BASE}/classes) | [Programs](${BASE}/programs) (Foundation 1-5, Middle School 6-8, Board Prep 9-10, Senior Secondary 11-12, Crash Courses)

## Key pages

- [About](${BASE}/about): Story, teaching method and timeline since 2015
- [Faculty](${BASE}/faculty): Subject-specialist teachers
- [Results](${BASE}/results): CBSE board results and toppers
- [Timetable](${BASE}/timetable): Batch timings for Sector 7 and Sector 15
- [Study materials](${BASE}/materials): Class-wise notes and sample papers
- [FAQ](${BASE}/faq): Demo classes, fees, timings, admission
- [Contact](${BASE}/contact): Enquiry form, phone and WhatsApp for every centre

## Blog

${blogLines.join("\n")}

## Areas served (Delhi)

${nearbyAreas.map((a) => `[${a.name}](${BASE}/areas/${a.slug})`).join(", ")}

## Frequently asked questions

### Which classes and courses does ESA teach?
Class 1 to 12 for CBSE, ICSE and State Boards (plus UP Board in Lucknow), across all main school subjects and the Science, Commerce and Arts streams in Class 11-12. ESA prepares students for school and board exams only; it does not run SSC, UGC NET, JEE or NEET coaching.

### How does the free demo work?
Students attend up to 7 days of real classes in the batch they would join, with the actual faculty. No registration fee and no commitment.

### How are weekly tests run?
Every Saturday students write a test on the chapter taught that week. Papers are corrected within 48 hours and parents get a scorecard on WhatsApp.

### What are the fees?
Monthly fees are kept nominal and vary by centre, class and subjects. Contact the centre on WhatsApp or phone for the current fee.

### Can a student join mid-year?
Yes, if the batch has room. A diagnostic test identifies gaps and the faculty plan a catch-up in the first two weeks.

## Contact

${centres.map((c) => `- ${c.shortName}: Call/WhatsApp ${c.phoneDisplay}`).join("\n")}
- Email: ${siteConfig.email}
- Book a free demo: ${BASE}/contact#enquiry
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
