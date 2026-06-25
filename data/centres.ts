export type Centre = {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  pin: string;
  fullAddress: string;
  addressLines: string[];
  inCharge: string;
  inChargeRole: string;
  inChargePhoto?: string;
  inChargeQualification?: string;
  inChargeExperience?: string;
  inChargeBio?: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  mapEmbedUrl: string;
  mapLink: string;
  geo: { lat: string; lng: string };
  photos: string[];
  isFlagship: boolean;
  landingPath?: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
};

export const centres: Centre[] = [
  {
    slug: "rohini-sector-7",
    name: "ESA Rohini Sector 7",
    shortName: "Rohini Sector 7",
    city: "New Delhi",
    state: "Delhi",
    pin: "110085",
    fullAddress: "C7/72, 2nd Floor, Sector 7, Rohini, New Delhi 110085",
    addressLines: ["C7/72, 2nd Floor", "Sector 7, Rohini", "New Delhi 110085"],
    inCharge: "Ms. Mamta",
    inChargeRole: "Centre Incharge",
    inChargePhoto: "/faculty/mamta.jpg",
    inChargeQualification: "Foundation Teacher, ESA",
    inChargeExperience: "Senior faculty",
    inChargeBio:
      "Heads our flagship Rohini Sector 7 centre. Patient, gentle classroom style focused on early reading, writing and number sense for our youngest learners - and centre operations for every batch running here.",
    phone: "+918750663995",
    phoneDisplay: "+91 87506 63995",
    whatsapp: "+918750663995",
    whatsappDisplay: "+91 87506 63995",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=28.706135,77.119802&z=16&output=embed",
    mapLink: "https://maps.google.com/maps?q=28.706135,77.119802&z=17",
    geo: { lat: "28.706135", lng: "77.119802" },
    photos: [],
    isFlagship: true,
    landingPath: "/rohini-sector-7",
    metaTitle: "Coaching in Rohini Sector 7 | ESA Flagship Centre",
    metaDescription:
      "Excellent Students' Academy flagship centre at C7/72, Sector 7, Rohini, New Delhi. Class 1 to 12 CBSE coaching. Operating since 2015, headed by Ms. Mamta.",
    heroImage:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1920&q=80",
    highlights: [
      "Original ESA centre - operating since 2015, two floors of fully AC classrooms",
      "Founder Mr. Chandan Prajapati teaches Class 11-12 Math batches in person here",
      "Foundation classes (1-3) run by Ms. Mamta and a senior junior-class faculty team",
      "10 minute walk from Rohini West Metro - DAV, Vishal Bharti, Mount Abu students nearby",
    ],
    faqs: [
      {
        question: "Where exactly is the ESA Rohini Sector 7 centre?",
        answer:
          "C7/72, 2nd Floor, Sector 7, Rohini, New Delhi 110085 - on the main C-block road. Look for the ESA board on the building.",
      },
      {
        question: "How do I reach the Sector 7 centre from Rohini West Metro?",
        answer:
          "About 10 minutes walking from Rohini West Metro Station (Red Line). Auto-rickshaws from the metro charge around 30-40 rupees. The centre is also a short ride from Rithala and Rohini East stations.",
      },
      {
        question: "Which classes run at Rohini Sector 7?",
        answer:
          "Class 1 to Class 12, all subjects. Foundation (Class 1-5), board prep (Class 6-10), and stream-wise senior secondary (Class 11-12 - Math, Physics, Chemistry, Biology, Accountancy, Economics, English, SST). This is our flagship centre with the widest batch availability.",
      },
      {
        question: "Who teaches Class 11-12 Math here?",
        answer:
          "Our founder Mr. Chandan Prajapati personally takes Class 11 and 12 Mathematics batches at this centre. He has 11 years of board-coaching experience.",
      },
      {
        question: "Are the classrooms AC and is there parking nearby?",
        answer:
          "Yes, all classrooms across both floors are fully AC. Two-wheeler parking is available on the street outside the building. Four-wheeler parking can be found in the C-block lane.",
      },
      {
        question: "Do you offer a free demo class?",
        answer:
          "Yes - 7 days of free demo for any batch. Walk in, sit through the actual class your child will join, meet the faculty, and decide only after. No fees, no commitment.",
      },
    ],
  },
  {
    slug: "rohini-sector-15",
    name: "ESA Rohini Sector 15",
    shortName: "Rohini Sector 15",
    city: "New Delhi",
    state: "Delhi",
    pin: "110089",
    fullAddress: "Sector 15, Rohini, New Delhi 110089",
    addressLines: ["Sector 15, Rohini", "New Delhi 110089"],
    inCharge: "Mr. Dhruv Narayan",
    inChargeRole: "Centre Incharge",
    inChargePhoto: "/faculty/dhruv-narayan.jpg",
    inChargeBio:
      "Heads our Sector 15 Rohini centre. Handles admissions, parent meetings and academic planning for every batch running in Sector 15. Reach him directly during working hours for any concern.",
    phone: "+919458012793",
    phoneDisplay: "+91 94580 12793",
    whatsapp: "+919458012793",
    whatsappDisplay: "+91 94580 12793",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=28.7304518,77.1264168&z=17&output=embed",
    mapLink: "https://maps.google.com/maps?q=28.7304518,77.1264168&z=17",
    geo: { lat: "28.7304518", lng: "77.1264168" },
    photos: [],
    isFlagship: false,
    landingPath: "/rohini-sector-15",
    metaTitle: "Coaching in Rohini Sector 15 | ESA Sector 15 Centre",
    metaDescription:
      "Excellent Students' Academy coaching centre in Sector 15, Rohini, New Delhi. Class 1 to 12 CBSE coaching - Math, Science, Commerce. Headed by Mr. Dhruv Narayan.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    highlights: [
      "Newest Delhi branch, smaller batch sizes for Class 6-12 board prep",
      "Same weekly test schedule and faculty notes as our flagship Sector 7 centre",
      "Walking distance from Sector 15 market and bus stop - easy parent drop-off",
      "Serves Sectors 13, 14, 15, 16 students from Rajiv Gandhi, Mount Carmel, and nearby schools",
    ],
    faqs: [
      {
        question: "Where is the ESA Rohini Sector 15 centre?",
        answer:
          "Sector 15, Rohini, New Delhi 110089 - close to the Sector 15 market and bus stop. Send us a WhatsApp message and we will share the live Google Maps pin.",
      },
      {
        question: "How do I reach Sector 15 centre from Sector 13, 14 or 16?",
        answer:
          "Easy 5-10 minute auto ride or e-rickshaw from Sectors 13, 14 and 16 - all neighbouring sectors connect via the main Rohini-Bawana road. Direct DTC and cluster buses also pass nearby.",
      },
      {
        question: "Which classes are offered at this centre?",
        answer:
          "Class 1 to Class 12 - foundation classes, Class 9-10 CBSE board prep, and Class 11-12 with stream choice (Science, Commerce, Humanities). Smaller batch sizes here than the flagship centre.",
      },
      {
        question: "Is this the same ESA that runs the Sector 7 centre?",
        answer:
          "Yes - same management, same faculty framework, same weekly tests. The Sector 15 centre is run by Mr. Dhruv Narayan as Centre Incharge under the same Excellent Students' Academy brand.",
      },
      {
        question: "What are the working hours and weekly off?",
        answer:
          "Monday to Saturday, 10:00 AM to 8:30 PM. Sunday closed. Batches are scheduled across morning, afternoon and evening slots - we will assign your child's batch based on school timing.",
      },
      {
        question: "Can I get a free demo before enrolling?",
        answer:
          "Yes, 7-day free demo. Walk into the centre or send us a WhatsApp - we will book a slot in the actual batch matching your child's class and subject.",
      },
    ],
  },
  {
    slug: "shakurpur-delhi",
    name: "ESA Shakurpur",
    shortName: "Shakurpur Delhi",
    city: "New Delhi",
    state: "Delhi",
    pin: "110034",
    fullAddress: "Block G, Shakurpur Colony, Shakurpur, Delhi 110034",
    addressLines: ["Block G, Shakurpur Colony", "Shakurpur, Delhi 110034"],
    inCharge: "Ms. Khushboo",
    inChargeRole: "Centre Incharge",
    inChargePhoto: "/faculty/khushboo.jpg",
    inChargeBio:
      "Heads our Shakurpur centre. Handles admissions, parent meetings and academic planning for every batch running in Block G. Reach her directly during working hours for any concern.",
    phone: "+919458012793",
    phoneDisplay: "+91 94580 12793",
    whatsapp: "+919458012793",
    whatsappDisplay: "+91 94580 12793",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Ravi+Shoe+Palace,+Block+G,+Shakurpur+Colony,+Delhi+110034&z=17&output=embed",
    mapLink:
      "https://maps.google.com/maps?q=Ravi+Shoe+Palace,+Block+G,+Shakurpur+Colony,+Delhi+110034",
    geo: { lat: "28.6815", lng: "77.1418" },
    photos: [],
    isFlagship: false,
    landingPath: "/shakurpur",
    metaTitle: "Coaching in Shakurpur Delhi | ESA Shakurpur Centre",
    metaDescription:
      "Excellent Students' Academy coaching centre in Block G, Shakurpur Colony, Delhi 110034. Class 1 to 12 CBSE coaching. Headed by Ms. Khushboo.",
    heroImage:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1920&q=80",
    highlights: [
      "West Delhi presence next to Block G market, near Ravi Shoe Palace landmark",
      "Strong foundation focus for Class 1-5 with Class 6-12 board batches running through the year",
      "Easy access from Pitampura, Punjabi Bagh, Tri Nagar and Shakurpur Colony",
      "Walking distance from local schools - DAV, Maharaja Agrasen, Salwan",
    ],
    faqs: [
      {
        question: "Where is the ESA Shakurpur centre located?",
        answer:
          "Block G, Shakurpur Colony, Shakurpur, Delhi 110034 - near Ravi Shoe Palace, just off the main Block G market road. Send a WhatsApp message for the live Google Maps pin.",
      },
      {
        question: "Is the Shakurpur centre close to Pitampura and Punjabi Bagh?",
        answer:
          "Yes - 10-15 minutes by auto or e-rickshaw from Pitampura, Punjabi Bagh, Tri Nagar and Shastri Nagar. Direct buses connect through Shakurpur Colony from Outer Ring Road.",
      },
      {
        question: "Which classes are taught at Shakurpur?",
        answer:
          "Class 1 to Class 12. Strong focus on foundation classes (1-5) plus Class 6-10 CBSE board prep and Class 11-12 Science, Commerce and Humanities streams.",
      },
      {
        question: "Who is the Centre Incharge at Shakurpur?",
        answer:
          "Ms. Khushboo heads the Shakurpur centre. She handles admissions, batch allocation, parent communication and daily centre operations. Reach her directly during working hours.",
      },
      {
        question: "Which schools do most ESA Shakurpur students come from?",
        answer:
          "DAV Public School (Shakurpur), Maharaja Agrasen Public School, Salwan Public School, Apeejay and other CBSE schools across west Delhi. Walking distance from several of these.",
      },
      {
        question: "Do you have weekly tests like the Rohini centres?",
        answer:
          "Yes - every Saturday is test day at Shakurpur, same as our Rohini flagship. Chapter-wise testing for board classes and skill-based assessments for foundation classes.",
      },
    ],
  },
  {
    slug: "lucknow-thakurganj",
    name: "ESA Lucknow Thakurganj",
    shortName: "Lucknow Thakurganj",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pin: "226003",
    fullAddress:
      "I I C Computer Institute, Building Sparkling Careers, Chowk, Thakur Ganj Hardoi Road, Thakurganj, Basant Vihar Colony, Lucknow, Uttar Pradesh 226003",
    addressLines: [
      "I I C Computer Institute",
      "Building Sparkling Careers, Chowk",
      "Thakur Ganj Hardoi Road, Thakurganj",
      "Basant Vihar Colony, Lucknow",
      "Uttar Pradesh 226003",
    ],
    inCharge: "Mr. Ashok Rastogi",
    inChargeRole: "Centre Incharge",
    inChargePhoto: "/faculty/ashok-rastogi.jpg",
    inChargeQualification: "B.Tech, Mechanical Engineering",
    inChargeExperience: "11 years",
    inChargeBio:
      "Heads our Lucknow Thakurganj centre. B.Tech in Mechanical Engineering with eleven years in education and centre management - oversees daily operations, parent communication and academic discipline for every batch running in Lucknow.",
    phone: "+919716502093",
    phoneDisplay: "+91 97165 02093",
    whatsapp: "+919716502093",
    whatsappDisplay: "+91 97165 02093",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=26.8726166,80.8950644&z=17&output=embed",
    mapLink: "https://maps.google.com/maps?q=26.8726166,80.8950644&z=17",
    geo: { lat: "26.8726166", lng: "80.8950644" },
    photos: ["/centres/lucknow-1.jpg", "/centres/lucknow-2.jpg"],
    isFlagship: false,
    landingPath: "/lucknow",
    metaTitle: "Coaching in Lucknow Thakurganj | ESA Lucknow Centre",
    metaDescription:
      "Excellent Students' Academy Lucknow centre at Thakurganj, Chowk. Class 1 to 12 CBSE coaching, board prep and foundation classes. Headed by Mr. Ashok Rastogi - B.Tech, 11 years.",
    heroImage: "/centres/lucknow-1.jpg",
    highlights: [
      "ESA's first Uttar Pradesh centre - bringing Rohini-grade coaching to Lucknow",
      "Centrally located on Hardoi Road, Chowk - easy reach from Basant Vihar, Thakurganj, Daliganj",
      "Bilingual teaching (English + Hindi explanation) for CBSE and UP Board students",
      "Faculty trained at our Rohini flagship - same syllabus, same weekly test framework",
    ],
    faqs: [
      {
        question: "Where exactly is ESA Lucknow Thakurganj?",
        answer:
          "I I C Computer Institute, Building Sparkling Careers, Chowk, Thakur Ganj Hardoi Road, Thakurganj, Basant Vihar Colony, Lucknow, UP 226003. The building is on the Hardoi Road side of Chowk, near Basant Vihar Colony.",
      },
      {
        question: "Does ESA Lucknow teach CBSE only or UP Board too?",
        answer:
          "Both. We follow the CBSE syllabus as our primary framework but accept UP Board students and align teaching to UP Board exam patterns where needed. Math, Science and Commerce subjects overlap heavily across both boards.",
      },
      {
        question: "Is teaching in Hindi or English?",
        answer:
          "Bilingual. Concept explanation happens in Hindi for clarity, and answer-writing, formulas and definitions are taught in English so students are ready for board exam papers in either language.",
      },
      {
        question: "How do I reach ESA Lucknow from Daliganj, Aminabad or Hazratganj?",
        answer:
          "10-15 minute auto-rickshaw ride from Daliganj, 20 minutes from Aminabad, and 25-30 minutes from Hazratganj. Direct city buses and Tempo Travellers run through Hardoi Road / Chowk regularly.",
      },
      {
        question: "Who is the Centre Incharge at ESA Lucknow?",
        answer:
          "Mr. Ashok Rastogi heads the Lucknow centre. B.Tech in Mechanical Engineering with 11 years in education and centre management. He is the direct point of contact for any parent or student concern.",
      },
      {
        question: "How do I book a free demo class at ESA Lucknow?",
        answer:
          "Call or WhatsApp +91 97165 02093, or fill the demo form on this page. We will call back within working hours, fix a slot in the running batch matching your child's class, and you can walk in to attend before deciding.",
      },
    ],
  },
];

export const findCentre = (slug: string) =>
  centres.find((c) => c.slug === slug);
