export type Program = {
  slug: string;
  label: string;
  grades: string;
  description: string;
  highlights: string[];
  subjects: string[];
  schedule: string;
  feeRange: string;
};

export const programs: Program[] = [
  {
    slug: "grades-1-5",
    label: "Foundation",
    grades: "Classes 1 to 5",
    description:
      "Concept-building tuition for young learners. Strong basics in Math, English and EVS with friendly, patient mentors who turn homework time into curiosity.",
    highlights: [
      "Small class size, individual attention",
      "Weekly homework + concept revision",
      "Handwriting and reading drills",
      "Monthly progress note to parents",
    ],
    subjects: ["Mathematics", "English", "Hindi", "EVS", "Computer"],
    schedule: "Mon to Sat | 4:00 PM to 6:30 PM batches",
    feeRange: "Nominal monthly fee | Contact for details",
  },
  {
    slug: "grades-6-8",
    label: "Middle School",
    grades: "Classes 6 to 8",
    description:
      "Structured coaching for middle-school students. Builds the bridge from primary basics to high-school rigour, with weekly tests and concept clarity in Math, Science and SST.",
    highlights: [
      "All board curricula: CBSE, ICSE, State",
      "Weekly tests + monthly assessments",
      "Doubt clearing sessions on Saturday",
      "Olympiad preparation track on request",
    ],
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"],
    schedule: "Mon to Sat | 4:30 PM to 7:30 PM batches",
    feeRange: "Nominal monthly fee | Contact for details",
  },
  {
    slug: "grades-9-10",
    label: "Board Prep",
    grades: "Classes 9 and 10",
    description:
      "Board exam preparation designed around the CBSE pattern. Chapter-wise concept drills, previous-year question solving and weekly chapter tests under exam conditions.",
    highlights: [
      "Full CBSE syllabus coverage by January",
      "10+ previous year papers practice",
      "Weekly chapter tests + monthly mock exams",
      "Personal report after every mock test",
    ],
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"],
    schedule: "Mon to Sat | 5:00 PM to 8:30 PM batches",
    feeRange: "Nominal monthly fee | Contact for details",
  },
  {
    slug: "grades-11-12",
    label: "Senior Secondary",
    grades: "Classes 11 and 12",
    description:
      "Stream-wise coaching for Science, Commerce and Arts. Board scoring + competitive foundation in one batch. Taught by senior faculty with proven board-result track records.",
    highlights: [
      "Science (PCM / PCB), Commerce, Arts streams",
      "JEE / NEET foundation for Science students",
      "Term-1 and Term-2 mock exams",
      "Doubt classes till exam week",
    ],
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accounts", "Business Studies", "Economics", "English"],
    schedule: "Mon to Sat | 6:00 PM to 9:00 PM batches",
    feeRange: "Stream-based fee | Contact for details",
  },
];

export const subjects = [
  { name: "Mathematics", grades: "Class 1 - 12" },
  { name: "Science (PCB / PCM)", grades: "Class 6 - 12" },
  { name: "Social Science", grades: "Class 6 - 10" },
  { name: "English", grades: "Class 1 - 12" },
  { name: "Hindi", grades: "Class 1 - 12" },
  { name: "Sanskrit", grades: "Class 6 - 10" },
  { name: "Accountancy", grades: "Class 11 - 12" },
  { name: "Business Studies", grades: "Class 11 - 12" },
  { name: "Economics", grades: "Class 11 - 12" },
  { name: "Computer Science", grades: "Class 1 - 12" },
  { name: "Physics", grades: "Class 11 - 12" },
  { name: "Chemistry", grades: "Class 11 - 12" },
];
