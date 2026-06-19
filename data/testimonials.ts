export type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ritu Sharma",
    role: "Class 10 Student",
    rating: 5,
    text: "I'm so grateful for the support I received at Excellent Students' Academy. It changed my approach to studies. The teachers explain everything so clearly that learning actually feels fun.",
  },
  {
    name: "Nandini Verma",
    role: "Class 12 Student",
    rating: 5,
    text: "The teachers genuinely care about our success and it shows. I have become far more disciplined in my studies and my marks have improved a lot in the last two terms.",
  },
  {
    name: "Lakshay Bhardwaj",
    role: "Class 11 Student",
    rating: 5,
    text: "The teaching methods at ESA helped me grasp difficult topics with ease. Weekly tests forced me to revise on time. By board exams I was already comfortable with the full syllabus.",
  },
  {
    name: "Priya Anand",
    role: "Parent of Class 8 Student",
    rating: 5,
    text: "The monthly meeting with teachers is what sold me. As a parent I always know how my child is doing, what is weak, what is improving. The fee is fair and the attention is genuine.",
  },
  {
    name: "Rohit Yadav",
    role: "Class 10 Student",
    rating: 5,
    text: "I joined for the demo class and never left. Maths used to scare me but the way it is explained here, even the toughest chapter feels like a puzzle I can solve. Highly recommend.",
  },
  {
    name: "Mrs. Sunita Gupta",
    role: "Parent of Class 5 Student",
    rating: 5,
    text: "My daughter was struggling with Hindi reading. After three months at ESA her confidence has changed completely. The faculty knows how to handle young children with patience.",
  },
];
