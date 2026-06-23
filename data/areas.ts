export type Area = {
  slug: string;
  name: string;
  distanceKm: number;
  description: string;
  /**
   * Optional per-locality fields. When present the area page renders unique
   * copy; when absent the page falls back to generic templated copy. Filling
   * these in turns thin near-duplicate pages into real local-SEO content.
   *
   * TODO (Mayank): fill in for each area as time allows. Even 2-3 sentences
   * specific to the locality (a known landmark, common student profile, local
   * school name, transport quirk) dramatically improves how Google + AI
   * engines treat these pages.
   */
  localCopy?: string;
  landmark?: string;
  nearbySchools?: string[];
  transport?: string;
};

// Localities around Rohini Sector 7 where most ESA students come from.
// Used for: areas grid on homepage, sitemap, location-targeted SEO pages and blogs.
export const nearbyAreas: Area[] = [
  {
    slug: "rohini-sector-7",
    name: "Rohini Sector 7",
    distanceKm: 0,
    description:
      "Our home base. Walking distance for students from Sector 7 Rohini.",
  },
  {
    slug: "rohini-sector-3",
    name: "Rohini Sector 3",
    distanceKm: 1.5,
    description: "Students from Sector 3 reach ESA in under 10 minutes.",
  },
  {
    slug: "rohini-sector-5",
    name: "Rohini Sector 5",
    distanceKm: 1.2,
    description: "Easy commute from Rohini Sector 5 via Outer Ring Road.",
  },
  {
    slug: "rohini-sector-9",
    name: "Rohini Sector 9",
    distanceKm: 2.1,
    description: "Coaching for Class 1 to 12 students from Rohini Sector 9.",
  },
  {
    slug: "rohini-sector-11",
    name: "Rohini Sector 11",
    distanceKm: 2.8,
    description: "Direct auto rickshaw connection from Sector 11 Rohini.",
  },
  {
    slug: "rohini-sector-13",
    name: "Rohini Sector 13",
    distanceKm: 3.2,
    description: "Students from Sector 13 enrol for board and competitive coaching.",
  },
  {
    slug: "rohini-sector-15",
    name: "Rohini Sector 15",
    distanceKm: 3.6,
    description: "Tuition classes for Sector 15 Rohini residents.",
  },
  {
    slug: "rohini-sector-17",
    name: "Rohini Sector 17",
    distanceKm: 4.1,
    description: "Many of our Class 11 and 12 students come from Sector 17.",
  },
  {
    slug: "pitampura",
    name: "Pitampura",
    distanceKm: 4.5,
    description:
      "Coaching for Pitampura students across all classes and subjects.",
  },
  {
    slug: "shalimar-bagh",
    name: "Shalimar Bagh",
    distanceKm: 5.2,
    description:
      "Math, Science and Commerce coaching for Shalimar Bagh students.",
  },
  {
    slug: "model-town",
    name: "Model Town",
    distanceKm: 6.8,
    description:
      "Board exam coaching and home tuition for Model Town residents.",
  },
  {
    slug: "ashok-vihar",
    name: "Ashok Vihar",
    distanceKm: 6.1,
    description:
      "Class 9 to 12 coaching for Ashok Vihar Phase 1, 2 and 3 students.",
  },
  {
    slug: "mukherjee-nagar",
    name: "Mukherjee Nagar",
    distanceKm: 5.8,
    description:
      "School tuition for Mukherjee Nagar students from Class 1 to 12.",
  },
  {
    slug: "kohat-enclave",
    name: "Kohat Enclave",
    distanceKm: 4.0,
    description: "Coaching for Kohat Enclave families, easy metro reach.",
  },
  {
    slug: "saraswati-vihar",
    name: "Saraswati Vihar",
    distanceKm: 4.2,
    description: "Tuition and coaching for Saraswati Vihar students.",
  },
  {
    slug: "rani-bagh",
    name: "Rani Bagh",
    distanceKm: 5.5,
    description: "Board exam preparation for Rani Bagh students.",
  },
  {
    slug: "punjabi-bagh",
    name: "Punjabi Bagh",
    distanceKm: 7.2,
    description:
      "Class 11 and 12 coaching for Punjabi Bagh students. Home tuition available.",
  },
  {
    slug: "shastri-nagar",
    name: "Shastri Nagar",
    distanceKm: 6.5,
    description: "Coaching for Shastri Nagar students from Class 1 to 12.",
  },
  {
    slug: "adarsh-nagar",
    name: "Adarsh Nagar",
    distanceKm: 7.0,
    description: "School and board coaching for Adarsh Nagar residents.",
  },
  {
    slug: "wazirpur",
    name: "Wazirpur",
    distanceKm: 6.8,
    description: "Tuition classes for Wazirpur students.",
  },
];
