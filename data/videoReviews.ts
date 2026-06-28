export type VideoReview = {
  /** Student's name as shown on the card. */
  name: string;
  /** e.g. "Class 12 PCM" or "Parent of Class 10 student". */
  role: string;
  /** One-line takeaway shown under the name. */
  blurb: string;
  /**
   * Source of the video. Supports:
   *  - YouTube ID: { youtubeId: "abc123XYZ" }
   *  - Direct mp4 in /public: { src: "/videos/review-anushka.mp4" }
   */
  source:
    | { kind: "youtube"; youtubeId: string }
    | { kind: "mp4"; src: string };
  /**
   * Thumbnail. For YouTube videos this can be left blank to fall back to
   * YouTube's auto thumbnail. For local mp4 supply a poster image.
   */
  poster?: string;
};

/**
 * TODO (Mayank): replace placeholders with real student / parent video
 * reviews. Two formats are supported - choose whichever is easier:
 *   1. Upload to YouTube (unlisted is fine) and paste the youtubeId.
 *   2. Drop the .mp4 into /public/videos/ and reference it via `src`.
 *
 * If you have under 20 seconds of footage per review they will play
 * inline without leaving the page.
 */
export const videoReviews: VideoReview[] = [
  {
    name: "Shubh Tyagi",
    role: "Student, Mount Abu Public School",
    blurb: "Shares his experience studying at ESA Rohini.",
    source: { kind: "mp4", src: "/videos/shubh-tyagi.mp4" },
    poster: "/videos/shubh-tyagi-poster.jpg",
  },
  {
    name: "Ashmit",
    role: "Student, ESA Rohini",
    blurb: "Shares why he chose ESA and what keeps him coming back.",
    source: { kind: "mp4", src: "/videos/ashmit.mp4" },
    poster: "/videos/ashmit-poster.jpg",
  },
  {
    name: "Harshit",
    role: "Student, ESA Rohini",
    blurb: "Talks about the teaching style and weekly test routine at ESA.",
    source: { kind: "mp4", src: "/videos/harshit.mp4" },
    poster: "/videos/harshit-poster.jpg",
  },
  {
    name: "Umer",
    role: "Student, ESA Rohini",
    blurb: "Shares his ESA classroom experience in his own words.",
    source: { kind: "mp4", src: "/videos/umer.mp4" },
    poster: "/videos/umer-poster.jpg",
  },
  {
    name: "Tanya Kaur",
    role: "Receptionist, ESA Rohini",
    blurb: "Walks through how parents and students are welcomed at our centre.",
    source: { kind: "mp4", src: "/videos/tanya-kaur.mp4" },
    poster: "/videos/tanya-kaur-poster.jpg",
  },
];
