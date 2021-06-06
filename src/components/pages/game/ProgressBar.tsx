import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { progressSelector } from "../../../recoil/selectors/Progress";
import useLocalStorageRecoilState from "../../../hooks/useLocalStorageRecoilState";
import { progressGoalAtom } from "../../../recoil/atoms/GameConfig";

interface StyledDivProps {
  $progressPercent: number;
}

const StyledDiv = styled.div<StyledDivProps>`
  position: relative;
  overflow: hidden;

  .text {
    font-size: 24px;
    margin: 0 0 4px 8px;
  }

  .bar {
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: lightsalmon;
    transform-origin: left;
    transform: scaleX(${(props) => props.$progressPercent});
    transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;

export default function ProgressBar() {
  const progress = useRecoilValue(progressSelector);
  const [progressGoal] = useLocalStorageRecoilState(progressGoalAtom);

  return (
    <StyledDiv $progressPercent={progress / progressGoal}>
      <div className="bar" />
      <div className="text">{`${progress} / ${progressGoal}`}</div>
    </StyledDiv>
  );
}
