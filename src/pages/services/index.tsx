import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import Layout from "../../layout";
const tapes = [
  "ANIMATIONS",
  "3D DESIGN",
  "AUGMENTED REALITY",
  "VIRTUAL REALITY",
  "2D DESIGN",
];
const letters = ["S", "E", "R", "V", "I", "C", "E", "S"];
const Services = () => {
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <TickerTape tapes={tapes} />
        <Heading nonAnimatedText="MY" letters={letters} />
      </DisplayCard>
      <DisplayCard backgroundColor={"#000000"}>
        <></>
      </DisplayCard>
    </Layout>
  );
};
export default Services;
