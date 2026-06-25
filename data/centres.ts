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
  },
];

export const findCentre = (slug: string) =>
  centres.find((c) => c.slug === slug);
