import { Box, Paper, Stack, Typography } from "@mui/material";

import CartItem from "./CartItem";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function SectionThree() {
    return (
        <Box sx={{ pb: 5 }}>
            <Typography variant="subtitle2">Your Cart</Typography>
            <Box sx={{ minHeight: "25px" }}></Box>
            <CartItem />
            <Box sx={{ minHeight: "25px" }}></Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Paper elevation={0} sx={{ py: 1, px: 5, backgroundColor: "#F3F3F3" }}>
                    <Stack direction="row" spacing={5}>
                        <Typography variant="body1">Total cost</Typography>
                        <Typography variant="body2">$159.98</Typography>
                    </Stack>
                </Paper>
            </Box>
            <Box sx={{ my: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Stack direction="row" spacing={5} sx={{ maxWidth: "200px" }}>
                    <LocalShippingOutlinedIcon />
                    <Typography variant="body2">You are $30.02 away from free shipping</Typography>
                </Stack>
            </Box>
        </Box>
    )
}

export default SectionThree;