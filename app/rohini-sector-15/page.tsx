import type { Metadata } from "next";
import { CentreLanding } from "@/components/CentreLanding";
import { findCentre } from "@/data/centres";
import { shareMeta } from "@/lib/seo";

const centre = findCentre("rohini-sector-15")!;

export const metadata: Metadata = {
  title: centre.metaTitle,
  description: centre.metaDescription,
  alternates: { canonical: `https://www.theesa.in${centre.landingPath}` },
  keywords: [
    "coaching in Rohini Sector 15",
    "ESA Rohini Sector 15",
    "tuition in Rohini Sector 15",
    "CBSE coaching Sector 15 Rohini",
    "coaching in Delhi NCR",
    "best coaching institute North West Delhi",
    "Class 10 board coaching Rohini",
    "Class 12 coaching Rohini",
    "Dhruv Narayan ESA",
    "Math tuition Rohini Sector 15",
    "Science tuition Rohini Sector 15",
    "coaching near Rohini West metro",
  ],
  ...shareMeta({
    title: centre.metaTitle,
    description: centre.metaDescription,
    path: centre.landingPath!,
  }),
};

export default function RohiniSec15Page() {
  return <CentreLanding centre={centre} />;
}
