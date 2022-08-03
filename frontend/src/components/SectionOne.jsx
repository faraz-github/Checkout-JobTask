import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { useUser } from "../contexts/UserContext";

import SelectionTextField from "./SelectionTextField";

function SectionOne() {

    const { user, setUser } = useUser();

    const loginUser = () => {
        if (!user) {
            setUser("User");
            alert("Login Successful!")
        } else {
            return;
        }
    }

    const inputStyle = {
        "& input::placeholder": { fontSize: "14px" }
    }
    const outlineButtonStyle = {
        color: "common.black",
        borderColor: "#F3F3F3",
        fontSize: "0.75rem",
        "&:hover": {
            borderColor: "common.black"
        }
    }

    return (
        <Box sx={{ pr: 5, pb: 5 }}>
            <Stack direction={"row"} spacing={2}>
                <Button disabled={user ? true : false} onClick={loginUser} disableElevation size="large" variant="contained" color="secondary" sx={{ color: "common.white", fontSize: "0.75rem" }}>Log In</Button>
                <Button disableElevation size="large" variant="outlined" sx={outlineButtonStyle}>Sign Up</Button>
            </Stack>
            <Box sx={{ minHeight: "25px" }}></Box>
            <Typography variant="subtitle2">Shipping inormation</Typography>
            <Box sx={{ minHeight: "15px" }}></Box>
            <Stack spacing={2}>
                <Stack direction={"row"} spacing={2}>
                    <TextField color="secondary" fullWidth placeholder="Email" sx={inputStyle} />
                    <TextField color="secondary" fullWidth placeholder="Address" sx={inputStyle} />
                </Stack>
                <Stack direction={"row"} spacing={2}>
                    <TextField color="secondary" fullWidth placeholder="First name" sx={inputStyle} />
                    <TextField color="secondary" fullWidth placeholder="City" sx={inputStyle} />
                </Stack>
                <Stack direction={"row"} spacing={2}>
                    <TextField color="secondary" fullWidth placeholder="Last name" sx={inputStyle} />
                    <TextField color="secondary" fullWidth placeholder="Postal Code / Zip" sx={inputStyle} />
                </Stack>
                <Stack direction={"row"} spacing={2} sx={{ display: "flex", alignItems: "center" }}>
                    <TextField color="secondary" fullWidth placeholder="Phone number" sx={inputStyle} />
                    <SelectionTextField />
                </Stack>
            </Stack>
        </Box>
    )
}

export default SectionOne;