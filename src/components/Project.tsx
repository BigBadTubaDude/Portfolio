import { usePortfolioEntries} from '../hooks/fetchHooks/usePortfolioEntries'
type Asset = {
    sys : {
      id: string,
      linkType: "Asset",
      type: "Link" 
    }
  }
export function Project({entry}) {
    const { data: portfolioEntries } = usePortfolioEntries();
    // Get ids of assets associated with this project
    const demoMediaAssetIDs = entry.demoMedia?.map(
        (asset : Asset) => {
          return asset.sys.id
        }
    );
    // Use asset ids to get assets
    const demoMediaAssets = portfolioEntries?.assets.filter(
        (item) => demoMediaAssetIDs?.includes(item.id)
    );
    return (
        <article>
            <header>{entry.projectName}</header>
            {demoMediaAssets?.map((asset) => (
                <img 
                  key={asset.id} 
                  src={asset.file.url} 
                />
            ))}
        </article>
    );
}