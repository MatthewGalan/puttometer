import React, { useEffect } from "react";
import styled from "styled-components";
import {
  progressGoalAtom,
  ProgressMode,
  progressModeAtom,
  putterCountAtom,
} from "../../../recoil/atoms/GameConfig";
import useLocalStorageRecoilState from "../../../hooks/useLocalStorageRecoilState";
import { Link } from "react-router-dom";
import { historyAtom } from "../../../recoil/atoms/GameState";
import { useSetRecoilState } from "recoil";

const StyledDiv = styled.div``;

export default function GameConfigPage() {
  const [progressMode, setProgressMode] =
    useLocalStorageRecoilState<ProgressMode>(progressModeAtom);

  const [progressCount, setProgressCount] =
    useLocalStorageRecoilState<number>(progressGoalAtom);

  const [putterCount, setPutterCount] =
    useLocalStorageRecoilState<number>(putterCountAtom);

  const setHistory = useSetRecoilState(historyAtom);

  useEffect(() => setHistory([]), [setHistory]);

  return (
    <StyledDiv>
      <div>
        <span>I want to</span>
        <select
          name="progress-mode"
          id="progress-mode"
          value={progressMode}
          onChange={(e) => {
            setProgressMode(e.target.value as ProgressMode);
          }}
        >
          <option value={ProgressMode.Sinks}>sink</option>
          <option value={ProgressMode.Throws}>throw</option>
        </select>
        <input
          name="progress-count"
          id="progress-count"
          type="number"
          value={progressCount}
          onChange={(e) => {
            setProgressCount(parseInt(e.target.value));
          }}
        />
        <span>putts.</span>
      </div>
      <div>
        <span>I have</span>
        <input
          name="putter-count"
          id="putter-count"
          type="number"
          value={putterCount}
          onChange={(e) => {
            setPutterCount(parseInt(e.target.value));
          }}
        />
        <span>putters.</span>
      </div>
      <Link to="/game">Let's putt!</Link>
    </StyledDiv>
  );
}
