import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
};

const SearchBar = ({ searchTerm, onSearchTermChange,  }: Props) => {
  return (
    <div className={cn("relative w-full max-w-55")}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
      <Input
        type="search"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        className="w-full pl-9 border-zinc-600 focus-visible:ring-1 focus-visible:ring-zinc-500 [&::-webkit-search-cancel-button]:hidden" // Full width within max-w-80 container
      />
    </div>
  );
};

export default SearchBar;