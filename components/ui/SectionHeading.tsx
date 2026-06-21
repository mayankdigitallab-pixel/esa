import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "mb-14 max-w-2xl space-y-5",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            dark && "text-teal-300",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-charcoal",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            dark ? "text-neutral-300" : "text-charcoal-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
