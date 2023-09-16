import React from "react";
import { styled } from "@mui/system";
import { ListItem, ListItemText } from "@mui/material";

const StyledBubbleMessage = styled(ListItem)`
  position: relative;
  padding: 2rem;
  border-radius: 10px;
  max-width: 50%;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 10px;
  }

  &.request {
    align-self: flex-end;
    &:before {
      right: -7px;
      width: 20px;
      background: inherit;
      border-bottom-left-radius: 16px 14px;
    }

    &:after {
      right: -36px;
      width: 36px;
      background-color: #fff;
      border-bottom-left-radius: 10px;
    }
  }
  &.response {
    align-self: flex-start;
    &:before {
      left: -7px;
      width: 20px;
      background: inherit;
      border-bottom-right-radius: 16px;
    }

    &:after {
      left: -36px;
      width: 36px;
      background-color: #fff;
      border-bottom-right-radius: 10px;
    }
  }
`;

export default function BubbleMessage(props) {
  return (
    <StyledBubbleMessage
      className={`${props.msg_type === "request" ? "request" : "response"}`}
      sx={{
        color: "black.main",
        bgcolor: props.msg_type === "request" ? "accent2.main" : "blue.main",
      }}
    >
      <ListItemText>{props.message}</ListItemText>
    </StyledBubbleMessage>
  );
}
