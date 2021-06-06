import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { graphSelector } from "../../../recoil/selectors/Graph";
import {
  graphDepthAtom,
  lowerBoundAtom,
  upperBoundAtom,
} from "../../../recoil/atoms/GameConfig";

const StyledDiv = styled.div`
  flex: 1;
`;

export default function Graph() {
  const data = useRecoilValue(graphSelector);
  const graphDepth = useRecoilValue(graphDepthAtom);
  const upperBound = useRecoilValue(upperBoundAtom);
  const lowerBound = useRecoilValue(lowerBoundAtom);

  const width = window.screen.width;
  const height = 400;

  function getYCoord(value: number) {
    return (2 + height - value * height).toFixed(1);
  }

  function getCoord(value: number, index: number): string {
    const y = getYCoord(value);
    const x = ((width / graphDepth) * index).toFixed(1);
    return `${x},${y}`;
  }

  const upperBoundY = getYCoord(upperBound);
  const lowerBoundY = getYCoord(lowerBound);

  const points = data.map((value, index) => getCoord(value, index)).join(" ");

  return (
    <StyledDiv>
      <svg width={width} height={height + 4}>
        <polyline
          points={`0,${upperBoundY} ${width},${upperBoundY} ${width},${lowerBoundY} 0,${lowerBoundY}`}
          fill="lightgreen"
        />
        <polyline points={points} fill="none" stroke="black" strokeWidth={2} />
      </svg>
    </StyledDiv>
  );
}
