import "./App.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import ResponsiveDrawer from "./components/layout/ResponsiveDrawer";
import { Box } from "@mui/material";

import "./fonts/Minion Pro Regular.ttf";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ResponsiveDrawer />
      <Box sx={{ flexGrow: 1, width: "100%" }}></Box>
    </ThemeProvider>
  );
}

export default App;
