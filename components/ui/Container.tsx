import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1480px] px-4 sm:px-5 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
