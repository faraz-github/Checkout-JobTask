import { ThemeProvider, Typography } from "@mui/material";

import theme from "./MUI/theme";

function App() {
  return <ThemeProvider theme={theme}>
    <Typography variant="h1">Hello World!</Typography>
  </ThemeProvider>
}

export default App;
