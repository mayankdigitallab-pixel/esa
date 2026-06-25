export type Testimonial = {
  name: string;
  /** e.g. "Class 12 Parent", "Class 10 Student" */
  role: string;
  text: string;
  rating: number;
  /** Optional reviewer photo path (under /public). */
  photo?: string;
  /** e.g. "Google Reviews", "Parent feedback form". Used as a credibility label. */
  source?: string;
};

// TODO: replace these with verified Google Reviews / signed parent feedback.
// The current entries are placeholder copy carried over from initial site setup;
// they read as generic and should be swapped for real, attributable testimonials.
// Schema supports `photo` and `source` for richer reviews (per P4.13).
export const testimonials: Testimonial[] = [
  {
    name: "Sneha Garg",
    role: "Class 10 · 89% · Himalyan Public School",
    rating: 5,
    photo: "/students/sneha-garg.jpg",
    source: "Student review",
    text: "I am extremely grateful to this study academy for playing a significant role in my academic success. The teachers are highly knowledgeable, supportive, and always ready to clear doubts. Their way of explaining concepts is simple and effective, which helped me build a strong foundation in every subject. Regular tests, assignments, and personal guidance kept me motivated and disciplined throughout my studies.\n\nWith the constant support and encouragement of the faculty, I scored 89% in my Class 10 board examinations. The academy not only helped me achieve good marks but also improved my confidence and problem-solving skills.\n\nI am especially proud to share that I secured the top position in BCA 1st semester, and a major credit for this achievement goes to the excellent teaching and continuous motivation provided by the academy. The study material, doubt sessions, and friendly learning environment made a huge difference in my academic journey.\n\nI sincerely thank all the teachers and staff members for their dedication and support. I would highly recommend this academy to every student who is looking for quality education, proper guidance, and academic excellence. It has truly been one of the best decisions of my student life.",
  },
  {
    name: "Sahaj",
    role: "Student",
    rating: 5,
    text: "Excellent Students' Academy helped me understand concepts better and score higher in exams!",
  },
  {
    name: "Aryan",
    role: "Student",
    rating: 5,
    text: "The teachers made learning so easy and fun, and now I feel more prepared than ever!",
  },
  {
    name: "Vishank",
    role: "Student",
    rating: 5,
    text: "With the amazing guidance here, I gained confidence and improved my grades significantly!",
  },
  {
    name: "Minal",
    role: "Student",
    rating: 5,
    text: "I struggled with some subjects, but with their support, I turned my weaknesses into strengths!",
  },
  {
    name: "Gunidhi",
    role: "Student",
    rating: 5,
    text: "Thanks to this academy, I started enjoying studies and performing much better in school!",
  },
  {
    name: "Jasprit",
    role: "Student",
    rating: 5,
    text: "I never thought I could improve this much, but the academy's coaching made it possible!",
  },
  {
    name: "Radhika",
    role: "Student",
    rating: 5,
    text: "The personalized attention I got here really helped me excel in my exams!",
  },
  {
    name: "Vanshika",
    role: "Student",
    rating: 5,
    text: "This academy gave me the motivation and support I needed to do well in all subjects!",
  },
  {
    name: "Chandni Malhotra",
    role: "Student",
    rating: 5,
    text: "The teachers here are the best! They made learning so much easier for me!",
  },
];
