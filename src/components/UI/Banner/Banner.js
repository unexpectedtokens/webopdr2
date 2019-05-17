import React from "react";
// import Triangleimage from "../../../../assets/cool-background.png";
// import Utrechtimage from "../../../../assets/utrecht.jpg";

import styled from "styled-components";

const Bannercontainer = styled.header`
  width: 100%;
  height: ${props => props.height};
  position: relative;
  clip-path: ${props =>
    props.landing
      ? "polygon(50% 0%, 100% 0, 100% 90%, 0 100%, 0 100%, 0 0)"
      : "none"};
`;

const Bannertext = styled.div`
  color: #fff;
  float: left;
  position: absolute;
  top: 60%;
  h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 3em;
    padding-left: 50px;
  }
  @media screen and (max-width: 800px) {
    top: 40%;
    h1 {
      padding-left: 30px;
    }
  }
`;
const Background = styled.div`
  background: ${props =>
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(${
      props.background
    })`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const Banner = props => {
  return (
    <Bannercontainer height={props.bannerheight} landing={props.onlanding}>
      <Background background={props.background} />
      {/* <Triangles /> */}
      <Bannertext>
        <h1>{props.title}</h1>
      </Bannertext>
    </Bannercontainer>
  );
};

export default Banner;
