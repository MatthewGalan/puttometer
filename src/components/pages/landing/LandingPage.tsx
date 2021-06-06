import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div``;

export default function LandingPage() {
  return (
    <StyledDiv>
      <Link to="/game-config">Start</Link>
    </StyledDiv>
  );
}
