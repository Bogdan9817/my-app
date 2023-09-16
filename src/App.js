import { Grid } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import ChatField from "./components/chat-field/ChatField";

function App() {
  return (
    <Grid container columns={12} className='app__wrapper'>
      <Sidebar />
      <ChatField />
    </Grid>
  );
}

export default App;
