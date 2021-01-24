import * as React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <AboutBody>
        <AboutHeader>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel
            justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.
          </p>
        </AboutHeader>
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
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  width: 100%;
  margin: 0 auto;

  @media only screen and (max-width: 550px) {
    width: 300px;
    height: 134px;
    padding: 0;
    opacity: 0.9;
    background-color: #fafafa;
  }
`;

const AboutBody = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 25%;
  padding-right: 25%;
  justify-content: center;

  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 100%;
    margin: 7px 0 32px;
  }
`;
const AboutHeader = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: HelveticaNeue;
    font-size: 2rem;
  }
  p {
    font-family: HelveticaNeue;
    font-size: 1rem;
    text-align: left;
    width: 80%;
  }

  @media only screen and (max-width: 550px) {
    h1 {
      font-family: HelveticaNeue;
      font-size: 1rem;
      font-weight: 100;
      letter-spacing: 0.93px;
      text-align: center;
      margin-bottom: 2vh;
    }
    p {
      font-family: HelveticaNeue;
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      margin-bottom: 2vh;
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
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    width: 304px;
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
  margin-left: 25%;
  padding: 25px;
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    padding: 0;
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

  @media only screen and (max-width: 550px) {
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

  @media only screen and (max-width: 550px) {
    img {
      width: 17px;
      height: 22px;
      margin: 0 9.7px 4.3px 0;
      object-fit: contain;
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

  @media only screen and (max-width: 550px) {
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

  @media only screen and (max-width: 550px) {
    img {
      width: 14px;
      height: 18px;
      margin: 4.8px 15.1px 3.2px 0;
      object-fit: contain;
    }
  }
`;
