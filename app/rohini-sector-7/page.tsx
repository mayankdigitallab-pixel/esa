import type { Metadata } from "next";
import { CentreLanding } from "@/components/CentreLanding";
import { findCentre } from "@/data/centres";

const centre = findCentre("rohini-sector-7")!;

export const metadata: Metadata = {
  title: centre.metaTitle,
  description: centre.metaDescription,
  alternates: { canonical: `https://www.theesa.in${centre.landingPath}` },
  keywords: [
    "coaching in Rohini Sector 7",
    "ESA Rohini Sector 7",
    "tuition in Rohini Sector 7",
    "best coaching Rohini Sector 7",
    "Class 11 12 coaching Rohini",
    "CBSE coaching Sector 7 Rohini",
    "flagship ESA centre",
  ],
};

export default function RohiniSec7Page() {
  return <CentreLanding centre={centre} />;
}
