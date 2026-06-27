export type Topper = {
  name: string;
  grade?: string;
  marks: string;
  stream?: string;
  school?: string;
  quote?: string;
  image: string;
};

/**
 * Recent CBSE batch results. Sorted by marks descending.
 *
 * TODO (Mayank): drop the new photos into /public/students/ with these exact filenames:
 *   - /public/students/ananya.jpg
 *   - /public/students/lakshit.jpg
 *   - /public/students/shrishti.jpg
 * Until each photo file is present, that card will render a broken-image placeholder.
 */
export const toppers: Topper[] = [
  {
    name: "Anushka",
    marks: "95%",
    school: "Vidya Bharti Public School",
    image: "/students/anushka.jpg",
  },
  {
    name: "Ananya",
    marks: "94%",
    school: "Vishal Bharti Public School",
    image: "/students/ananya.jpg",
  },
  {
    name: "Kashvi",
    marks: "90%",
    school: "Ryan International School",
    image: "/students/kashvi.jpg",
  },
  {
    name: "Aditya Antil",
    marks: "90%",
    school: "Delhi International Public School",
    image: "/students/aditya-antil.jpg",
  },
  {
    name: "Sneha Garg",
    grade: "Class 10",
    marks: "89%",
    school: "Himalyan Public School",
    image: "/students/sneha-garg.jpg",
  },
  {
    name: "Shubh",
    marks: "86%",
    school: "Mount Abu Public School",
    image: "/students/shubh.jpg",
  },
  {
    name: "Lakshit",
    marks: "84%",
    school: "Prestige Convent School",
    image: "/students/lakshit.jpg",
  },
  {
    name: "Saksham",
    marks: "83%",
    school: "Bal Bharti Public School",
    image: "/students/saksham.jpg",
  },
  {
    name: "Vanshika",
    marks: "83%",
    school: "CRPF School",
    image: "/students/vanshika.jpg",
  },
  {
    name: "Shrishti",
    marks: "83%",
    school: "Sarvodaya School",
    image: "/students/shrishti.jpg",
  },
  {
    name: "Rishabh",
    marks: "82%",
    school: "Crescent Public School",
    image: "/students/rishabh.jpg",
  },
];

/**
 * Subject toppers - students who scored exceptionally high in a single subject.
 * Rendered as a separate section on the results page so the faculty link is visible.
 */
export type SubjectTopper = Topper & {
  subject: string;
  facultyName: string;
};

export const subjectToppers: SubjectTopper[] = [
  {
    name: "Atharv",
    marks: "100/100",
    subject: "Mathematics",
    facultyName: "Mr. Chandan Prajapati",
    school: "Mathematics · Mr. Chandan Prajapati",
    image: "/students/atharv.jpg",
  },
  {
    name: "Shudhanshu",
    marks: "95/100",
    subject: "Mathematics",
    facultyName: "Mr. Chandan Prajapati",
    school: "Mathematics · Mr. Chandan Prajapati",
    image: "/students/shudhanshu.jpg",
  },
];

export const resultsStats = [
  { label: "Top score · 2026", value: "95%" },
  { label: "Above 85% · 2026", value: "6 of 11" },
  { label: "Pass rate · 2026", value: "100%" },
  { label: "Operating in Rohini", value: "Since 2015" },
];
