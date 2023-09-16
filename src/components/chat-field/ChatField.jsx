import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSend } from "react-icons/fi";
import { Alert, Grid } from "@mui/material";
import ChatWindowStory from "../../ui/chatStory";
import BubbleMessage from "../../ui/bubbleMessage";
import EmptyTextarea from "../../ui/textArea";

import "./styles.scss";

export default function ChatField() {
  const { messages, waitResponse, error } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleClick = () => {
    if (waitResponse) return;
    if (message) {
      const new_msg = { msg_type: "request", message };
      dispatch({ type: "SEND_MESSAGE", payload: new_msg });
    }
    setMessage("");
  };
  useEffect(() => {
    dispatch({ type: "GET_HISTORY" });
  }, [dispatch]);

  return (
    <Grid md={10} sx={{ flex: 3 }} item>
      <div className='chat-field__container'>
        <ChatWindowStory>
          {messages.map((item, idx) => {
            return <BubbleMessage key={idx} {...item} />;
          })}
        </ChatWindowStory>

        <div className='chat-field__msg-input'>
          {error ? (
            <Alert severity='error'>{error}</Alert>
          ) : (
            <>
              {waitResponse ? (
                <p className='loading_msg'>AgileGPT writing...</p>
              ) : (
                ""
              )}

              <EmptyTextarea
                value={message}
                onChange={handleChange}
                placeholder='Ask me anything that I can help you or your team..'
              />
              <FiSend
                className={`${waitResponse ? "disabled" : ""}`}
                onClick={handleClick}
                cursor={`${waitResponse ? "default" : "pointer"}`}
                size={32}
              />
            </>
          )}
        </div>
      </div>
    </Grid>
  );
}
