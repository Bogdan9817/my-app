import React from "react";
import { styled } from "@mui/system";
import { List } from "@mui/material";

const StyledChatWindowStory = styled(List)`
  flex: 5;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  overflow-y: scroll;
  scrollbar-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;
  max-height: 80%;
`;

export default function ChatWindowStory(props) {
  return <StyledChatWindowStory>{props.children}</StyledChatWindowStory>;
}
