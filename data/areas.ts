export type Area = {
  slug: string;
  name: string;
  distanceKm: number;
  description: string;
  /**
   * Optional per-locality fields. When present the area page renders unique
   * copy; when absent the page falls back to generic templated copy. Filling
   * these in turns thin near-duplicate pages into real local-SEO content.
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
    landmark: "Rohini West Metro Station (Red Line), about 10 minutes' walk away",
    nearbySchools: ["DAV Public School, Sector 7", "Vishal Bharti Public School", "Mount Abu Public School"],
    localCopy:
      "Sector 7 is our flagship centre's own sector, so this is as close as coaching gets - most students walk in directly after school.",
  },
  {
    slug: "rohini-sector-3",
    name: "Rohini Sector 3",
    distanceKm: 1.5,
    description: "Students from Sector 3 reach ESA in under 10 minutes.",
    landmark: "Close to St. Giri Senior Secondary School, Sector 3",
    nearbySchools: ["St. Giri Senior Secondary School"],
    localCopy:
      "Sector 3 students reach our Sector 7 centre in a short auto ride along the main C-block road.",
  },
  {
    slug: "rohini-sector-5",
    name: "Rohini Sector 5",
    distanceKm: 1.2,
    description: "Easy commute from Rohini Sector 5 via Outer Ring Road.",
    landmark: "Near Mount Abu Public School, Sector 5",
    nearbySchools: ["Mount Abu Public School"],
    localCopy:
      "Many of our Sector 5 students come straight from their Mount Abu Public School day into an evening ESA batch.",
  },
  {
    slug: "rohini-sector-9",
    name: "Rohini Sector 9",
    distanceKm: 2.1,
    description: "Coaching for Class 1 to 12 students from Rohini Sector 9.",
    landmark: "Near the Sector 9 - Sector 10 district park stretch",
    nearbySchools: ["CBSE schools across Sector 8 and 9"],
    localCopy:
      "Sector 9 sits between our Sector 7 centre and the Sector 10 Japanese Park side, an easy e-rickshaw ride either way.",
  },
  {
    slug: "rohini-sector-11",
    name: "Rohini Sector 11",
    distanceKm: 2.8,
    description: "Direct auto rickshaw connection from Sector 11 Rohini.",
    landmark: "Japanese Park (Swarn Jayanti Park), Sector 11",
    nearbySchools: ["Ryan International School, Sector 11"],
    localCopy:
      "Sector 11 is home to Rohini's well-known Japanese Park - students from around it reach our Sector 7 centre in under 15 minutes.",
  },
  {
    slug: "rohini-sector-13",
    name: "Rohini Sector 13",
    distanceKm: 3.2,
    description: "Students from Sector 13 enrol for board and competitive coaching.",
    landmark: "Near Venkateshwar Global School, Sector 13",
    nearbySchools: ["Venkateshwar Global School", "VSPK International School"],
    localCopy:
      "Students from Sector 13 often join us for board prep alongside their regular school routine at Venkateshwar Global or VSPK International.",
  },
  {
    slug: "rohini-sector-15",
    name: "Rohini Sector 15",
    distanceKm: 3.6,
    description: "Tuition classes for Sector 15 Rohini residents.",
    landmark: "Sector 15 market and bus stop",
    nearbySchools: ["Vidya Bharati School, Sector 15", "St. Angel's School, Sector 15"],
    localCopy:
      "Sector 15 also has its own ESA branch, so families here can choose whichever centre - Sector 7 or Sector 15 - fits their timing better.",
  },
  {
    slug: "rohini-sector-17",
    name: "Rohini Sector 17",
    distanceKm: 4.1,
    description: "Many of our Class 11 and 12 students come from Sector 17.",
    landmark: "Near the Rohini Sector 18-19 Metro Station (Yellow Line)",
    nearbySchools: ["CBSE schools across Sector 16 to 18"],
    localCopy:
      "Sector 17 families are within easy reach of both our Sector 7 flagship and our newer Sector 15 branch.",
  },
  {
    slug: "pitampura",
    name: "Pitampura",
    distanceKm: 4.5,
    description:
      "Coaching for Pitampura students across all classes and subjects.",
    landmark: "Kohat Enclave Metro Station and Metro Walk Mall",
    nearbySchools: ["Bal Bharati Public School, Pitampura", "PP International School", "Aadharshila Vidyapeeth"],
    localCopy:
      "Pitampura students commute to our Sector 7 centre via Kohat Enclave or the Outer Ring Road side lanes, usually in 10-15 minutes.",
  },
  {
    slug: "shalimar-bagh",
    name: "Shalimar Bagh",
    distanceKm: 5.2,
    description:
      "Math, Science and Commerce coaching for Shalimar Bagh students.",
    landmark: "Near Darbari Lal DAV Model School, Shalimar Bagh",
    nearbySchools: ["Darbari Lal DAV Model School", "DAV Public School, Shalimar Bagh", "Maxfort International School"],
    localCopy:
      "Several Shalimar Bagh students switch to ESA after finding batches at other centres too large or inconsistent on faculty.",
  },
  {
    slug: "model-town",
    name: "Model Town",
    distanceKm: 6.8,
    description:
      "Board exam coaching for Model Town residents.",
    landmark: "Near Guru Tegh Bahadur Public School, Model Town",
    nearbySchools: ["Guru Tegh Bahadur Public School", "PP International School"],
    localCopy:
      "Model Town is on the far edge of our regular catchment, and we recommend the free demo week to confirm the commute fits your family's schedule.",
  },
  {
    slug: "ashok-vihar",
    name: "Ashok Vihar",
    distanceKm: 6.1,
    description:
      "Class 9 to 12 coaching for Ashok Vihar Phase 1, 2 and 3 students.",
    landmark: "Near Lions Public School, Ashok Vihar",
    nearbySchools: ["Lions Public School", "Prudence School, Ashok Vihar", "Mahavir Senior Model School"],
    localCopy:
      "Ashok Vihar Phase 1 to 3 students mostly join us for Class 9 to 12 board and stream coaching.",
  },
  {
    slug: "mukherjee-nagar",
    name: "Mukherjee Nagar",
    distanceKm: 5.8,
    description:
      "School tuition for Mukherjee Nagar students from Class 1 to 12.",
    landmark: "Near GTB Nagar Metro Station, close to the Mukherjee Nagar coaching hub",
    nearbySchools: ["CBSE schools around GTB Nagar and Mukherjee Nagar"],
    localCopy:
      "Mukherjee Nagar is better known for competitive-exam coaching, but our school-board batches draw steadily from its residential side.",
  },
  {
    slug: "kohat-enclave",
    name: "Kohat Enclave",
    distanceKm: 4.0,
    description: "Coaching for Kohat Enclave families, easy metro reach.",
    landmark: "Kohat Enclave Metro Station (Red Line)",
    nearbySchools: ["CBSE schools across Kohat Enclave and Saraswati Vihar"],
    localCopy:
      "Kohat Enclave sits right on the metro, making it one of the easiest commutes to our Sector 7 centre.",
  },
  {
    slug: "saraswati-vihar",
    name: "Saraswati Vihar",
    distanceKm: 4.2,
    description: "Tuition and coaching for Saraswati Vihar students.",
    landmark: "Near the Pitampura and Kohat Enclave Metro Stations",
    nearbySchools: ["Government and private schools across Saraswati Vihar"],
    localCopy:
      "Saraswati Vihar families typically travel via the Pitampura or Kohat Enclave metro side to reach our Sector 7 centre.",
  },
  {
    slug: "rani-bagh",
    name: "Rani Bagh",
    distanceKm: 5.5,
    description: "Board exam preparation for Rani Bagh students.",
    landmark: "Rani Bagh Market",
    nearbySchools: ["CBSE schools around Rani Bagh and Sant Nagar"],
    localCopy:
      "Rani Bagh students usually combine a short auto ride with the Pitampura road stretch to reach us.",
  },
  {
    slug: "punjabi-bagh",
    name: "Punjabi Bagh",
    distanceKm: 7.2,
    description:
      "Class 11 and 12 coaching for Punjabi Bagh students.",
    landmark: "Near Punjabi Bagh Central Market",
    nearbySchools: ["CBSE schools around Punjabi Bagh"],
    localCopy:
      "Punjabi Bagh is at the far end of our service radius - Class 11-12 students make up most of our enrolments from here.",
  },
  {
    slug: "shastri-nagar",
    name: "Shastri Nagar",
    distanceKm: 6.5,
    description: "Coaching for Shastri Nagar students from Class 1 to 12.",
    landmark: "Near Shastri Nagar Metro Station (Red Line)",
    nearbySchools: ["CBSE schools around Shastri Nagar"],
    localCopy:
      "Shastri Nagar students generally take the Red Line towards Rithala or Kohat Enclave and then a short auto ride to reach us.",
  },
  {
    slug: "adarsh-nagar",
    name: "Adarsh Nagar",
    distanceKm: 7.0,
    description: "School and board coaching for Adarsh Nagar residents.",
    landmark: "Near Adarsh Nagar Metro Station (Yellow Line)",
    nearbySchools: ["Guru Tegh Bahadur Public School", "CBSE schools around Adarsh Nagar"],
    localCopy:
      "Adarsh Nagar is on the outer edge of where we recommend a daily commute - the free demo week helps confirm the routine works for your family.",
  },
  {
    slug: "wazirpur",
    name: "Wazirpur",
    distanceKm: 6.8,
    description: "Tuition classes for Wazirpur students.",
    landmark: "Near the Wazirpur Industrial Area",
    nearbySchools: ["CBSE schools around Wazirpur and Shalimar Bagh"],
    localCopy:
      "Wazirpur students typically travel via Shalimar Bagh or Ashok Vihar to reach our Sector 7 centre.",
  },
  {
    slug: "rohini-sector-1",
    name: "Rohini Sector 1",
    distanceKm: 4.5,
    description: "Coaching for students from Rohini Sector 1.",
    landmark: "Near the Avantika colony, Sector 1",
    nearbySchools: ["CBSE schools across Sector 1 and 2"],
    localCopy:
      "Sector 1 sits on the western edge of Rohini, near Avantika - most students here travel by auto to our Sector 7 centre.",
  },
  {
    slug: "rohini-sector-2",
    name: "Rohini Sector 2",
    distanceKm: 4.0,
    description: "Class 1 to 12 tuition for students living in Rohini Sector 2.",
    landmark: "Near Sector 1 and the Avantika colony",
    nearbySchools: ["CBSE schools across Sector 1 and 2"],
    localCopy:
      "Sector 2 is a quick ride from our Sector 7 centre along the main Rohini road network.",
  },
  {
    slug: "rohini-sector-4",
    name: "Rohini Sector 4",
    distanceKm: 2.2,
    description: "A short ride from our Sector 7 centre for Rohini Sector 4 students.",
    landmark: "Between Sector 3 and Sector 5, Rohini",
    nearbySchools: ["CBSE schools across Sector 3 to 6"],
    localCopy:
      "Sector 4 is one of the shortest commutes to our Sector 7 flagship centre.",
  },
  {
    slug: "rohini-sector-6",
    name: "Rohini Sector 6",
    distanceKm: 1.6,
    description: "One of the closest sectors to ESA Sector 7 - an easy daily commute.",
    landmark: "Adjacent to Sector 5 and Sector 7, Rohini",
    nearbySchools: ["CBSE schools across Sector 5 to 7"],
    localCopy:
      "Sector 6 borders our home sector directly - many students walk or cycle to class.",
  },
  {
    slug: "rohini-sector-8",
    name: "Rohini Sector 8",
    distanceKm: 2.4,
    description: "Board and foundation coaching for Rohini Sector 8 families.",
    landmark: "Near Orleans - The School, Sector 8",
    nearbySchools: ["Orleans - The School (OTS)"],
    localCopy:
      "Sector 8 students often combine their school day at Orleans with an evening ESA batch.",
  },
  {
    slug: "rohini-sector-10",
    name: "Rohini Sector 10",
    distanceKm: 2.9,
    description: "Math, Science and Commerce tuition for Rohini Sector 10 students.",
    landmark: "Near Metro Walk Mall and Japanese Park, Sector 10",
    nearbySchools: ["CBSE schools across Sector 9 and 10"],
    localCopy:
      "Sector 10, right by Metro Walk Mall and Japanese Park, is a short and familiar route to our Sector 7 centre.",
  },
  {
    slug: "rohini-sector-16",
    name: "Rohini Sector 16",
    distanceKm: 3.9,
    description: "Board prep and foundation classes for Rohini Sector 16 families, close to our Sector 15 centre.",
    landmark: "Near BCC Model School, Sector 16",
    nearbySchools: ["BCC Model School", "Jain Bharti Model School", "Rockfield Public School"],
    localCopy:
      "Sector 16 students are closest to our Sector 15 branch, though many still choose the Sector 7 flagship for its wider batch choice.",
  },
  {
    slug: "rohini-sector-18",
    name: "Rohini Sector 18",
    distanceKm: 4.7,
    description: "Coaching for Rohini Sector 18 students, served by our Sector 15 centre.",
    landmark: "Rohini Sector 18-19 Metro Station (Yellow Line)",
    nearbySchools: ["CBSE schools across Sector 18 and 19"],
    localCopy:
      "Sector 18 is well connected by the Yellow Line, making the ride to either of our Rohini centres straightforward.",
  },
  {
    slug: "rohini-sector-19",
    name: "Rohini Sector 19",
    distanceKm: 5.1,
    description: "Class 1 to 12 coaching for Rohini Sector 19 residents.",
    landmark: "Rohini Sector 18-19 Metro Station (Yellow Line)",
    nearbySchools: ["CBSE schools across Sector 18 and 19"],
    localCopy:
      "Sector 19 shares the same metro connectivity as Sector 18, an easy ride to our Sector 15 branch.",
  },
  {
    slug: "rohini-sector-20",
    name: "Rohini Sector 20",
    distanceKm: 5.4,
    description: "Board exam preparation for Rohini Sector 20 students.",
    landmark: "Near Sector 19 and Sector 21, Rohini",
    nearbySchools: ["CBSE schools across Sector 19 to 21"],
    localCopy:
      "Sector 20 students typically travel via the Sector 18-19 metro corridor to reach our centres.",
  },
  {
    slug: "rohini-sector-21",
    name: "Rohini Sector 21",
    distanceKm: 5.7,
    description: "Coaching for Rohini Sector 21 families.",
    landmark: "Near Sector 20 and Sector 22, Rohini",
    nearbySchools: ["CBSE schools across Sector 20 to 22"],
    localCopy:
      "Sector 21 is on the outer stretch of Rohini - our Sector 15 branch is usually the closer option.",
  },
  {
    slug: "rohini-sector-22",
    name: "Rohini Sector 22",
    distanceKm: 5.3,
    description: "Tuition classes for students from Rohini Sector 22 and the Avantika colony.",
    landmark: "Near G.D. Goenka Public School, Sector 22 (Avantika)",
    nearbySchools: ["G.D. Goenka Public School"],
    localCopy:
      "Sector 22, the Avantika side of Rohini, sends several students to us for Class 9-12 board coaching.",
  },
  {
    slug: "rohini-sector-24",
    name: "Rohini Sector 24",
    distanceKm: 6.4,
    description: "Coaching for Rohini Sector 24 students near the Bawana Road stretch.",
    landmark: "Near Delhi Public School, Sector 24",
    nearbySchools: ["Delhi Public School, Sector 24"],
    localCopy:
      "Sector 24, near the Bawana Road stretch, is at the far edge of our usual commute range.",
  },
  {
    slug: "prashant-vihar",
    name: "Prashant Vihar",
    distanceKm: 5.0,
    description: "Class 9 to 12 board coaching for Prashant Vihar students.",
    landmark: "About 3 km from Rohini East Metro Station and 4 km from Netaji Subhash Place",
    nearbySchools: ["CBSE schools across Prashant Vihar and Sector 14"],
    localCopy:
      "Prashant Vihar sits between Rohini East metro and Netaji Subhash Place, an easy ride to either of our Rohini centres.",
  },
  {
    slug: "budh-vihar",
    name: "Budh Vihar",
    distanceKm: 6.0,
    description: "Coaching for Budh Vihar Phase 1 and 2 students, reachable via the Rohini-Bawana road.",
    landmark: "Near Budh Vihar Market, about 2.4 km from Rithala Metro Station",
    nearbySchools: ["Yuvashakti School, Budh Vihar"],
    localCopy:
      "Budh Vihar students usually travel via Rithala or the Rohini-Bawana road to reach our centres.",
  },
  {
    slug: "rithala",
    name: "Rithala",
    distanceKm: 3.3,
    description: "Close to Rithala Metro Station (Red Line) - a quick ride to our Sector 7 centre.",
    landmark: "Rithala Metro Station (Red Line terminus), next to Japanese Park and Metro Walk Mall",
    nearbySchools: ["CBSE schools around Rithala and Sector 10"],
    localCopy:
      "Rithala's metro terminus makes it one of the most convenient starting points for the ride to our Sector 7 centre.",
  },
  {
    slug: "vijay-vihar",
    name: "Vijay Vihar",
    distanceKm: 4.6,
    description: "Coaching for Vijay Vihar Phase 1 and 2 students in North West Delhi.",
    landmark: "Near Budh Vihar and Pooth Kalan, Vijay Vihar",
    nearbySchools: ["CBSE schools around Vijay Vihar and Budh Vihar"],
    localCopy:
      "Vijay Vihar students typically travel via the Rithala metro corridor to reach us.",
  },
  {
    slug: "netaji-subhash-place",
    name: "Netaji Subhash Place",
    distanceKm: 6.2,
    description: "Coaching for students from the Netaji Subhash Place (NSP) area near Pitampura.",
    landmark: "Netaji Subhash Place (NSP) Metro Station - Red and Pink Line interchange, near Pacific Mall",
    nearbySchools: ["CBSE schools around NSP and Pitampura"],
    localCopy:
      "NSP is a major commercial and metro hub - students here connect easily to our Sector 7 centre via the Red Line.",
  },
  {
    slug: "bahadurgarh",
    name: "Bahadurgarh",
    distanceKm: 16.0,
    description: "CBSE coaching for Bahadurgarh (Haryana NCR) families, on the western edge of the Delhi NCR belt near Rohini.",
    landmark: "Connected to Delhi via the Green Line metro (Bahadurgarh City / Brigadier Hoshiar Singh stations)",
    nearbySchools: ["CBSE schools across Bahadurgarh and the Delhi-Haryana border belt"],
    transport: "the Green Line metro via Mundka, or the Rohtak Road corridor by car",
    localCopy:
      "Bahadurgarh sits just across the Delhi-Haryana border in the NCR, on the western side of Rohini. Families here who want ESA's weekly-test system either travel in along the Rohtak Road corridor or use the Green Line metro, and home tuition is available across the nearer sectors.",
  },
];
