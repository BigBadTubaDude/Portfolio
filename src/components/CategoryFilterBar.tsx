interface CategoryFilterBarProps {
    selectedCategories: string[];
    setSelectedCategories: (categories: string[]) => void;
  }

import { usePortfolioEntries } from "../hooks/fetchHooks/usePortfolioEntries";
export function CategoryFilterBar({
    selectedCategories, setSelectedCategories
} : CategoryFilterBarProps) {
    const { data: portfolioEntries } = usePortfolioEntries();
    const projectCategories: string[] = portfolioEntries?.categories || []


    return (
        <header>
            <nav>
                {
                    projectCategories.map(category => {
                        return (<button className={selectedCategories.includes(category) ? "selected" : ""}
                            key={category}
                            onClick={() => setSelectedCategories((old: string[]) => old.includes(category) ? old.filter((item: string) => item !== category) : [category, ...old])}
                        >
                            {category}
                        </button>)
                    })
                }
            </nav>
        </header>
    )
}