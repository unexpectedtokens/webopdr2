import React from "react";
import Info from "../../UI/Info/Info";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  padding: 200px 100px;
  h3 {
    font-size: 2em;
    color: #444;
    padding: 50px 0;
    border-top: 5px solid #d23d3dc2;
  }
  p {
    padding-bottom: 50px;
  }
  @media screen and (max-width: 800px) {
    padding: 150px 50px;
  }
`;

const Description = props => {
  let Text =
    props.language === "english"
      ? "This text is in English"
      : "Deze tekst is in het Nederlands";

  return (
    <Container>
      <Info title="Intro">{Text}</Info>
    </Container>
  );
};
export default Description;
