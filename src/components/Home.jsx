import React from "react";
import styled from "styled-components";
import backgroundMain from "../assets/home/background-home-desktop.jpg";

const Container = styled.div`
  background-image: url(${backgroundMain});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-color: transparent;
  display: flex;

  #frame {
    width: 80%;
    margin: 0 auto;
    display: flex;
    margin-top: 15rem;
  }
`;

const Left = styled.div``;

const Heading2 = styled.h2`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 200;
  font-size: 28px;
  letter-spacing: 4.72px;
  color: #d0d6f9;
`;

const Heading1 = styled.h1`
  font-family: "Bellefair";
  font-weight: 400;
  font-size: 150px;
`;

const Paragraph = styled.p`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 100;
  font-size: 20px;
  line-height: 32px;
  color: #d0d6f9;
  width: 50%;
`;

const Explore = styled.div`
  text-transform: uppercase;
  font-family: "Bellefair";
  font-size: 36px;
  width: 16rem;
  height: 16rem;
  line-height: 16rem;
  text-align: center;
  background-color: white;
  color: black;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
`;

const Home = () => {
  return (
    <Container>
      <div id="frame">
        <Left>
          {" "}
          <Heading2>SO, YOU WANT TO TRAVEL TO</Heading2>
          <Heading1>SPACE</Heading1>
          <Paragraph>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </Paragraph>
        </Left>

        <Explore>Explore</Explore>
      </div>
    </Container>
  );
};

export default Home;
