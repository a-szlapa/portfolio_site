import * as fs from 'fs';
interface Link{
    label: string,
    url: string
}
// Define the interface for your data structure
interface PortfolioItem {
    imageUrl: string;
    title: string;
    description: string;
    tags: string[];
    links: Link[];
    projectType: string;
    date: string;
}

// Function to parse the CSV data
function parseCSV(csvData: string): PortfolioItem[] {
    const lines = csvData.split('\n');
    const headers = lines[0].split('\t').map(header => header.trim());
    const result: PortfolioItem[] = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim() === '') continue;
        
        const values = lines[i].split(',');
        
        const item: Partial<PortfolioItem> = {};
        item.imageUrl = values[0]
        item.title = values[1]
        item.description = values[2]
        item.tags = values[3].slice(1, -1).split("><")
        item.links = []
        values[4].slice(1, -1).split("><").forEach(element => {
            
            if (item.links){
                item.links.push({label: element.split("\\")[0], url: element.split("\\")[1]} as Link)
            }
        });
        item.projectType = values[5].replace('\r', '')
        item.date = values[6].replace('\r', '')
        
        
        if (item.imageUrl && item.title) {
            result.push(item as PortfolioItem);
        }
    }
    return result;
}

export default parseCSV;