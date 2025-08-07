import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
};

const SearchBar = ({ searchTerm, onSearchTermChange,  }: Props) => {
  return (
    <div className={cn("relative w-full max-w-80")}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        className="w-full pl-9 border-zinc-400 focus-visible:ring-1 focus-visible:ring-zinc-500 [&::-webkit-search-cancel-button]:hidden" // Full width within max-w-80 container
      />
    </div>
  );
};

export default SearchBar;