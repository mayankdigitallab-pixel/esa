"use client";

import { CardCarousel } from "@/components/CardCarousel";
import { BranchCard } from "@/components/BranchesGrid";
import type { Centre } from "@/data/centres";

type Props = {
  centres: Centre[];
  tone?: "dark" | "light";
  autoplayMs?: number;
};

export function BranchesCarousel({
  centres,
  tone = "light",
  autoplayMs = 5000,
}: Props) {
  return (
    <CardCarousel
      lgCards={3}
      mdCards={2}
      tone={tone}
      ariaLabel="ESA branches across Delhi and Lucknow"
      autoplayMs={autoplayMs}
      loop
    >
      {centres.map((c) => (
        <BranchCard key={c.slug} centre={c} />
      ))}
    </CardCarousel>
  );
}
