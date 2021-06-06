import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import NumberPad from "./NumberPad";
import Graph from "./Graph";
import History from "./History";
import ProgressBar from "./ProgressBar";
import IconButton from "../../common/IconButton";
import StopIcon from "../../../icons/stop.svg";
import PauseIcon from "../../../icons/pause.svg";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .header {
    display: flex;
    align-items: center;
  }
`;

export default function GamePage() {
  return (
    <StyledDiv>
      <ProgressBar />
      <div className="header">
        <IconButton title="Stop game" src={StopIcon} onClick={() => {}} />
        <IconButton title="Pause game" src={PauseIcon} onClick={() => {}} />
        <Timer />
      </div>
      <Graph />
      <History />
      <NumberPad />
    </StyledDiv>
  );
}
