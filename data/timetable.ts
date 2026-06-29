export type TimetableRow = {
  /** Roman-numeral class label as printed on the timetable, e.g. "I - V", "XI". */
  classLabel: string;
  /** Overall slot for this class, e.g. "4:00 - 6:30 PM". */
  totalTime: string;
  /** Subject blocks within the overall slot. */
  blocks: { time: string; subject: string }[];
};

export type CentreTimetable = {
  slug: string;
  /** Centre name as printed in the header. */
  centre: string;
  /** Subtitle / branch line. */
  branch: string;
  /** Phone displayed on the printed sheet. */
  phone: string;
  /** Path to the printable HTML sheet inside /public for direct download. */
  downloadPath: string;
  /** Public URL of the sheet (used in WhatsApp share text). */
  publicUrl: string;
  rows: TimetableRow[];
};

export const timetables: CentreTimetable[] = [
  {
    slug: "sector-7",
    centre: "Excellent Students' Academy",
    branch: "Rohini, Sector 7, New Delhi",
    phone: "+91 94580 12793",
    downloadPath: "/timetables/sector-7.html",
    publicUrl: "https://www.theesa.in/timetables/sector-7.html",
    rows: [
      {
        classLabel: "I - V",
        totalTime: "4:00 - 6:30 PM",
        blocks: [
          { time: "4:00 - 5:15", subject: "English" },
          { time: "5:15 - 6:30", subject: "Hindi" },
        ],
      },
      {
        classLabel: "VI",
        totalTime: "5:00 - 6:00 PM",
        blocks: [{ time: "5:00 - 6:00", subject: "Social Science" }],
      },
      {
        classLabel: "VII",
        totalTime: "5:00 - 6:00 PM",
        blocks: [{ time: "5:00 - 6:00", subject: "Social Science" }],
      },
      {
        classLabel: "VIII",
        totalTime: "6:00 - 7:00 PM",
        blocks: [{ time: "6:00 - 7:00", subject: "Social Science" }],
      },
      {
        classLabel: "IX",
        totalTime: "4:00 - 6:00 PM",
        blocks: [
          { time: "4:00 - 5:00", subject: "Social Science" },
          { time: "5:00 - 6:00", subject: "Science" },
        ],
      },
      {
        classLabel: "X",
        totalTime: "4:00 - 6:00 PM",
        blocks: [
          { time: "4:00 - 5:00", subject: "Science" },
          { time: "5:00 - 6:00", subject: "Social Science" },
        ],
      },
      {
        classLabel: "XI",
        totalTime: "6:00 - 7:00 PM",
        blocks: [{ time: "6:00 - 7:00", subject: "Maths" }],
      },
      {
        classLabel: "XII",
        totalTime: "5:00 - 8:00 PM",
        blocks: [
          { time: "5:00 - 6:30", subject: "Physics + Chemistry" },
          { time: "7:00 - 8:00", subject: "Maths" },
        ],
      },
      {
        classLabel: "XII",
        totalTime: "6:00 - 7:00 PM",
        blocks: [{ time: "6:00 - 7:00", subject: "Economics" }],
      },
      {
        classLabel: "XII",
        totalTime: "4:00 - 5:00 PM",
        blocks: [{ time: "4:00 - 5:00", subject: "Accounts" }],
      },
      {
        classLabel: "XI",
        totalTime: "7:00 - 8:00 PM",
        blocks: [{ time: "7:00 - 8:00", subject: "Political Science" }],
      },
    ],
  },
  {
    slug: "sector-15",
    centre: "Excellent Students' Academy",
    branch: "Rohini, Sector 15, New Delhi",
    phone: "+91 94580 12793",
    downloadPath: "/timetables/sector-15.html",
    publicUrl: "https://www.theesa.in/timetables/sector-15.html",
    rows: [
      {
        classLabel: "I - V",
        totalTime: "3:00 - 5:00 PM",
        blocks: [
          { time: "3:00 - 4:00", subject: "Hindi" },
          { time: "4:00 - 5:00", subject: "English" },
        ],
      },
      {
        classLabel: "VI",
        totalTime: "4:00 - 6:00 PM",
        blocks: [
          { time: "4:00 - 5:00", subject: "Maths" },
          { time: "5:00 - 6:00", subject: "Social Science" },
        ],
      },
      {
        classLabel: "VII",
        totalTime: "5:00 - 7:00 PM",
        blocks: [
          { time: "5:00 - 6:00", subject: "Maths" },
          { time: "6:00 - 7:00", subject: "Social Science" },
        ],
      },
      {
        classLabel: "VIII",
        totalTime: "6:00 - 8:00 PM",
        blocks: [
          { time: "6:00 - 7:00", subject: "Maths" },
          { time: "7:00 - 8:00", subject: "Social Science" },
        ],
      },
      {
        classLabel: "IX",
        totalTime: "6:00 - 8:00 PM",
        blocks: [
          { time: "6:00 - 7:00", subject: "Science" },
          { time: "7:00 - 8:00", subject: "Maths" },
        ],
      },
      {
        classLabel: "X",
        totalTime: "7:00 - 9:00 PM",
        blocks: [
          { time: "7:00 - 8:00", subject: "Science" },
          { time: "8:00 - 9:00", subject: "Maths" },
        ],
      },
    ],
  },
];
