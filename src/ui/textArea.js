import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";

const StyledTextarea = styled(TextareaAutosize)`
  padding: 12px;
  border-radius: 20px;
  resize: none;
  outline: none;
  height: 100px;
  width: 300px;

  @media (min-width: 48em) {
    width: 48rem;
  }

  @media (min-width: 64em) {
    width: 100%;
  }
`;

export default function EmptyTextarea(props) {
  return <StyledTextarea {...props} />;
}
