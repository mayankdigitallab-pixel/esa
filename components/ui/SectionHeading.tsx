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
        "mb-12 max-w-3xl space-y-4",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            isCenter && "justify-center",
          )}
        >
          <span className="eyebrow">{eyebrow}</span>
          <span className="gold-divider" />
        </div>
      ) : null}
      <h2
        className={cn(
          "text-4xl font-semibold leading-tight tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-navy-900",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            dark ? "text-navy-100" : "text-body",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
