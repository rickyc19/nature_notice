import { FunctionComponent } from "react";
import ParentBox from "../components/ParentBox";
import BannerAd from "../components/BannerAd";
import TabLabel from "../components/TabLabel";
import FrameComponent from "../components/FrameComponent";
import "./Homepage.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <main className="list-item-parent">
        <header className="list-item">
          <ParentBox />
          <BannerAd />
        </header>
        <section className="range-slider">
          <TabLabel />
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Homepage;
