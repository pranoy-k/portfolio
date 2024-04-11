import type { ReactNode } from "react";

export default function ToolGrid({
  children,
  sector,
}: {
  children: ReactNode;
  sector: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border-2 border-border p-2">
      <div className="flex flex-wrap gap-2">{children}</div>
      <p className="text-xs md:text-center text-muted-foreground">{sector}</p>
    </div>
  );
}
