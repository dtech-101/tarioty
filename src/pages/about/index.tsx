import { DisplayCard } from "../../components/displayCard";
import Layout from "../../layout";
import Heading from "../../components/shared/heading";
import Hero from "../../assets/hero.png"
import {
  HBContainer, 
  HeroImgContainer,
  UnderImgHero,
  AccomplishmentContainer,
  ExperienceContainer,
} from "./style";
import NameBar from "../../components/shared/nameBar";
import MyServiceTabs from "../../components/shared/myServices";
import LetsConnect from "../../components/shared/letsConnect";
import { title } from "process";
const letters = ["M", "E"];
const accomplishment = [
  {
    id:"1",
    number:"60",
    sign:"+",
    text:"PROJECTS DONE",
  },
  {
    id:"2",
    number:"25",
    sign:"",
    text:"TESTIMONIALS"
  },
  {
    id:"3",
    number:"5",
    sign:"+",
    text:"YEARS OF EXPERIENCE"
  },
  {
    id:"4",
    number:"00",
    sign:"",
    text:"UNHAPPY CLIENTS"
  }
];
const services = [
  "2D/3D DESIGN",
  "WEBSITE DESIGN",
  "ANIMATIONS",
  "AR/VR TECHNOLOGY"
];
const experience = [
  {
    id:"1",
    company:"APPLE",
    title:"PRODUCT DESIGNER ",
    year:"2022 - PRESENT",
  },
  {
    id:"2",
    company:"FACEBOOK",
    title:"UI/UX DESIGNER",
    year:"2022 - 2024",
  },
  {
    id:"3",
    company:"AMAZON",
    title:"ANIMATOR",
    year:"2022 - 2024",
  },
  {
    id:"4",
    company:"MICROSOFT",
    title:"VIDEO EDITOR",
    year:"2022 - 2024",
  }
]

const About = () => {
    return (
      <Layout>
        <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <Heading letters={letters} nonAnimatedText="ABOUT" />
        <HBContainer>
          <HeroImgContainer>
            <img src={Hero} alt="hero" />
          </HeroImgContainer>
          </HBContainer>
        </DisplayCard>
        <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
          <UnderImgHero>
            <p id="word">
            Figma ipsum component variant main layer. Star undo create figjam bold mask. Library connection asset font asset effect create. ector invite reesizing strikethrough edit style flows comment group thumbnail. Connection flows image star pixel mask union. group thumbnail. Connection flows image star pixel mask union. 
            </p>
          </UnderImgHero>
        
        <AccomplishmentContainer>
          {accomplishment.map((item) => (
            <div>
              <div className="accomplishmentCard">
                <div className="numberSign">
                  <div className="number">{item.number}</div>
                  <div className="sign">{item.sign}</div>
                </div>
                <div className="text">{item.text}</div>
              </div>
            </div>
          ))}
        </AccomplishmentContainer>
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
      <DisplayCard backgroundColor={"#212121"} >
      <NameBar
          textOne="MY"
          textTwo="EXPERIENCE"
          textOneColor="#F7F7F7"
          textTwoColor="#F9BF37"
        />
        <ExperienceContainer>
          {experience.map((item) => (
            <div>
              <div className="experienceCard">
                <div className="experienceCompany">{item.company}</div>
                <div className="experienceTitle">{item.title}</div>
                <div className="experienceYear">{item.year}</div>
              </div>
            </div>
          ))}
        </ExperienceContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#212121"}>
        <LetsConnect/>
      </DisplayCard>
      </Layout>
    )
    
      
    ;
  };
  export default About;
  