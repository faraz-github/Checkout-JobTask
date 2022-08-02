import { ThemeProvider } from "@mui/material";

import theme from "./MUI/theme";

import Header from "./components/Header";

function App() {
  return <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
}

export default App;
