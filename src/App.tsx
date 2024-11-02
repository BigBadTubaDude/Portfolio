import "./App.css";
import "./reset.css";

import usePortfolioEntries from "./hooks/fetchHooks/usePortfolioEntries";

type Asset = {
  sys : {
    id: string,
    linkType: "Asset",
    type: "Link" 
  }
}

function App() {
    const { data: portfolioEntries } = usePortfolioEntries();
    return (
        <>
            <div id="intro">
                <h1>Programming Portfolio</h1>
                <p id="nameInfo">Name: Coleman Alexander</p>
                <p id="emailInfo">Email: Bigbadtubadude@gmail.com</p>
                <p id="phoneInfo" className="rightInfo">
                    Phone: 864-633-9727
                </p>
                <p id="majorInfo" className="rightInfo">
                    Major: Software and Web Development
                </p>
            </div>
            {portfolioEntries?.items?.map((entry) => {
                const demoMediaAssetIDs = entry.demoMedia.map(
                    (asset : Asset) => {
                      console.log(asset)
                      return asset.sys.id
                    }
                );
                const demoMediaAssets = portfolioEntries?.assets.filter(
                    (item) => demoMediaAssetIDs.includes(item.id)
                );
                return (
                    <>
                        <h1>{entry.projectName}</h1>
                        {demoMediaAssets.map((asset) => (
                            <img 
                              key={asset.id} 
                              src={asset.file.url} 
                            />
                        ))}
                    </>
                );
            })}
        </>
    );
}

export default App;
