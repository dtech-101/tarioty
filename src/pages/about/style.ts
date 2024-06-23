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

export const HBContainer = styled.div`
  position: relative;
  @media (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UnderImgHero = styled.div`
display: flex;
font-family: Outfit;
color: #bababa;
justify-content: center;
margin: 50px auto;
#word {
font-size: clamp(16px, 1.5vw, 20px);
text-align: center;
width: 73%;
font-weight: 400;
}
@media (max-width: 900px) {
  width: 100%;
  margin: 20px auto;
  #word {
width: 100%;
font-weight: 400;
}
  }
`;

export const AccomplishmentContainer = styled.div `
  display: flex;
  flex-direction: row;
  font-family: Outfit;
  justify-content: space-between;
  margin: 0 6% 70px 6%;
  .accomplishmentCard {
    display: block;  
  } 
  .numberSign {
  display: flex;
  font-weight: 600;
  justify-content: center;
  }
  .number {
  color: rgba(243, 242, 243, 1);
  font-size: clamp(45px, 7.5vw, 100px);
  }
  .sign {
  color:rgba(112, 102, 108, 1);
  font-size: clamp(45px, 7.5vw, 95px);
  }
  .text {
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 400;
  color:rgba(112, 102, 108, 1);
  justify-content: center;
  }

  @media (max-width: 900px) {
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin: 60px;
  .text {
  text-align: center;
  }
  .accomplishmentCard {
  margin: 20px 0;
  }
  }
`
export const ExperienceContainer = styled.div `

margin: auto;

    font-size: clamp(32px,4vw,60px);
    font-weight: 400;
    font-family: Fjalla One;
    line-height: 152px;
    letter-spacing: 1px;
    transition: 1s;
    

.experienceCard {
background-color:#0A0A0A;
padding: 0 40px;
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: start;
cursor: pointer;
margin: 40px auto;
}
.experienceCard:hover {
background-color:#454545;
transition: 0.7s;
}
.experienceCompany {
color: #F3F2F3;
width: 33.3%;
}
.experienceTitle, .experienceYear {
color: #666666;
font-size: clamp(20px,3vw,44px);
width: 33.3%;
}
  @media (max-width: 900px) {
  
  }
`