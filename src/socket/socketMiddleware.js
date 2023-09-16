import {
  handleError,
  sendMessage,
  setMessages,
  triggerWaitResponse,
} from "../state/slices/chatSlice";
import socket from "./socketConfig";

const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      store.dispatch(triggerWaitResponse(true));
      socket.emit("message", action.payload);
      store.dispatch(sendMessage(action.payload));
      socket.off("return_response");
      socket.on("return_response", (data) => {
        store.dispatch(sendMessage(data));
        store.dispatch(triggerWaitResponse(false));
      });
      socket.on("server_error", (error) => {
        store.dispatch(handleError(error));
      });
      break;
    case "GET_HISTORY":
      store.dispatch(triggerWaitResponse(true));
      socket.emit("send_history");
      socket.off("get_history");
      socket.on("get_history", (data) => {
        store.dispatch(setMessages(data));
      });
      store.dispatch(triggerWaitResponse(false));
      break;

    default:
      break;
  }

  return next(action);
};

export default socketMiddleware;
