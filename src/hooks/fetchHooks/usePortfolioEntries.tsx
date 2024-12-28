import { getPortfolioEntries } from "../../fetchfunctions";
import { useQuery } from "@tanstack/react-query";
import { ProjectEntry, ProjectAssetReceived } from "../../types";
export function usePortfolioEntries() {
    return useQuery({
        queryKey: ["portfolioEntries"],
        queryFn: getPortfolioEntries,
        select  : data => {
            const portfolioEntries = data.items.map((entry: ProjectEntry) => {
                return {
                    id: entry.sys.id,
                    ...entry.fields
                }
        })
            const portfolioAssets = data.includes.Asset.map((asset: ProjectAssetReceived) => {
                return {
                    id: asset.sys.id,
                    ...asset.fields
                }
            })
            const portfolioCategories: string[]= [...new Set(data.items.flatMap((entry: ProjectEntry) => entry.fields.tags ?? []) as string[])]
    
            return {
                items : portfolioEntries,
                assets : portfolioAssets,
                categories : portfolioCategories,
            }
        }
    });
}
