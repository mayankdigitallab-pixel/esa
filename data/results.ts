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

export const resultsStats = [
  { label: "Top score · 2026", value: "95%" },
  { label: "Above 85% · 2026", value: "4 of 8" },
  { label: "Pass rate · 2026", value: "100%" },
  { label: "Operating in Rohini", value: "Since 2015" },
];
