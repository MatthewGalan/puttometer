import React from "react";
import styled from "styled-components";
import NakedButton from "./NakedButton";

const StyledNakedButton = styled(NakedButton)`
  margin-bottom: -4px;

  img {
    width: 40px;
    height: 40px;
  }
`;

interface IconButtonProps {
  title: string;
  src: string;
  onClick: () => void;
}

export default function IconButton({ title, src, onClick }: IconButtonProps) {
  return (
    <StyledNakedButton title={title} onClick={onClick}>
      <img src={src} alt="" />
    </StyledNakedButton>
  );
}
