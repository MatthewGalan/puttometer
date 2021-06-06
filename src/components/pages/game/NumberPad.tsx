import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { putterCountAtom } from "../../../recoil/atoms/GameConfig";
import { historyAtom } from "../../../recoil/atoms/GameState";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  max-height: 50vh;
  overflow: auto;

  button {
    height: 80px;
    flex: 1;
    min-width: calc(33.333% - 8px);
    margin: 4px;
    font-size: 32px;
    font-weight: bold;
    border-radius: 16px;
  }
`;

export default function NumberPad() {
  const [putterCount] = useRecoilState(putterCountAtom);
  const setHistory = useSetRecoilState(historyAtom);

  return (
    <StyledDiv>
      {[...Array(putterCount + 1).keys()].map((i) => (
        <button
          key={i}
          onClick={() => setHistory((history) => [...history, i])}
        >
          {i}
        </button>
      ))}
    </StyledDiv>
  );
}
