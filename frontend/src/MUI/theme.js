import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            light: "#ffffff",
            dark: "#b2b2b2"
        },
        secondary: {
            main: "#7AD0A7",
            light: "#94d9b8",
            dark: "#559174"
        }
    },
    mixins: {
        toolbar: {
            minHeight: 100
        }
    },
    shape: {
        borderRadius: 25
    }
});

export default theme;