import type { Metadata } from "next";
import { CentreLanding } from "@/components/CentreLanding";
import { findCentre } from "@/data/centres";
import { shareMeta } from "@/lib/seo";

const centre = findCentre("lucknow-thakurganj")!;

export const metadata: Metadata = {
  title: centre.metaTitle,
  description: centre.metaDescription,
  alternates: { canonical: `https://www.theesa.in${centre.landingPath}` },
  keywords: [
    "coaching in Lucknow",
    "coaching in Thakurganj Lucknow",
    "CBSE tuition Lucknow",
    "Class 10 coaching Lucknow",
    "Class 12 coaching Lucknow",
    "ESA Lucknow",
    "Ashok Rastogi ESA",
    "tuition centre Thakurganj",
    "best coaching Thakurganj Lucknow",
    "Class 9 tuition Lucknow",
  ],
  ...shareMeta({
    title: centre.metaTitle,
    description: centre.metaDescription,
    path: centre.landingPath!,
  }),
};

export default function LucknowPage() {
  return <CentreLanding centre={centre} />;
}
