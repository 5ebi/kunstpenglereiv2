import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
};

export function Container({ children, className = "", narrow = false }: Props) {
  const max = narrow ? "max-w-[680px]" : "max-w-[1280px]";
  return (
    <div className={`${max} mx-auto px-5 md:px-10 ${className}`}>{children}</div>
  );
}
