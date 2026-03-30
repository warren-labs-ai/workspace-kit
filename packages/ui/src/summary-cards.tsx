export interface SummaryItem {
  label: string;
  count: number;
  description: string;
  color: "green" | "amber" | "red";
}

interface SummaryCardsProps {
  items: SummaryItem[];
}

const borderColors: Record<SummaryItem["color"], string> = {
  green: "border-l-green-500",
  amber: "border-l-amber-500",
  red: "border-l-red-500",
};

const textColors: Record<SummaryItem["color"], string> = {
  green: "text-green-700",
  amber: "text-amber-700",
  red: "text-red-700",
};

export function SummaryCards({ items }: SummaryCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rounded-lg border border-gray-200 border-l-[3px] bg-white px-6 py-5 ${borderColors[item.color]}`}
        >
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-medium text-gray-600">{item.label}</p>
            <p className={`text-2xl font-semibold ${textColors[item.color]}`}>
              {item.count}
            </p>
          </div>
          <p className="mt-1 text-xs text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
