import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  width: 100%;
  height: 100px;
  box-shadow: 10px #000;
  background: #555;
`;

const Footer = props => {
  return <Foot />;
};

export default Footer;
