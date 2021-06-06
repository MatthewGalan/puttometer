import React from "react";
import styled from "styled-components";
import { historyAtom } from "../../../recoil/atoms/GameState";
import IconButton from "../../common/IconButton";
import BackspaceIcon from "../../../icons/backspace.svg";
import { useRecoilState } from "recoil";

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  padding: 8px 8px 0 0;

  div {
    padding: 4px;
    background-color: palegoldenrod;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    width: 20px;
    height: 20px;
  }
`;

export default function History() {
  const [history, setHistory] = useRecoilState(historyAtom);

  return (
    <StyledDiv>
      {history.map((successes, index) => (
        <div key={`history-${index}`}>{successes}</div>
      ))}
      <IconButton
        title="Delete history entry"
        src={BackspaceIcon}
        onClick={() =>
          setHistory((oldHistory) => oldHistory.slice(0, oldHistory.length - 1))
        }
      />
    </StyledDiv>
  );
}
