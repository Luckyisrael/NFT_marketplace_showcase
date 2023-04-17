import React from "react";
import assets from './assets'
import styles from "./styles/Global";
import { Download, SectionWrapper, Features } from './components'
const App = () => {
  return (
      <>
        <SectionWrapper
          title='Your own store of Native NFTs. Start Selling & Growing Today'
          description = 'Buy, Store, Collect NFTs, Exchange & Earn Crypto. Join 25+ Million People using ProNef Marketplace'
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
          />

        <SectionWrapper
          title='Smart User Interface Marketplace'
          description = 'Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design'
          mockupImg={assets.homeCards}
          reverse
          />

        <Features />

        <SectionWrapper
          title='Deployment'
          description = "ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
          mockupImg={assets.feature}
          reverse
          />

        <SectionWrapper
          title='Built with React Native'
          description = 'The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT with search functionality.'
          mockupImg={assets.mockup}
          banner='banner02'
          />

        <Download  />

        <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
          <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className="bold">
            Me</span></p>
        </div>
      </>
  );
}

export default App;
