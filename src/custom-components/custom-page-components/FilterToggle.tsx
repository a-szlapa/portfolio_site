import { Code2, Palette, PenTool, type LucideIcon } from "lucide-react";

interface Props {
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

interface FilterItem {
  value: string;
  label: string;
  icon?: LucideIcon;
}

const filterItems: FilterItem[] = [
  { value: "all", label: "All projects" },
  { value: "design", label: "Design", icon: PenTool },
  { value: "development", label: "Development", icon: Code2 },
  { value: "art", label: "Art", icon: Palette },
];

export function FilterToggle({ activeFilter, onFilterChange }: Props) {
  return (
    <div className="flex flex-row gap-1 p-1 rounded-md bg-zinc-900">
      {filterItems.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onFilterChange(item.value)}
          aria-label={`Filter ${item.label}`}
          className={`px-3 py-1 min-w-max text-sm transition-all flex flex-row items-center duration-300 rounded-md ${
            activeFilter === item.value
              ? "bg-[#A5E773] text-black shadow-lg shadow-green-500/25"
              : "text-zinc-300 hover:text-[#A5E773] hover:bg-green-500/10"
          }`}
        >
          {item.icon && (
            <item.icon className="w-5 h-5 mr-2" />
          )}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}