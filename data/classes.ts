export type ClassInfo = {
  slug: string;
  number: number;
  label: string;
  bandLabel: string;
  programSlug: string;
  whoFor: string;
  boardContext: string;
  subjects: string[];
  teachingApproach: string;
  testsAndAssessment: string;
  doubtSupport: string;
  outcomes: string;
  faqs: { question: string; answer: string }[];
};

const middleSchoolSubjects = ["Mathematics", "Science", "Social Science", "English", "Hindi", "Sanskrit"];
const seniorSubjectsScience = ["Physics", "Chemistry", "Mathematics", "Biology", "English"];
const seniorSubjectsCommerce = ["Accountancy", "Business Studies", "Economics", "Mathematics", "English"];

export const classes: ClassInfo[] = [
  {
    slug: "class-6",
    number: 6,
    label: "Class 6",
    bandLabel: "Middle School",
    programSlug: "grades-6-8",
    whoFor:
      "Students moving from primary school into subject-wise learning for the first time - separate Maths, Science and Social Science teachers instead of one class teacher for everything.",
    boardContext:
      "Follows the CBSE, ICSE and State Board curricula for Class 6, with NCERT as the base text for Maths, Science and Social Science.",
    subjects: middleSchoolSubjects,
    teachingApproach:
      "Mr. Rahul leads Class 6 Mathematics and Ms. Shruti or Mr. Amit lead Science, using an explain-demonstrate-practice-retest method so concepts are checked the same week they are taught, not just before exams.",
    testsAndAssessment:
      "Weekly Saturday chapter tests on whatever was taught that week, corrected within 48 hours with a scorecard sent to parents by Monday.",
    doubtSupport:
      "Doubt-clearing sessions run through the week; the same faculty member who teaches the batch also handles doubts, so nothing gets lost in a handover.",
    outcomes:
      "A strong Class 6 foundation is what makes Class 9-10 board prep manageable later - our faculty flag gaps early rather than letting them carry forward for years.",
    faqs: [
      {
        question: "What subjects does ESA teach in Class 6?",
        answer: "Mathematics, Science, Social Science, English, Hindi and Sanskrit, each with a dedicated subject teacher rather than one generalist covering everything.",
      },
      {
        question: "Is Class 6 coaching necessary if my child is doing fine at school?",
        answer: "Class 6 is when subjects first split into Maths, Science and Social Science separately. Many parents join at this stage specifically to build strong subject-wise habits before the syllabus gets harder in Class 7-8.",
      },
      {
        question: "How are Class 6 batches tested?",
        answer: "Every Saturday, with a chapter test on that week's teaching, corrected within 48 hours and a scorecard shared with parents by Monday morning.",
      },
      {
        question: "Can I see a Class 6 batch before enrolling?",
        answer: "Yes - 7 days of free demo classes in the actual batch your child would join, no registration fee.",
      },
    ],
  },
  {
    slug: "class-7",
    number: 7,
    label: "Class 7",
    bandLabel: "Middle School",
    programSlug: "grades-6-8",
    whoFor:
      "Students consolidating the subject-wise habits started in Class 6, with syllabus difficulty stepping up across Maths and Science.",
    boardContext:
      "CBSE, ICSE and State Board curricula for Class 7, NCERT-aligned for Maths, Science and Social Science.",
    subjects: middleSchoolSubjects,
    teachingApproach:
      "Mr. Rahul continues on Mathematics and Ms. Shruti or Mr. Amit on Science through Class 7, keeping the same explain-demonstrate-practice-retest structure so students don't face a new teaching style every year.",
    testsAndAssessment:
      "Weekly Saturday chapter tests, corrected within 48 hours, scorecards shared with parents by Monday.",
    doubtSupport:
      "Doubt sessions run through the week with the same subject teacher who takes the regular class.",
    outcomes:
      "Class 7 students who stay consistent with the weekly test routine typically enter Class 8-9 without major concept gaps in Maths and Science.",
    faqs: [
      {
        question: "What subjects does ESA teach in Class 7?",
        answer: "Mathematics, Science, Social Science, English, Hindi and Sanskrit with dedicated subject faculty for each.",
      },
      {
        question: "Does the faculty change between Class 6 and Class 7?",
        answer: "No - the same subject teachers generally continue with a batch as it moves up, so students don't need to adjust to a new teaching style every year.",
      },
      {
        question: "How much homework or testing load is there in Class 7?",
        answer: "One chapter test every Saturday on the week's teaching, plus regular class work - not an overwhelming daily homework load.",
      },
      {
        question: "Can my Class 7 child join mid-year?",
        answer: "Yes. A short diagnostic test helps faculty identify gaps and build a catch-up plan in the first two weeks.",
      },
    ],
  },
  {
    slug: "class-8",
    number: 8,
    label: "Class 8",
    bandLabel: "Middle School",
    programSlug: "grades-6-8",
    whoFor:
      "Students in the last year before board-pattern coaching begins in Class 9 - the year to lock in strong fundamentals across Maths and Science.",
    boardContext:
      "CBSE, ICSE and State Board curricula for Class 8, building directly into the Class 9-10 board syllabus.",
    subjects: middleSchoolSubjects,
    teachingApproach:
      "Faculty-prepared notes begin from Class 8 onward. Mr. Rahul and the Science team continue the same weekly-test teaching method used since Class 6.",
    testsAndAssessment:
      "Weekly Saturday chapter tests, corrected within 48 hours, monthly progress notes shared with parents at the first-Saturday parent meeting.",
    doubtSupport:
      "Doubt sessions through the week, plus extra revision before term exams.",
    outcomes:
      "Class 8 is the last checkpoint before board-style coaching - students who finish it with solid Maths and Science fundamentals move into Class 9 board prep without a difficult transition.",
    faqs: [
      {
        question: "What subjects does ESA teach in Class 8?",
        answer: "Mathematics, Science, Social Science, English, Hindi and Sanskrit, each with a dedicated subject teacher.",
      },
      {
        question: "Do Class 8 students get printed or written notes?",
        answer: "Yes - faculty-prepared notes are provided from Class 8 through Class 12.",
      },
      {
        question: "Why is Class 8 considered an important year at ESA?",
        answer: "It is the last year before board-pattern Class 9-10 coaching begins, so we focus on closing any remaining Maths and Science gaps before the syllabus gets harder.",
      },
      {
        question: "Can I book a free demo for Class 8?",
        answer: "Yes - 7 days of free demo classes in the actual batch, no registration fee.",
      },
    ],
  },
  {
    slug: "class-9",
    number: 9,
    label: "Class 9",
    bandLabel: "Board Prep",
    programSlug: "grades-9-10",
    whoFor:
      "Students starting the two-year CBSE board cycle - Class 9 sets the syllabus base that Class 10 board exams are built on.",
    boardContext:
      "CBSE board curriculum (ICSE and State Board also supported), with an emphasis on building the full concept base before Class 10 revision begins.",
    subjects: middleSchoolSubjects,
    teachingApproach:
      "Subject specialists lead each area - Mr. Rahul or Mr. Amit for Maths/Science, Mr. Rajesh for English - with full syllabus coverage targeted by January rather than rushed in the final months.",
    testsAndAssessment:
      "Weekly Saturday chapter tests plus monthly mock exams under board-pattern conditions, with previous-year questions worked into practice from Class 9 itself.",
    doubtSupport:
      "Daily doubt access with the subject faculty, not just before tests.",
    outcomes:
      "A well-covered Class 9 syllabus is what makes Class 10 board revision realistic instead of a last-minute scramble.",
    faqs: [
      {
        question: "Why does ESA start board-style testing in Class 9, a year before boards?",
        answer: "Class 9 concepts carry directly into the Class 10 board syllabus. Testing and covering the syllabus properly in Class 9 means Class 10 can focus on revision and previous-year papers instead of new teaching under time pressure.",
      },
      {
        question: "What subjects are covered in Class 9?",
        answer: "Mathematics, Science, Social Science, English, Hindi and Sanskrit, each taught by a subject specialist.",
      },
      {
        question: "Does ESA follow only CBSE for Class 9?",
        answer: "CBSE is our primary framework, and we also support ICSE and State Board students in the same batches with board-specific guidance where syllabi differ.",
      },
      {
        question: "How can I check my child's progress in Class 9?",
        answer: "Weekly Saturday test scorecards via WhatsApp, plus a monthly one-on-one parent meeting with the actual subject teacher.",
      },
    ],
  },
  {
    slug: "class-10",
    number: 10,
    label: "Class 10",
    bandLabel: "Board Prep",
    programSlug: "grades-9-10",
    whoFor:
      "Students preparing for their first CBSE board examination - the year our weekly-test system is built around most tightly.",
    boardContext:
      "CBSE Class 10 board examination preparation (ICSE and State Board also supported), full syllabus completion targeted by January.",
    subjects: middleSchoolSubjects,
    teachingApproach:
      "Subject specialists across Maths, Science, Social Science and English, with 10+ previous-year board papers worked through in class, not left for students to attempt alone.",
    testsAndAssessment:
      "Weekly Saturday chapter tests plus monthly full-syllabus mock exams under board exam conditions, each returned with a specific mistake note rather than just a score.",
    doubtSupport:
      "Daily doubt sessions through the final two terms as board exams approach, on top of the regular weekly doubt slots.",
    outcomes:
      "Our most recent CBSE batch averaged 84% with every student passing, and 32 students scored above 90% - built on this same Class 9-10 weekly discipline, not a single exceptional batch.",
    faqs: [
      {
        question: "What is the best coaching option for Class 10 CBSE boards in Rohini?",
        answer: "ESA's Class 10 program combines subject-specialist faculty, weekly Saturday chapter tests, monthly full-syllabus mocks and 10+ previous-year board papers - the same structure behind our recent batch's 84% average score with 32 students above 90%.",
      },
      {
        question: "Which subjects are available for Class 10?",
        answer: "Mathematics, Science, Social Science, English, Hindi and Sanskrit, each with a dedicated subject teacher.",
      },
      {
        question: "Is ESA suitable for CBSE board preparation specifically?",
        answer: "Yes - Class 10 is built entirely around the CBSE board pattern: full syllabus by January, monthly mocks under exam conditions, and previous-year paper practice from the first term.",
      },
      {
        question: "What should parents check before choosing coaching for Class 10?",
        answer: "Batch size, whether faculty stay consistent through the year, how often students are actually tested (not just taught), and whether previous-year papers are worked into regular teaching rather than left for the last month.",
      },
      {
        question: "What are the Class 10 batch timings and how do I enrol?",
        answer: "Batches run Monday to Saturday with class-wise slots shown on our timetable page. Call, WhatsApp or visit for a free 7-day demo before enrolling - no registration fee.",
      },
    ],
  },
  {
    slug: "class-11",
    number: 11,
    label: "Class 11",
    bandLabel: "Senior Secondary",
    programSlug: "grades-11-12",
    whoFor:
      "Students choosing a stream for the first time - Science (PCM or PCB), Commerce or Arts - and building the two-year base for Class 12 boards.",
    boardContext:
      "CBSE Class 11 curriculum across streams, with Science batches also introduced to JEE/NEET-pattern questions alongside board topics.",
    subjects: [...seniorSubjectsScience, ...seniorSubjectsCommerce.filter((s) => !seniorSubjectsScience.includes(s))],
    teachingApproach:
      "Founder Mr. Chandan Prajapati personally teaches Class 11 Mathematics; Mr. Prateek leads Physics, Mr. Amit leads Chemistry, Ms. Faujiya leads Biology, Ms. Sadhana leads Accountancy and Mr. Prateek (Economics) leads Economics - each a subject specialist rather than one teacher covering multiple subjects.",
    testsAndAssessment:
      "Weekly Saturday chapter tests plus Term-1 and Term-2 mock exams, so the testing rhythm from Class 9-10 continues rather than resetting.",
    doubtSupport:
      "Doubt classes through the week with the subject specialist, continuing through exam weeks.",
    outcomes:
      "A properly taught Class 11 is what keeps Class 12 board prep from turning into last-minute catch-up across four to five subjects at once.",
    faqs: [
      {
        question: "Which streams does ESA offer for Class 11?",
        answer: "Science (PCM or PCB), Commerce and Arts, each with subject-specialist faculty rather than one teacher covering the whole stream.",
      },
      {
        question: "Who teaches Class 11 Mathematics?",
        answer: "Our founder, Mr. Chandan Prajapati, personally teaches every Class 11 and 12 Mathematics batch at our Rohini Sector 7 centre.",
      },
      {
        question: "Does Class 11 Science include JEE or NEET preparation?",
        answer: "Yes, layered on top of the board syllabus - the board topics are taught first for concept clarity, then JEE/NEET-pattern practice is added.",
      },
      {
        question: "Can a student switch streams after joining Class 11?",
        answer: "Easiest in the first two to three weeks before batches settle into their syllabus pace - talk to us early if your child is unsure between streams.",
      },
    ],
  },
  {
    slug: "class-12",
    number: 12,
    label: "Class 12",
    bandLabel: "Senior Secondary",
    programSlug: "grades-11-12",
    whoFor:
      "Students in their final CBSE board year across Science (PCM/PCB), Commerce or Arts, balancing board scores with competitive exam prep where relevant.",
    boardContext:
      "CBSE Class 12 board examination preparation across streams, with Science students also continuing JEE/NEET foundation alongside boards.",
    subjects: [...seniorSubjectsScience, ...seniorSubjectsCommerce.filter((s) => !seniorSubjectsScience.includes(s))],
    teachingApproach:
      "Founder Mr. Chandan Prajapati personally teaches Class 12 Mathematics; Mr. Prateek leads Physics, Mr. Amit leads Chemistry, Ms. Faujiya leads Biology, Ms. Sadhana leads Accountancy and Mr. Prateek (Economics) leads Economics - the same specialists who taught the batch in Class 11.",
    testsAndAssessment:
      "Weekly Saturday chapter tests, Term-1 and Term-2 mock exams under board conditions, with doubt classes continuing right up to exam week.",
    doubtSupport:
      "Daily doubt access in the final months before boards, on top of the regular weekly doubt slots.",
    outcomes:
      "Our most recent CBSE batch averaged 84% with every student passing, and 32 students scored above 90% - the outcome of the same weekly discipline carried through from Class 11.",
    faqs: [
      {
        question: "What is the best coaching option near Rohini Sector 7 for Class 12?",
        answer: "ESA's Rohini Sector 7 flagship centre offers Class 12 coaching across Science, Commerce and Arts streams with subject-specialist faculty, weekly Saturday tests and Term-1/Term-2 mocks - the structure behind our recent batch's 84% average score with 32 students above 90%.",
      },
      {
        question: "Which subjects are available for Class 12?",
        answer: "Physics, Chemistry, Mathematics, Biology, Accountancy, Business Studies, Economics and English, depending on stream (Science PCM/PCB, Commerce or Arts).",
      },
      {
        question: "Does ESA continue JEE/NEET prep in Class 12?",
        answer: "Yes, for Science stream students, alongside board preparation - board topics are never skipped in favour of competitive-exam practice.",
      },
      {
        question: "How can a parent reach ESA from Rohini Sector 7?",
        answer: "Our flagship centre is at C7/72, 2nd Floor, Sector 7, Rohini - about 10 minutes' walk from Rohini West Metro. Families from other Rohini sectors and nearby localities also reach us within 10-20 minutes; see our area pages for specific routes.",
      },
      {
        question: "What are the Class 12 batch timings and admission process?",
        answer: "Batches run Monday to Saturday with class and stream-wise slots on our timetable page. Book a free 7-day demo by calling, WhatsApp or visiting the centre - there is no registration fee and no commitment before you decide.",
      },
    ],
  },
];

export const findClass = (slug: string) => classes.find((c) => c.slug === slug);
