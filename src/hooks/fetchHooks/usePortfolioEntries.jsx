import { getPortfolioEntries } from "../../fetchfunctions";
import { useQuery } from "@tanstack/react-query";

export function usePortfolioEntries() {
    return useQuery({
        queryKey: ["portfolioEntries"],
        queryFn: getPortfolioEntries,
        select  : data => {
            const portfolioEntries = data.items.map(entry => {
                return {
                    id: entry.sys.id,
                    ...entry.fields
                }
        })
            const portfolioAssets = data.includes.Asset.map(asset => {
                return {
                    id: asset.sys.id,
                    ...asset.fields
                }
            })
            const portfolioCategories = [...new Set(data.items.flatMap(item => item.fields.tags ?? []))]
    
            return {
                items : portfolioEntries,
                assets : portfolioAssets,
                categories : portfolioCategories,
            }
        }
    });
}
