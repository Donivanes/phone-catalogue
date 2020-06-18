import React from "react";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";

const CenterSpinner = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -50px;
`;

export const Loading = () => (
  <CenterSpinner>
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  </CenterSpinner>
);
