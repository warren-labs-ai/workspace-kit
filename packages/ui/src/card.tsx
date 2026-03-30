import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  padding?: string;
}

export function Card({
  title,
  padding = "px-6 py-6",
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${padding} ${className}`}
      {...props}
    >
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-gray-900">{title}</h3>
      )}
      {children}
    </div>
  );
}
