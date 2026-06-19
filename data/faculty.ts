export type Faculty = {
  slug: string;
  name: string;
  title: string;
  subjects: string;
  experience: string;
  qualification: string;
  bio: string;
  image: string;
};

export const faculty: Faculty[] = [
  {
    slug: "chandan-prajapati",
    name: "Mr. Chandan Prajapati",
    title: "Founder & Director",
    subjects: "Social Science (Class 9-10), Mathematics (Class 11-12)",
    experience: "9+ years",
    qualification: "B.Tech, Mechanical Engineering",
    bio: "Founder of Excellent Students' Academy. Mentors students through Social Science for Boards and Math for Senior Secondary. Known for breaking down complex topics into simple, exam-ready frameworks.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "math-lead",
    name: "Senior Math Faculty",
    title: "Mathematics Mentor",
    subjects: "Mathematics (Class 6-12)",
    experience: "8+ years",
    qualification: "M.Sc Mathematics",
    bio: "Specialist in board-level Mathematics with a focus on CBSE Class 10 and 12 patterns. Coaches students for both board scoring and JEE foundation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "science-lead",
    name: "Senior Science Faculty",
    title: "Physics & Chemistry Mentor",
    subjects: "Physics, Chemistry (Class 11-12)",
    experience: "10+ years",
    qualification: "M.Sc Physics, B.Ed",
    bio: "Drives the Science stream for Class 11 and 12. Builds conceptual depth alongside problem-solving speed needed for boards plus competitive exams.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "biology-lead",
    name: "Biology Faculty",
    title: "Biology Mentor",
    subjects: "Biology (Class 9-12)",
    experience: "7+ years",
    qualification: "M.Sc Biology",
    bio: "Guides Class 11 and 12 PCB students. NEET foundation classes built around NCERT mastery and diagram-based answer writing.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "english-lead",
    name: "English Faculty",
    title: "English Language Mentor",
    subjects: "English (Class 1-12)",
    experience: "6+ years",
    qualification: "MA English Literature",
    bio: "Reading, writing and grammar drills for primary and middle school. Literature and writing skills coaching for Class 9 onwards.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "commerce-lead",
    name: "Commerce Faculty",
    title: "Commerce Stream Lead",
    subjects: "Accounts, Business Studies, Economics (Class 11-12)",
    experience: "8+ years",
    qualification: "M.Com",
    bio: "Heads the Commerce stream. Mentors students from journal entries in Class 11 through full-balance-sheet questions in Class 12 board papers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
];
