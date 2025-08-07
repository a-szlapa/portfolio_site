
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Code2, 
  SquareArrowOutUpRight,
  PenTool
} from 'lucide-react';
import { GitHubIcon } from '../custom-icons/GitHubIcon';
import { FigmaIcon } from "../custom-icons/FigmaIcon";

const projectTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    art: Palette,
    design: PenTool,
    code: Code2
  // Add more mappings as needed
};

const knownExternalLinks: Record<string, React.ComponentType<{ className?: string }>> = {
    github: GitHubIcon,
    figma: FigmaIcon,
    default: SquareArrowOutUpRight,
  // Add more mappings as needed
};

interface LinkItem {
    url: string;
    label: string;
}

interface Props {
    imageUrl?: string;
    title: string;
    description: string;
    tags?: string[];
    links?: LinkItem[];
    date?: string;
    projectType?: string;
}

const getDomainIcon = (url: string) => { //confusing domain extraction
    const domain = url
    .replace(/^(https?:\/\/)?(www\.)?/, '')
    .split('/')[0]
    .split('.')[0];
    const IconComponent = knownExternalLinks[domain] || knownExternalLinks["default"]
    return <IconComponent className="w-5 h-5" />; 
}

const Tile = ({ 
    imageUrl, 
    title, 
    description, 
    tags = [], 
    links = [], 
    date,
    projectType
}: Props) => {
    return (
        <div className="bg-transparent w-fill">
            {/* Image section */}
            {
                <div className="w-full overflow-hidden">
                    <img 
                        src={imageUrl || 'https://placehold.co/600x500'} 
                        alt={title || 'Untitled Project'} 
                        
                        className="rounded-2xl w-full h-full object-cover \"
                        loading="lazy"
                    />
                </div>
            }
            
            {/* Content section */}
            <div className="pt-3 flex flex-col gap-2">
                {/* Text section */}
                <div className="flex flex-row justify-between">
                    <div>
                        {/* Title */}
                        <h3 className="text-base font-semibold text-white">
                            {title || 'Untitled Project'}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-400">
                            {description || "no description"}
                        </p>
                    </div>
                    <div className='flex flex-col items-end gap-2.5'>
                        {/* Date */}
                        {
                            <p className="text-sm text-gray-400">
                                {date || "xx.xx.xxxx"}
                            </p>
                        }
                        
                        {/* Project Type Icon */}
                        {
                            <p title={"project type: "+projectType}>
                                {projectType && (
                                    <>
                                        {(() => {
                                            const IconComponent = projectTypeIcons[projectType.toLowerCase()];
                                            return <IconComponent className="w-6 h-6 text-white" />;
                                        })()}
                                    </>
                                )}
                            </p>
                        }
                    </div>


                    

                </div>
                {/* Tags */}
                {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className='text-white border-[#A5E773] bg-[#7BB94A]/30'>
                            {tag}
                        </Badge>
                    ))}
                </div>
                )}
                
                {/* Links */}
                {links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-zinc-400 hover:text-[#A5E773]"
                        >
                            {link && (
                                <span className="mr-1 flex gap-1.5 items-center">
                                    
                                    {link.url && (
                                        <>
                                            {
                                                getDomainIcon(link.url)
                                            }
                                        </>
                                    )}
                                    {link.label}
                                </span>
                            )}
                        </a>
                    ))}
                </div>
                )}
            </div>
        </div>
    );
};

export default Tile;