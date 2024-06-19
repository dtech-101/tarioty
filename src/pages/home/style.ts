import styled from "styled-components";

export const HeroImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 500px;
  img {
    position: absolute;
    bottom: 0%;
    width: clamp(300px, 50vw, 400px);
    @media (max-width: 899px) {
      position: static;
      width: clamp(100px, 80vw, 400px);
    }
  }
`;

export const BesideHeroImg = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Outfit;
  color: #bababa;
  width: 33%;
  position: absolute;
  right: -4%;
  @media(min-width: 900px){
  right: -10%;
  }
  @media(min-width: 1341px){
  right: 0%;
  }
  bottom: 5%;
   @media(max-width: 899px){
    position: relative;
    width: 50%;
    right: 0%;
    margin: auto;
    text-align: center;
  }
  #word1 {
    font-size: clamp(10px, 2vw, 28px);
    font-weight: 500;
  }
  #word2 {
    font-size: clamp(10px, 1.5vw, 20px);
    font-weight: 400;
  }
`;
export const HBContainer = styled.div`
  position: relative;
  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
`;
