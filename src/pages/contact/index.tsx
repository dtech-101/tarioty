import Layout from "../../layout";
import { DisplayCard } from "../../components/displayCard";
import Heading from "../../components/shared/heading";
import TickerTape from "../../components/shared/tickerTape";
import { FormContainer, InputStyle } from "./style";
import LetsConnect from "../../components/shared/letsConnect";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { FormControl } from "@mui/material";
const tapes = [
  "ANIMATIONS",
  "3D DESIGN",
  "AUGMENTED REALITY",
  "VIRTUAL REALITY",
  "2D DESIGN",
];
const letters = ["T", "O", "U", "C", "H"];
const formInput = [
  {
    id: "1",
    placeholder: "NAME",
    type: "text",
  },
];
const Contact = () => {
  return (
    <Layout>
      <DisplayCard backgroundColor={"#0A0A0A"} paddingTop="2%">
        <TickerTape tapes={tapes} />
        <Heading letters={letters} nonAnimatedText="GET IN" />
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <FormContainer>
          <FormControl></FormControl>
        </FormContainer>
      </DisplayCard>
      <DisplayCard backgroundColor={"#0A0A0A"}>
        <></>
      </DisplayCard>
    </Layout>
  );
};
export default Contact;
