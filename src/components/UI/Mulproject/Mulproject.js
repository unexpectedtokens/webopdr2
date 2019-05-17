import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Projectmulcont = styled.figure`
  position: relative;
  img {
    width: 100%;
    height: auto;
    max-height: 300px;
    transition: filter 0.3s;
    filter: blur(0px) brightness(70%);
    vertical-align: top;
    :hover {
      filter: blur(1px) brightness(60%);
    }
  }
  h5 {
    font-size: 2em;
    text-transform: uppercase;
    padding: 20px;
    color: #fff;
    width: 100%;
    padding: 30px;
    background: black;
    /* position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%); */
  }
`;

const Projectmul = props => {
  return (
    <Link to="/detail">
      <Projectmulcont>
        <img
          src="https://platform-duic.imgix.net/app/uploads/sites/2/2018/04/20170410-Rboosterbroek-Utrecht060.jpg?auto=format&ch=Width%2CDPR%2CSave-Data&fit=max&ixlib=php-1.1.0&q=35"
          alt="test"
        />
        <h5>Title</h5>
      </Projectmulcont>
    </Link>
  );
};
export default Projectmul;
