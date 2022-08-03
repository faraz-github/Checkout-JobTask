import { ThemeProvider } from "@mui/material";
import { UserProvider } from "./contexts/UserContext";

import theme from "./MUI/theme";

import Header from "./components/Header";

import Checkout from "./pages/Checkout";

function App() {
  return <ThemeProvider theme={theme}>
    <UserProvider>
      <Header />
      <Checkout />
    </UserProvider>
  </ThemeProvider>
}

export default App;
