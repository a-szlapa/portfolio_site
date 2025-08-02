import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  icon: LucideIcon;
  text: ReactNode;
  iconSize?: number;
  textSize?: string;
  className?: string;
};

const IconBadge = ({
  icon: Icon,
  text,
  className = "text-zinc-300 bg-transparent",
}: Props) => {
  return (
    <Badge className={`px-0 ${className}`}>
      <div className={`w-6 h-6`}>
        <Icon className="w-full h-full" />
      </div>
      <span className="text-base">{text}</span>
    </Badge>
  );
};

export default IconBadge;