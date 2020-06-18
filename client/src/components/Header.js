import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SvgIcon from "@material-ui/core/SvgIcon";

const HeaderHome = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background-color: lightblue;
  width: 100%;
  text-align: center;
`;

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Header = () => (
  <Link to="/">
    <HeaderHome>
      <HomeIcon fontSize="large" />
    </HeaderHome>
  </Link>
);
