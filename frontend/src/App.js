import { ThemeProvider } from "@mui/material";

import theme from "./MUI/theme";

import Header from "./components/Header";

import Checkout from "./pages/Checkout";

function App() {
  return <ThemeProvider theme={theme}>
    <Header />
    <Checkout />
  </ThemeProvider>
}

export default App;
