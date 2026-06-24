export type HeroSlide = {
  eyebrow: string;
  headline: string;
  accentWord: string;
  accentColor: "teal" | "red";
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  /** Apply an extra-dark scrim for busy/bright photos (e.g. signboards). */
  heavyOverlay?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Coaching Institute · Rohini Sector 7",
    headline: "Coaching in Rohini where ambition meets",
    accentWord: "discipline.",
    accentColor: "red",
    description:
      "Since 2015, Excellent Students' Academy has been the trusted coaching institute for Class 1 to 12 students across Rohini, Pitampura and Shalimar Bagh.",
    primaryCta: { label: "Book Free Demo Class", href: "/contact#enquiry" },
    secondaryCta: { label: "Explore Programs", href: "/programs" },
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "Sector 7 Rohini · Class I to XII",
    headline: "Find the bright yellow board on",
    accentWord: "Sector 7's main road.",
    accentColor: "teal",
    description:
      "C7/72, 2nd Floor, Sector 7, Rohini. Two minutes from the Rohini West metro side. Walk in any working day between 11 AM and 1 PM to see a live batch.",
    primaryCta: { label: "Visit The Centre", href: "/contact" },
    secondaryCta: { label: "Get Directions", href: "/contact" },
    image: "/gallery/g30.jpg",
    heavyOverlay: true,
  },
  {
    eyebrow: "11 Mentors · Postgrad / B.Tech",
    headline: "The teachers your child",
    accentWord: "remembers.",
    accentColor: "teal",
    description:
      "Eleven full-time mentors. Six-plus years of average classroom experience. Every birthday cut at the centre, every Teachers' Day banner — this is the team behind ESA.",
    primaryCta: { label: "Meet The Faculty", href: "/faculty" },
    secondaryCta: { label: "See Gallery", href: "/gallery" },
    image: "/gallery/g22.jpg",
  },
  {
    eyebrow: "Class 11 & 12 · Science · Commerce",
    headline: "Stream-ready coaching for Class 11 and",
    accentWord: "Class 12 boards.",
    accentColor: "teal",
    description:
      "Subject-wise batches in Physics, Chemistry, Math, Biology, Accountancy, Business Studies and Economics. Weekly tests, mock papers, full syllabus revision.",
    primaryCta: { label: "View Programs", href: "/programs#grades-11-12" },
    secondaryCta: { label: "Meet Faculty", href: "/faculty" },
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "7-Day Free Demo · No Commitment",
    headline: "Sit through 7 days of real batches.",
    accentWord: "Enrol only when convinced.",
    accentColor: "red",
    description:
      "No special demo classes. No registration fee. Meet the actual faculty teaching your batch. Decide after seeing the teaching first-hand.",
    primaryCta: { label: "Book Free Demo", href: "/contact#enquiry" },
    secondaryCta: { label: "How It Works", href: "/about" },
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "CBSE Class 10 Board Preparation",
    headline: "Class 10 board coaching that turns hard",
    accentWord: "work into top scores.",
    accentColor: "teal",
    description:
      "All five subjects with chapter-wise mastery, weekly Saturday tests, monthly mock papers and detailed WhatsApp scorecards to parents.",
    primaryCta: { label: "View Class 10 Plan", href: "/programs#grades-9-10" },
    secondaryCta: { label: "See Results", href: "/results" },
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "Foundation Coaching · Class 1 to 5",
    headline: "Build a strong foundation early. The",
    accentWord: "future builds on it.",
    accentColor: "teal",
    description:
      "Engaging classes for our youngest learners. Concept clarity, handwriting, mental math, reading habit. Small batches and gentle discipline.",
    primaryCta: { label: "Explore Foundation Program", href: "/programs#grades-1-5" },
    secondaryCta: { label: "Book Free Demo", href: "/contact#enquiry" },
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "Weekly Tests · Monthly Reviews",
    headline: "Progress that is",
    accentWord: "tracked, not assumed.",
    accentColor: "red",
    description:
      "Saturday test day, Monday WhatsApp scorecards, monthly parent meetings, quarterly progress reports. You always know where your child stands.",
    primaryCta: { label: "How We Track Progress", href: "/about" },
    secondaryCta: { label: "Book Free Demo", href: "/contact#enquiry" },
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "Crash Courses · Board Revision",
    headline: "Last-mile revision crash courses for",
    accentWord: "CBSE and ICSE boards.",
    accentColor: "teal",
    description:
      "Intensive 6 to 8 week revision programs before boards. Full syllabus, mock papers, error analysis, focused doubt clearing. Limited seats per batch.",
    primaryCta: { label: "Crash Course Details", href: "/programs#crash" },
    secondaryCta: { label: "Talk To Counsellor", href: "/contact" },
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1920&q=80",
  },
  {
    eyebrow: "Home Tuition Across North Delhi",
    headline: "Home tuition in Rohini, Pitampura,",
    accentWord: "Shalimar Bagh and nearby.",
    accentColor: "red",
    description:
      "Same ESA faculty, same teaching method, in the comfort of your home. Available across most North Delhi localities we serve.",
    primaryCta: { label: "Check Your Area", href: "/areas/rohini-sector-7" },
    secondaryCta: { label: "WhatsApp Us", href: "/contact" },
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80",
  },
];
