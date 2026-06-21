export type Topper = {
  name: string;
  grade?: string;
  marks: string;
  stream?: string;
  school?: string;
  quote?: string;
  image: string;
};

export const toppers: Topper[] = [
  {
    name: "Anushka",
    marks: "95%",
    school: "Vidya Bharti Public School",
    image: "/students/anushka.jpg",
  },
  {
    name: "Kashvi",
    marks: "90%",
    school: "Ryan International School",
    image: "/students/kashvi.jpg",
  },
  {
    name: "Shubh",
    marks: "86%",
    school: "Mount Abu Public School",
    image: "/students/shubh.jpg",
  },
  {
    name: "Saksham",
    marks: "83%",
    school: "Bal Bharti Public School",
    image: "/students/saksham.jpg",
  },
  {
    name: "Rishabh",
    marks: "82%",
    school: "Crescent Public School",
    image: "/students/rishabh.jpg",
  },
];

export const resultsStats = [
  { label: "Top score", value: "95%" },
  { label: "Above 85%", value: "3 of 5" },
  { label: "Pass percentage", value: "100%" },
  { label: "Years coaching", value: "9+" },
];
