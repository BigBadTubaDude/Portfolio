import { getPortfolioEntries } from "../../fetchfunctions";
import { useQuery } from "@tanstack/react-query";

export default function usePortfolioEntries() {
    return useQuery({
        queryKey: ["portfolioEntries"],
        queryFn: getPortfolioEntries,
    });
}
