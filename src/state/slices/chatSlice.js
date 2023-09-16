import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  waitResponse: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

    triggerWaitResponse: (state, action) => {
      state.waitResponse = action.payload;
    },
    handleError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { sendMessage, setMessages, triggerWaitResponse, handleError } =
  chatSlice.actions;

export default chatSlice.reducer;
