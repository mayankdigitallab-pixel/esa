import type { Metadata } from "next";
import { CentreLanding } from "@/components/CentreLanding";
import { findCentre } from "@/data/centres";

const centre = findCentre("shakurpur-delhi")!;

export const metadata: Metadata = {
  title: centre.metaTitle,
  description: centre.metaDescription,
  alternates: { canonical: `https://www.theesa.in${centre.landingPath}` },
  keywords: [
    "coaching in Shakurpur",
    "ESA Shakurpur",
    "tuition in Shakurpur Delhi",
    "CBSE coaching Shakurpur",
    "Class 10 board coaching Shakurpur",
    "Class 12 coaching Shakurpur",
    "Khushboo ESA",
  ],
};

export default function ShakurpurPage() {
  return <CentreLanding centre={centre} />;
}
