import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { timeElapsedAtom } from "../../../recoil/atoms/GameState";
import { useRecoilState } from "recoil";

const StyledDiv = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

function formatTime(time: number): string {
  const secondsElapsed = Math.floor(time / 1000);
  const minutesElapsed = Math.floor(secondsElapsed / 60);
  const remainderSeconds = secondsElapsed % 60;

  const formattedSeconds =
    remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;

  return `${minutesElapsed}:${formattedSeconds}`;
}

export default function Timer() {
  const [timeElapsed, setTimeElapsed] = useRecoilState(timeElapsedAtom);

  const [lastTickTime, setLastTickTime] = useState(Date.now());

  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = Date.now();
      const timeSinceLastTick = now - lastTickTime;

      setTimeElapsed(timeElapsed + timeSinceLastTick);
      setLastTickTime(now);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [setTimeElapsed, timeElapsed, lastTickTime]);

  return <StyledDiv>{formatTime(timeElapsed)}</StyledDiv>;
}
