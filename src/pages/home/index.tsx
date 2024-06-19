import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
import Hero from "../../assets/hero.png";
import { BesideHeroImg, HBContainer, HeroImgContainer } from "./style";
import MyServiceTabs from "../../components/shared/myServices";
import FeaturedWorks from "../../components/shared/featuredWorks";
import Lion from "../../assets/px.jpg";
const tapes = [
  "ANIMATIONS",
  "3D DESIGN",
  "AUGMENTED REALITY",
  "VIRTUAL REALITY",
  "2D DESIGN",
];

const letters = ["D", "E", "S", "I", "G", "N", "E", "R"];
const services = [
  "2D/3D DESIGN",
  "WEBSITE DESIGN",
  "ANIMATIONS",
  "AR/VR TECHNOLOGY",
];
const featuredWorks = [
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
  {
    img: Lion,
    name: "Hunt",
    type: "Website Design",
    year: "2021",
  },
];
const Home = () => {
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <TickerTape tapes={tapes} />
        <Heading letters={letters} nonAnimatedText="DIGITAL" />
        <HBContainer>
          <HeroImgContainer>
            <img src={Hero} />
          </HeroImgContainer>
          <BesideHeroImg>
            <p id="word1">Hello Hello ✌️</p>
            <p id="word2">
              I'm Otietie Tari0ty, Digital Designer transforming concepts into
              digital masterpieces.
            </p>
          </BesideHeroImg>
        </HBContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#212121"}>
        <MyServiceTabs services={services} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <FeaturedWorks data={featuredWorks} />
      </DisplayCard>
    </Layout>
  );
};
export default Home;
