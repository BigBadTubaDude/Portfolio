import { useMemo } from "react";
import { Project } from "./Project";
// import {usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'
import {usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'
export function Category({category}) {
    const { data: portfolioEntries } = usePortfolioEntries();
    const categoryProjects = useMemo(() => portfolioEntries?.items?.filter(entry => entry?.tags?.includes(category)), [portfolioEntries]
)
    return <section>
        <h2>{category}</h2>
    {categoryProjects?.map((entry) => {
        return <Project entry={entry} key={`${category}${entry.projectName}`}/>
    })}
    </section>
}