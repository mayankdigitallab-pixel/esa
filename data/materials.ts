export type MaterialGroup = "primary" | "middle" | "board" | "senior";

export type ClassMaterial = {
  classNum: number;
  label: string;
  slug: string;
  group: MaterialGroup;
  description: string;
  subjects: string[];
  driveUrl: string;
};

const PLACEHOLDER_DRIVE = "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID";

export const classMaterials: ClassMaterial[] = [
  {
    classNum: 1,
    label: "Class 1",
    slug: "class-1",
    group: "primary",
    description: "Reading drills, Math basics and EVS worksheets for early learners.",
    subjects: ["Mathematics", "English", "Hindi", "EVS"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 2,
    label: "Class 2",
    slug: "class-2",
    group: "primary",
    description: "Concept worksheets, handwriting practice and weekly revision sheets.",
    subjects: ["Mathematics", "English", "Hindi", "EVS"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 3,
    label: "Class 3",
    slug: "class-3",
    group: "primary",
    description: "Chapter notes, practice questions and reading comprehension PDFs.",
    subjects: ["Mathematics", "English", "Hindi", "EVS", "Computer"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 4,
    label: "Class 4",
    slug: "class-4",
    group: "primary",
    description: "Topic-wise worksheets, mental math drills and revision notes.",
    subjects: ["Mathematics", "English", "Hindi", "EVS", "Computer"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 5,
    label: "Class 5",
    slug: "class-5",
    group: "primary",
    description: "End-of-primary practice papers, MCQ packs and chapter summaries.",
    subjects: ["Mathematics", "English", "Hindi", "EVS", "Computer"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 6,
    label: "Class 6",
    slug: "class-6",
    group: "middle",
    description: "NCERT-aligned chapter notes, weekly test papers and concept maps.",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 7,
    label: "Class 7",
    slug: "class-7",
    group: "middle",
    description: "Detailed chapter PDFs, formula sheets and self-evaluation worksheets.",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 8,
    label: "Class 8",
    slug: "class-8",
    group: "middle",
    description: "Concept notes, mock papers and chapter-end MCQ practice sets.",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 9,
    label: "Class 9",
    slug: "class-9",
    group: "board",
    description: "Board-pattern question banks, sample papers and chapter summaries.",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 10,
    label: "Class 10",
    slug: "class-10",
    group: "board",
    description: "CBSE previous year papers, full revision notes and mock test PDFs.",
    subjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 11,
    label: "Class 11",
    slug: "class-11",
    group: "senior",
    description: "Stream-wise notes (PCM / PCB / Commerce), assignments and test papers.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accounts", "Business Studies", "Economics", "English"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
  {
    classNum: 12,
    label: "Class 12",
    slug: "class-12",
    group: "senior",
    description: "Board prep papers, previous year solutions, formula sheets and revision packs.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Accounts", "Business Studies", "Economics", "English"],
    driveUrl: PLACEHOLDER_DRIVE,
  },
];

export type MaterialGroupMeta = {
  id: MaterialGroup;
  title: string;
  subtitle: string;
  range: string;
  accent: "teal" | "red" | "ink" | "amber";
};

export const materialGroups: MaterialGroupMeta[] = [
  {
    id: "primary",
    title: "Foundation",
    subtitle: "Early-years worksheets and reading drills.",
    range: "Classes 1 to 5",
    accent: "teal",
  },
  {
    id: "middle",
    title: "Middle School",
    subtitle: "NCERT notes, weekly tests and concept maps.",
    range: "Classes 6 to 8",
    accent: "amber",
  },
  {
    id: "board",
    title: "Board Prep",
    subtitle: "Sample papers, revision notes and mock tests.",
    range: "Classes 9 and 10",
    accent: "red",
  },
  {
    id: "senior",
    title: "Senior Secondary",
    subtitle: "Stream-wise notes, board papers and revision packs.",
    range: "Classes 11 and 12",
    accent: "ink",
  },
];
