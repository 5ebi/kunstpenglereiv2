import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, children, className = "" }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {eyebrow ? <p className="label mb-4">{eyebrow}</p> : null}
      <h2 className="max-w-3xl">{children}</h2>
    </div>
  );
}
