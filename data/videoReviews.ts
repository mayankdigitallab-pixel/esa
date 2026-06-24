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
    name: "TODO - Student name",
    role: "TODO - Class 12 / Parent / etc.",
    blurb: "TODO - one-line takeaway from the review.",
    source: { kind: "youtube", youtubeId: "" },
  },
  {
    name: "TODO - Student name",
    role: "TODO - Class 10 / Parent / etc.",
    blurb: "TODO - one-line takeaway from the review.",
    source: { kind: "youtube", youtubeId: "" },
  },
  {
    name: "TODO - Student name",
    role: "TODO - Class 11 / Parent / etc.",
    blurb: "TODO - one-line takeaway from the review.",
    source: { kind: "youtube", youtubeId: "" },
  },
];
