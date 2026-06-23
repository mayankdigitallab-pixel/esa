import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
  FolderOpen,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageBanner, BannerStatsRight } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  classMaterials,
  materialGroups,
  type ClassMaterial,
  type MaterialGroupMeta,
} from "@/data/materials";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Study Materials | Class 1 to 12 PDF Notes Download | ESA Rohini",
  description:
    "Download class-wise study material PDFs from Excellent Students' Academy Rohini. Chapter notes, sample papers, mock tests and revision sheets for Class 1 to 12.",
  alternates: { canonical: "https://www.theesa.in/materials" },
  keywords: [
    "study material PDF Rohini",
    "Class 10 notes PDF download",
    "Class 12 sample papers PDF",
    "CBSE board notes Rohini",
    "ESA Rohini downloads",
    "free study material coaching Delhi",
  ],
};

const accentClass = {
  teal: {
    pill: "bg-teal-500/10 text-teal-700 border-teal-200",
    chip: "bg-teal-500 text-white",
    halo: "#00BCD4",
    ring: "ring-teal-300",
    hoverBorder: "hover:border-teal-400",
    cardBg: "linear-gradient(135deg,#E0F7FA 0%,#FFFFFF 60%)",
    icon: "text-teal-600",
  },
  red: {
    pill: "bg-red-500/10 text-red-700 border-red-200",
    chip: "bg-red-500 text-white",
    halo: "#E53935",
    ring: "ring-red-300",
    hoverBorder: "hover:border-red-400",
    cardBg: "linear-gradient(135deg,#FFEBEE 0%,#FFFFFF 60%)",
    icon: "text-red-600",
  },
  amber: {
    pill: "bg-amber-500/10 text-amber-800 border-amber-200",
    chip: "bg-amber-500 text-white",
    halo: "#F59E0B",
    ring: "ring-amber-300",
    hoverBorder: "hover:border-amber-400",
    cardBg: "linear-gradient(135deg,#FEF3C7 0%,#FFFFFF 60%)",
    icon: "text-amber-700",
  },
  ink: {
    pill: "bg-neutral-900/5 text-charcoal border-neutral-300",
    chip: "bg-charcoal text-white",
    halo: "#3D3D3D",
    ring: "ring-neutral-300",
    hoverBorder: "hover:border-charcoal",
    cardBg: "linear-gradient(135deg,#F5F5F5 0%,#FFFFFF 60%)",
    icon: "text-charcoal",
  },
} as const;

function ClassCard({
  item,
  accent,
}: {
  item: ClassMaterial;
  accent: keyof typeof accentClass;
}) {
  const a = accentClass[accent];
  const isPlaceholder = item.driveUrl.includes("REPLACE_WITH_FOLDER_ID");
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${a.hoverBorder} sm:p-7`}
      style={{ background: a.cardBg }}
    >
      <span
        className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full opacity-25 blur-3xl"
        style={{ background: a.halo }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold shadow-md ${a.chip}`}>
          {item.classNum}
        </div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${a.pill}`}
        >
          <FileText className="h-3 w-3" />
          PDF Folder
        </span>
      </div>

      <h3 className="relative mt-5 text-2xl font-bold tracking-tight text-charcoal">
        {item.label}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-charcoal-soft">
        {item.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {item.subjects.slice(0, 6).map((s) => (
          <span
            key={s}
            className="rounded-md border border-neutral-200 bg-white/85 px-2.5 py-1 text-[11px] font-medium text-charcoal-soft"
          >
            {s}
          </span>
        ))}
        {item.subjects.length > 6 && (
          <span className="rounded-md bg-white/85 px-2.5 py-1 text-[11px] font-medium text-charcoal-soft">
            +{item.subjects.length - 6} more
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-3">
        {isPlaceholder ? (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal-soft">
            <ShieldCheck className="h-4 w-4 text-teal-500" />
            PDFs uploading soon
          </span>
        ) : (
          <a
            href={item.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition group-hover:text-red-600"
          >
            Open Drive folder
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        <Link
          href={whatsappLink(
            `Hello ESA, please share ${item.label} study material PDFs.`,
          )}
          target="_blank"
          aria-label={`Ask on WhatsApp for ${item.label} materials`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-charcoal transition hover:border-teal-400 hover:text-teal-700"
        >
          <Download className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function GroupSection({ group }: { group: MaterialGroupMeta }) {
  const items = classMaterials.filter((c) => c.group === group.id);
  const a = accentClass[group.accent];

  return (
    <section id={group.id} className="scroll-mt-24">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-neutral-200 pb-5">
        <div>
          <p
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] ${a.pill}`}
          >
            <Sparkles className="h-3 w-3" />
            {group.range}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            {group.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-charcoal-soft sm:text-base">
            {group.subtitle}
          </p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-soft">
          {items.length} class{items.length > 1 ? "es" : ""}
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <ClassCard key={c.slug} item={c} accent={group.accent} />
        ))}
      </div>
    </section>
  );
}

export default function MaterialsPage() {
  const totalClasses = classMaterials.length;

  return (
    <div>
      <PageBanner
        label="Study Materials"
        image="/gallery/g07.jpg"
        imageAlt="ESA Rohini students working on chapter test material"
        heading={<>Class-wise PDF study material for every ESA student.</>}
        subtitle="Chapter notes, weekly worksheets, sample papers, mock tests and revision packs. Curated by ESA faculty and shared as Google Drive folders you can open from your phone."
        right={
          <BannerStatsRight
            stats={[
              { value: `${totalClasses}`, label: "Classes covered" },
              { value: "12+", label: "Subjects" },
              { value: "Free", label: "For ESA students" },
              { value: "PDF", label: "Open on any device" },
            ]}
          />
        }
      />

      <section className="border-t border-neutral-200 bg-white py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <FolderOpen className="h-6 w-6" />,
                title: "Pick your class",
                copy: "Find your class card below and tap to open its Drive folder.",
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Download what you need",
                copy: "Open chapter notes, sample papers or mock tests right in the browser.",
              },
              {
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Practice and revise",
                copy: "Print, solve and bring your doubts to the next class - we will clear them.",
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-teal-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold tracking-[0.2em] text-charcoal-soft">
                    STEP 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Choose your class"
            title={<>One folder per class. Notes, papers and mock tests inside.</>}
            description="Material is grouped into Foundation (Class 1-5), Middle (6-8), Board Prep (9-10) and Senior Secondary (11-12)."
          />
          <div className="space-y-16">
            {materialGroups.map((g) => (
              <GroupSection key={g.id} group={g} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-200 bg-charcoal py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-teal-300">
                Can&rsquo;t find what you need?
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Tell us the chapter, we&rsquo;ll share the PDF on WhatsApp.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
                Drop us a message with your class, subject and the chapter you need. Our team will share the exact notes, previous year paper or mock test within a few hours.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={whatsappLink(
                    "Hello ESA, please share study material PDFs. Class: ___ Subject: ___ Chapter: ___",
                  )}
                  target="_blank"
                  className="btn-primary"
                >
                  Request on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact#enquiry" className="btn-on-teal">
                  Book a Free Demo
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                What&rsquo;s inside the folders
              </p>
              <ul className="mt-5 space-y-4 text-sm text-white/85">
                {[
                  "NCERT-aligned chapter notes",
                  "Previous year board papers + solutions",
                  "Weekly chapter test papers",
                  "Mock exams under board pattern",
                  "Formula sheets and quick-revision packs",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
