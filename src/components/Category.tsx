import { Project } from "./Project";
// import {usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'

export function Category() {
    const { data: portfolioEntries } = usePortfolioEntries();
    {portfolioEntries?.items?.map((entry) => {
        return <Project entry={entry}/>
    })}
}