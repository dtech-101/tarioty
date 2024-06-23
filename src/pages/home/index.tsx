import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
import Hero from "../../assets/hero.png";
import {
  BesideHeroImg,
  HBContainer,
  HeroImgContainer,
  TestimonialContainer,
} from "./style";
import MyServiceTabs from "../../components/shared/myServices";
import FeaturedWorks from "../../components/shared/featuredWorks";
import Lion from "../../assets/px.jpg";
import NameBar from "../../components/shared/nameBar";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { LeftCricledArrow, RightCircledArrow } from "../../assets/icons";
import DownloadResume from "../../components/shared/downloadResume";
import LetsConnect from "../../components/shared/letsConnect";
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
const testimonial = [
  {
    message:
      "“ Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. Vector invite reesizing strikethrough edit style flows comment group thumbnail. Connection flows image star pixel mask union. “",
    authorImg: null,
    authorName: "Shari Kiehn-Konopelski",
    jobTitle: "International Solutions Administrator",
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
            <img src={Hero} alt="hero" />
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
        <NameBar
          textOne="MY"
          textTwo="SERVICES"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <MyServiceTabs services={services} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <NameBar
          textOne="FEATURED"
          textTwo="WORKS"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <FeaturedWorks data={featuredWorks} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#EDEDED"}>
        <NameBar
          textOne="CLIENTS"
          textTwo="TESTIMONIAL"
          textOneColor="#191718"
          textTwoColor="#F9BF37"
        />
        <TestimonialContainer>
          {testimonial.map((item) => (
            <div>
              <p id="message">{item.message}</p>
              <div className="bottomBox">
                <div className="detailsContainer">
                  <Avatar id="avatar" />
                  <div className="details">
                    <div id="authorName">{item.authorName}</div>
                    <div id="jobTitle">{item.jobTitle}</div>
                    <Link to="">
                      <div id="linkedin">Linkedin</div>
                    </Link>
                  </div>
                </div>
                <div className="toAndFro">
                  <LeftCricledArrow /> <RightCircledArrow />
                </div>
              </div>
            </div>
          ))}
        </TestimonialContainer>
      </DisplayCard>
      {/* <DisplayCard backgroundColor={"#0A0A0A"}>
        <DownloadResume />
      </DisplayCard> */}
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <LetsConnect/>
      </DisplayCard>
    </Layout>
  );
};
export default Home;
