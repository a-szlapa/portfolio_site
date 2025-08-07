import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Code2, Palette, PenTool, type LucideIcon } from "lucide-react";

interface Props {
  activeFilter: string;
  onFilterChange: (value: string) => void;
}

interface FilterItem {
    value: string,
    label: string,
    icon?: LucideIcon
}

const filterItems : FilterItem[] = [
    {value: "all", label: "All projects"},
    {value: "design", label: "Design", icon: PenTool},
    {value: "development", label: "Development", icon: Code2},
    {value: "art", label: "Art", icon: Palette},
]

export function FilterToggle({ activeFilter, onFilterChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      value={activeFilter}
      onValueChange={onFilterChange}
      className="flex flex-row"//removes
    >
      {filterItems.map((item) => (
        <ToggleGroupItem
          key={item.value}
          value={item.value}
          aria-label={`Toggle ${item.label}`}
          className={`h-8 px-3 min-w-max text-sm transition-all flex flex-row items-center duration-300 data-[state=on]:text-black data-[state=on]:shadow-lg data-[state=on]:shadow-green-500/25 ${
            activeFilter === item.value
              ? "bg-[#A5E773]"
              : "text-zinc-300 hover:text-[#A5E773] hover:bg-green-500/10"
          }`}
        >   
            {item.icon && (
                <div className="h-5 w-5 flex items-center">
                    <item.icon className="h-full w-full" />
                </div>
            )}
            
            
            <p>{item.label}</p>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}