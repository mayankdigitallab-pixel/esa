"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Cake,
  Flag,
  Flame,
  GraduationCap,
  Heart,
  MapPin,
  Pencil,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoLightbox, type LightboxItem } from "@/components/PhotoLightbox";

type Photo = {
  file: string;
  alt: string;
  caption: string;
};

type Section = {
  id: string;
  title: string;
  eyebrow: string;
  blurb: string;
  icon: React.ReactNode;
  accent: "teal" | "red" | "amber" | "ink" | "rose" | "indigo";
  photos: Photo[];
};

const accentStyles: Record<
  Section["accent"],
  { chip: string; ring: string; iconBg: string; iconText: string }
> = {
  teal: {
    chip: "bg-teal-500/10 text-teal-700 border-teal-200",
    ring: "ring-teal-200",
    iconBg: "bg-teal-100",
    iconText: "text-teal-700",
  },
  red: {
    chip: "bg-red-500/10 text-red-700 border-red-200",
    ring: "ring-red-200",
    iconBg: "bg-red-100",
    iconText: "text-red-700",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-800 border-amber-200",
    ring: "ring-amber-200",
    iconBg: "bg-amber-100",
    iconText: "text-amber-700",
  },
  ink: {
    chip: "bg-neutral-900/5 text-charcoal border-neutral-300",
    ring: "ring-neutral-300",
    iconBg: "bg-neutral-100",
    iconText: "text-charcoal",
  },
  rose: {
    chip: "border-pink-200 bg-pink-500/10 text-pink-700",
    ring: "ring-pink-200",
    iconBg: "bg-pink-100",
    iconText: "text-pink-700",
  },
  indigo: {
    chip: "border-indigo-200 bg-indigo-500/10 text-indigo-700",
    ring: "ring-indigo-200",
    iconBg: "bg-indigo-100",
    iconText: "text-indigo-700",
  },
};

const sections: Section[] = [
  {
    id: "classroom",
    title: "Inside the Classroom",
    eyebrow: "Live teaching",
    blurb:
      "Small batches. Patient mentors. Real concept clarity - not scripted lectures.",
    icon: <BookOpen className="h-5 w-5" />,
    accent: "teal",
    photos: [
      { file: "g02.jpg", alt: "Teacher leading a discussion at ESA Rohini", caption: "Mid-morning batch in session" },
      { file: "g06.jpg", alt: "Students focused in ESA classroom", caption: "Concept building, one chapter at a time" },
      { file: "g09.jpg", alt: "Teacher engaging a junior class", caption: "Doubts welcomed, questions encouraged" },
      { file: "g10.jpg", alt: "Combined class session at ESA", caption: "When everyone stays after the bell" },
    ],
  },
  {
    id: "tests",
    title: "Weekly Test Day",
    eyebrow: "Saturdays at ESA",
    blurb:
      "Matching ESA tees. Real exam-pattern papers. Weekly chapter tests that build board confidence.",
    icon: <Pencil className="h-5 w-5" />,
    accent: "indigo",
    photos: [
      { file: "g07.jpg", alt: "ESA students in uniform writing weekly test", caption: "Eyes on paper, pens moving" },
      { file: "g31.jpg", alt: "Middle-school students writing weekly test", caption: "Middle-school batch, full focus" },
      { file: "g32.jpg", alt: "Junior batch test in progress", caption: "Junior batch, pens in hand" },
      { file: "g33.jpg", alt: "Senior batch test in ESA uniform", caption: "Senior batch in matching ESA tees" },
      { file: "g34.jpg", alt: "Wide view of test day at ESA", caption: "Whole batch, one paper" },
    ],
  },
  {
    id: "puja",
    title: "Festivals at ESA",
    eyebrow: "Pooja, Diwali, sweets exchange",
    blurb:
      "We light diyas together, share sweets across batches, and seek blessings before the academic year. Festivals at ESA feel like a family gathering.",
    icon: <Flame className="h-5 w-5" />,
    accent: "amber",
    photos: [
      { file: "g00.jpg", alt: "Saraswati Puja preparation at ESA Rohini", caption: "Aarti thali ready, flowers in place" },
      { file: "g12.jpg", alt: "Puja being performed at ESA", caption: "Pandit ji leading the rituals" },
      { file: "g16.jpg", alt: "Faculty and students at the puja", caption: "Faculty and students offering prayers" },
      { file: "g03.jpg", alt: "Ceremony underway at ESA centre", caption: "A quiet moment before classes resume" },
      { file: "g05.jpg", alt: "Group gathered around the puja thali", caption: "Whole team, one prayer" },
      { file: "g08.jpg", alt: "Faculty seated around the puja aarti thali", caption: "Sitting around the aarti thali together" },
      { file: "g52.jpg", alt: "Havan ceremony with faculty around the couple", caption: "Havan ceremony, faculty seated together" },
      { file: "g38.jpg", alt: "Lighting diyas at ESA centre on Diwali", caption: "Lighting diyas at the reception" },
      { file: "g50.jpg", alt: "Havan ceremony with sacred fire at ESA", caption: "Havan, sacred fire kindled" },
      { file: "g53.jpg", alt: "Faculty seated around the havan kund", caption: "Sitting together for the havan" },
      { file: "g40.jpg", alt: "Sweet box gifted to ESA founder during festival", caption: "Sweet boxes exchanged on Diwali" },
      { file: "g39.jpg", alt: "Faculty exchanging festival sweets", caption: "Mithai over the reception desk" },
      { file: "g41.jpg", alt: "Festival sweet exchange at ESA", caption: "Haldiram boxes doing the rounds" },
      { file: "g43.jpg", alt: "Faculty receiving sweets at ESA", caption: "Receiving festival mithai" },
      { file: "g44.jpg", alt: "Founder and faculty with sweet box", caption: "Founder and faculty share Diwali sweets" },
      { file: "g45.jpg", alt: "Festival sweet exchange between three", caption: "Mithai exchange, three-way" },
      { file: "g46.jpg", alt: "Founder hands sweet box to young alumni", caption: "Festival blessings, founder to alumnus" },
      { file: "g47.jpg", alt: "Faculty giving festival sweets to a student", caption: "Faculty share sweets with seniors" },
    ],
  },
  {
    id: "independence",
    title: "Independence Day",
    eyebrow: "Tricolour at the centre",
    blurb:
      "Children with little flags, founder and faculty in white - August 15 at ESA is more than a holiday.",
    icon: <Flag className="h-5 w-5" />,
    accent: "red",
    photos: [
      { file: "g13.jpg", alt: "ESA students with Indian flags on Independence Day", caption: "Two little patriots up front" },
      { file: "g14.jpg", alt: "ESA team posing with Indian flags", caption: "Whole batch ready for the photo" },
      { file: "g21.jpg", alt: "Independence Day group at ESA Rohini", caption: "Hands on flags, smiles on faces" },
    ],
  },
  {
    id: "teachers-day",
    title: "Teachers' Day",
    eyebrow: "Sept 5 at ESA",
    blurb:
      "Hand-written banners, surprise gifts and selfies that mean more than any board ranking.",
    icon: <Heart className="h-5 w-5" />,
    accent: "rose",
    photos: [
      { file: "g27.jpg", alt: "Teachers' Day selfie with ESA faculty", caption: "Happy Teachers' Day, sir & ma'am" },
      { file: "g04.jpg", alt: "Whole batch posing on Teachers' Day at ESA", caption: "Whole batch in front of the Happy Teachers board" },
      { file: "g19.jpg", alt: "Group photo on Teachers' Day at ESA", caption: "One frame, the whole batch" },
      { file: "g22.jpg", alt: "Faculty line-up on Teachers' Day", caption: "Faculty line-up, freshly cheered" },
      { file: "g17.jpg", alt: "Faculty portrait at ESA Rohini", caption: "The mentors behind the marks" },
      { file: "g35.jpg", alt: "Teachers' Day batch selfie at ESA", caption: "Happy Teachers backboard, full crew" },
      { file: "g36.jpg", alt: "Crowded Teachers' Day selfie", caption: "Students lean in for the frame" },
      { file: "g42.jpg", alt: "Faculty group with Happy Teachers banner", caption: "Faculty against the kids' Teachers Day banner" },
    ],
  },
  {
    id: "birthdays",
    title: "Birthdays at ESA",
    eyebrow: "Cake, cheers, claps",
    blurb:
      "Every birthday gets cut at the centre. Every child - junior or senior - gets a cake, a clap and a photo.",
    icon: <Cake className="h-5 w-5" />,
    accent: "rose",
    photos: [
      { file: "g25.jpg", alt: "Child cutting birthday cake at ESA", caption: "The cake-cutting moment" },
      { file: "g20.jpg", alt: "Birthday celebration with applause at ESA", caption: "Claps that echo across the floor" },
      { file: "g18.jpg", alt: "Group celebrating a birthday at ESA", caption: "Faculty queue up for cake" },
      { file: "g23.jpg", alt: "Cake being shared at ESA", caption: "Plates, slices, joy" },
      { file: "g24.jpg", alt: "Group selfie at ESA birthday party", caption: "Selfie with the whole crew" },
      { file: "g28.jpg", alt: "Birthday cake celebration at ESA", caption: "Sweetness travels around the room" },
      { file: "g49.jpg", alt: "Birthday cake at ESA reception", caption: "Yellow cake, three smiles" },
      { file: "g51.jpg", alt: "Faculty celebrating a birthday with flowers", caption: "Flowers and cake, faculty-style" },
      { file: "g48.jpg", alt: "Birthday celebration group with cake", caption: "Whole crew around the table" },
    ],
  },
  {
    id: "selfies",
    title: "Selfies With Our Mentors",
    eyebrow: "Off-camera moments",
    blurb:
      "Some of our favourite photos are the unplanned ones - after class, with the teachers students miss the most.",
    icon: <GraduationCap className="h-5 w-5" />,
    accent: "teal",
    photos: [
      { file: "g15.jpg", alt: "Group selfie with ESA faculty", caption: "Last day of the year - phone goes up" },
      { file: "g26.jpg", alt: "Students surround their favourite ma'am", caption: "Crowd around the favourite ma'am" },
    ],
  },
  {
    id: "centre",
    title: "Our Centres",
    eyebrow: "Three branches across North Delhi",
    blurb:
      "Rohini Sector 7, Rohini Sector 15 and Shakurpur. Look for the bright yellow ESA board - you're there.",
    icon: <MapPin className="h-5 w-5" />,
    accent: "ink",
    photos: [
      { file: "g30.jpg", alt: "ESA Rohini Sector 7 signboard from below", caption: "Rohini Sector 7 - the board from the metro side" },
      { file: "g29.jpg", alt: "ESA Class XI and XII signboard at Rohini", caption: "Class XI & XII facade" },
      { file: "g54.jpg", alt: "ESA Shakurpur new branch exterior at night", caption: "New Shakurpur branch, lit up at night" },
      { file: "g01.jpg", alt: "ESA Sector 7 entrance", caption: "Entrance to the Sector 7 centre" },
      { file: "g55.jpg", alt: "Welcome to ESA achievement board with toppers", caption: "Welcome board with our recent toppers" },
      { file: "g56.jpg", alt: "ESA achievement banner across the building", caption: "Toppers banner running across the building" },
      { file: "g37.jpg", alt: "Excellent Students Academy promotional poster", caption: "ESA poster - facilities at a glance" },
      { file: "g11.jpg", alt: "Welcome corner inside ESA", caption: "Welcome corner inside our office" },
    ],
  },
];

function MosaicGrid({
  photos,
  onOpen,
}: {
  photos: Photo[];
  onOpen: (file: string) => void;
}) {
  // Slightly larger first tile for visual rhythm
  return (
    <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:auto-rows-[240px] lg:grid-cols-4">
      {photos.map((p, idx) => {
        const big = idx === 0 && photos.length >= 3;
        return (
          <button
            key={p.file}
            type="button"
            onClick={() => onOpen(p.file)}
            aria-label={`Open photo: ${p.caption}`}
            className={`group relative overflow-hidden rounded-2xl bg-neutral-100 outline-none transition focus-visible:ring-2 focus-visible:ring-teal-500 ${
              big ? "col-span-2 row-span-2" : ""
            }`}
          >
            <Image
              src={`/gallery/${p.file}`}
              alt={p.alt}
              fill
              sizes={
                big
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              }
              className="object-cover transition duration-500 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-semibold text-white drop-shadow-md">
                {p.caption}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export function GalleryClient() {
  const [openFile, setOpenFile] = useState<string | null>(null);

  const allPhotos: Photo[] = useMemo(
    () => sections.flatMap((s) => s.photos),
    [],
  );
  const lightboxItems: LightboxItem[] = useMemo(
    () =>
      allPhotos.map((p) => {
        const section = sections.find((s) =>
          s.photos.some((sp) => sp.file === p.file),
        );
        return {
          image: `/gallery/${p.file}`,
          name: p.caption,
          eyebrow: section?.title,
          meta: section?.eyebrow,
        };
      }),
    [allPhotos],
  );
  let openIndex: number | null = null;
  if (openFile !== null) {
    const found = allPhotos.findIndex((p) => p.file === openFile);
    openIndex = found >= 0 ? found : null;
  }

  return (
    <>
      {/* Quick category jump */}
      <section className="sticky top-20 z-30 border-y border-neutral-200 bg-white/85 backdrop-blur-md">
        <Container>
          <div className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sections.map((s) => {
              const a = accentStyles[s.accent];
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition hover:scale-[1.02] ${a.chip}`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${a.iconBg} ${a.iconText}`}>
                    {s.icon}
                  </span>
                  {s.title}
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16 sm:py-20">
        <Container>
          <div className="space-y-20 sm:space-y-24">
            {sections.map((s) => {
              const a = accentStyles[s.accent];
              return (
                <div key={s.id} id={s.id} className="scroll-mt-40">
                  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <div
                        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${a.chip}`}
                      >
                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${a.iconBg} ${a.iconText}`}
                        >
                          {s.icon}
                        </span>
                        {s.eyebrow}
                      </div>
                      <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                        {s.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-charcoal-soft sm:text-base">
                        {s.blurb}
                      </p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
                      {s.photos.length} photos
                    </span>
                  </div>
                  <MosaicGrid
                    photos={s.photos}
                    onOpen={(file) => setOpenFile(file)}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <PhotoLightbox
        items={lightboxItems}
        openIndex={openIndex}
        onClose={() => setOpenFile(null)}
        onIndexChange={(i) => setOpenFile(allPhotos[i]?.file ?? null)}
      />
    </>
  );
}
