import * as React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <ContainerContent>
        <AboutHeader>
          <h1>ABOUT US</h1>
        </AboutHeader>
      <AboutBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
            <br></br>
             Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
        <AboutContent>
          <img src="../images/about-logo.png" alt="about-logo"></img>
        </AboutContent>
      </AboutBody>

      <DownloadBtns>
        <AppleBtn>
          <img src="../images/shape.svg" alt="apple-logo"></img>
          <AppleBtnContent>
            <h5>Download on the</h5>
            <h3>App Store</h3>
          </AppleBtnContent>
        </AppleBtn>
        <GoogleBtn>
          <img src="../images/path.svg" alt="google-logo"></img>
          <GoogleBtnContent>
            <h5>Get it on</h5>
            <h3>Google Play</h3>
          </GoogleBtnContent>
        </GoogleBtn>
      </DownloadBtns>
      </ContainerContent>
    </AboutContainer>
  );
};

export default About;

const ContainerContent = styled.div`
    margin-right:15.57%;
  margin-left:15.57%;
  @media only screen and (max-width: 650px) {
margin-left:9.33%;
margin-right:9.33%;
  }
`
const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  height: 526px;
  width: auto;
margin-top: 117px;

  @media only screen and (max-width: 650px) {
    height: 605px;
    width: 100%;
    opacity: 0.9;
    background-color: #fafafa;
    /* margin-top: 97.6px; */

  }
`;

const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    margin-top: 20px;
    font-family: HelveticaNeue;
    font-size: 1.375rem;
    text-align: left;
    width: 70%;
    font-weight: 100;
    line-height: 1.4;
    letter-spacing: 1.69px;

  }

  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    width: 100%;

    p {
      font-family: HelveticaNeue;
      font-size: 0.875rem;
      text-align: center;
      font-weight: 100;
      letter-spacing: 1.04px;
      width: 100%;
      margin-top:7px;
    }
  }
`;
const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: HelveticaNeue;
    font-size: 1.875rem;
    font-size: 30px;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.89px;
      margin-top:65px;

  }


  @media only screen and (max-width: 650px) {
    h1 {
      font-family: HelveticaNeue;
      font-size: 0.875rem;
      font-weight: 100;
      letter-spacing: 0.93px;
      text-align: center;
      /* margin-bottom: 2vh; */
      margin-top:28px;

    }

  }
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 178px;
    height: 166px;
    object-fit: contain;
  }
  @media only screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    margin-top:32px;
    img {
      width: 137px;
      height: 128px;
      object-fit: contain;
    }
  }
`;

const DownloadBtns = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 23px;


  @media only screen and (max-width: 650px) {
    margin: 0 auto;
    padding: 0;
    margin-top:34px;
  }
`;

const AppleBtn = styled.div`
  width: 181.4px;
  height: 52.8px;
  border-radius: 9.6px;
  border: solid 0.6px black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 20px;

  @media only screen and (max-width: 650px) {
    width: 127px;
    height: 37px;
    padding: 5.6px 7.9px 5.1px 7.3px;
    border-radius: 6.7px;
    border: solid 0.5px black;
  }
`;
const AppleBtnContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h5 {
    font-size: 13px;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 17px;
      height: 22px;
      margin: 0 9.7px 4.3px 0;
      object-fit: contain;
    }
    h5{
      font-size:0.575rem
    }
    h3{
      font-size:0.738rem
    }
  }
`;
const GoogleBtn = styled.div`
  display: flex;
  flex-direction: row;
  width: 181.4px;
  height: 52.8px;
  border-radius: 9.6px;
  border: solid 0.6px black;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 650px) {
    width: 126.8px;
    height: 36.8px;
    padding: 5px 12.2px 5.8px 10.5px;
    border-radius: 6.7px;
    border: solid 0.5px black;
  }
`;
const GoogleBtnContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h5 {
    font-size: 13px;
  }

  @media only screen and (max-width: 650px) {
    img {
      width: 14px;
      height: 18px;
      margin: 4.8px 15.1px 3.2px 0;
      object-fit: contain;
    }
    h5{
      font-size:0.575rem
    }
    h3{
      font-size:0.738rem
    }
  }
`;
