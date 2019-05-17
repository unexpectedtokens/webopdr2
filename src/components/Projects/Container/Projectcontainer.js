import React from "react";
import styled from "styled-components";

const Projectsection = styled.section`
  padding: 100px 20px;
  width: 100%;
  min-height: 500px;
  background: #fff;
  background: #fbdada;
  @media (max-width: 800px) {
    padding: 60px 0 0 0;
  }
`;
const Container = styled.div`
  width: 80%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 10px 30px;
    width: 100%;
    margin-left: 0;
    grid-gap: 20px;
  }
`;

const Projectcontainer = props => {
  return (
    <Projectsection>
      <Container>{props.children}</Container>
    </Projectsection>
  );
};

export default Projectcontainer;
