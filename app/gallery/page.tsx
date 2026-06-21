import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery | Inside ESA Rohini",
  description:
    "Photos from inside Excellent Students' Academy Rohini Sector 7. Classrooms, study sessions, doubt classes, events and student achievements.",
  alternates: { canonical: "https://www.theesa.in/gallery" },
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    alt: "Classroom session at ESA Rohini",
    caption: "Morning Class 11 Physics batch",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=80",
    alt: "Students writing weekly test",
    caption: "Saturday weekly chapter test",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    alt: "Faculty teaching at ESA Rohini",
    caption: "Math doubt session",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    alt: "Library at ESA Rohini",
    caption: "Self-study space",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    alt: "Student studying at ESA",
    caption: "Class 12 board prep batch",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
    alt: "Group study session",
    caption: "Peer learning circle",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    alt: "Parent-teacher meeting at ESA",
    caption: "Monthly parent meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
    alt: "Mathematics class at ESA Rohini",
    caption: "Senior Math class",
  },
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80",
    alt: "Award ceremony at ESA",
    caption: "Annual achievement awards",
  },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">Gallery</span></div>
            <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight text-charcoal sm:text-6xl">
              A look inside{" "}
              <span className="text-charcoal">our classrooms</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
              Photos from a regular week at Excellent Students&apos; Academy in
              Rohini Sector 7. Real batches, real students, no staged shoots.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g) => (
              <figure
                key={g.src}
                className="group overflow-hidden rounded border border-neutral-200 bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-medium text-charcoal">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
