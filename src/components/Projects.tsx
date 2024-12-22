import { Category } from "./Category"
import {usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'

export function Projects() {
    const { data: portfolioEntries } = usePortfolioEntries();
    // Get list of unique categories the projects fall under
    const projectCategories : Array<string> =  portfolioEntries?.categories
    return (
        <main>
                {!portfolioEntries ? "Loading..." : projectCategories.map(category => <Category key={category} category={category}/>)}
        </main>
)
}