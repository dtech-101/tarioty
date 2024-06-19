import {
  AnimatedHeadingText,
  HeadingText,
  HeadingContainer,
  AnimatedBox,
} from "./style";

interface IHeading {
  letters: string[];
  nonAnimatedText: string;
}

const Heading = ({ letters, nonAnimatedText }: IHeading) => {
  return (
    <HeadingContainer>
      <HeadingText>{nonAnimatedText}</HeadingText>
      <div className="box">
        {letters.map((item) => (
          <AnimatedBox>
            <AnimatedHeadingText id="mainText">{item}</AnimatedHeadingText>
            <AnimatedHeadingText id="shadowText">{item}</AnimatedHeadingText>
          </AnimatedBox>
        ))}
      </div>
    </HeadingContainer>
  );
};
export default Heading;
