export type Topper = {
  name: string;
  grade: string;
  marks: string;
  stream?: string;
  quote?: string;
  image: string;
};

export const toppers: Topper[] = [
  {
    name: "Ayush Goel",
    grade: "Class 12 CBSE",
    marks: "96.4%",
    stream: "Science (PCM)",
    quote: "Weekly tests at ESA prepared me for the real board pressure.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sneha Khanna",
    grade: "Class 12 CBSE",
    marks: "95.2%",
    stream: "Commerce",
    quote: "Accountancy used to terrify me. Now it's my favourite subject.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aditya Singh",
    grade: "Class 10 CBSE",
    marks: "94.8%",
    quote: "Doubt sessions on Saturday made all the difference for Math.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Riya Malhotra",
    grade: "Class 10 CBSE",
    marks: "93.6%",
    quote: "Mock tests every weekend trained me to manage exam time.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Devansh Arora",
    grade: "Class 12 CBSE",
    marks: "92.1%",
    stream: "Science (PCB)",
    quote: "Biology diagrams the way Sir teaches stay in your head forever.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tanya Bhatia",
    grade: "Class 10 CBSE",
    marks: "91.4%",
    quote: "From scoring 65% in Class 9 to 91% in Class 10 boards.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
];

export const resultsStats = [
  { label: "Average board score", value: "84%" },
  { label: "Students above 90%", value: "32+" },
  { label: "Pass percentage", value: "100%" },
  { label: "Years coaching", value: "9+" },
];
