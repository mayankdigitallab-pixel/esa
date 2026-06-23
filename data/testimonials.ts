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
