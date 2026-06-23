import type { Metadata } from "next";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { GalleryClient } from "./GalleryClient";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Gallery | Inside ESA Rohini - Classes, Festivals, Birthdays",
  description:
    "Real photos from inside Excellent Students' Academy Rohini Sector 7 - classrooms, weekly tests, Saraswati Puja, Independence Day, Teachers' Day, birthdays and our centre.",
  alternates: { canonical: "https://www.theesa.in/gallery" },
};

export default function GalleryPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
  ]);
  return (
    <div>
      <script {...jsonLd(breadcrumb)} />
      <PageBanner
        label="Gallery"
        image="/gallery/g13.jpg"
        imageAlt="Students, parents and faculty celebrating Independence Day at ESA Rohini"
        heading={<>A second home for your child in Rohini.</>}
        subtitle="Classes that feel warm, festivals we celebrate as a family, weekly tests we sit together, and birthdays nobody at ESA forgets. Take a peek inside our Sector 7 centre."
        right={
          <BannerStatsRight
            stats={[
              { value: "500+", label: "Happy students" },
              { value: "11 yrs", label: "Serving Rohini" },
              { value: "2", label: "AC floors" },
              { value: "All", label: "Festivals together" },
            ]}
          />
        }
      />

      <GalleryClient />
    </div>
  );
}
