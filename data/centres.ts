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
    phone: "+911171906883",
    phoneDisplay: "011-7190-6883",
    whatsapp: "+918882663340",
    whatsappDisplay: "+91 88826 63340",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=28.7304518,77.1264168&z=17&output=embed",
    mapLink: "https://maps.google.com/maps?q=28.7304518,77.1264168&z=17",
    geo: { lat: "28.7304518", lng: "77.1264168" },
    photos: [],
    isFlagship: false,
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
    phone: "+918076625741",
    phoneDisplay: "+91 80766 25741",
    whatsapp: "+918076625741",
    whatsappDisplay: "+91 80766 25741",
    email: "excellentstudentsacademy1@gmail.com",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Ravi+Shoe+Palace,+Block+G,+Shakurpur+Colony,+Delhi+110034&z=17&output=embed",
    mapLink:
      "https://maps.google.com/maps?q=Ravi+Shoe+Palace,+Block+G,+Shakurpur+Colony,+Delhi+110034",
    geo: { lat: "28.6815", lng: "77.1418" },
    photos: [],
    isFlagship: false,
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
  },
];

export const findCentre = (slug: string) =>
  centres.find((c) => c.slug === slug);
