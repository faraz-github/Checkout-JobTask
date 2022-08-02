import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CheckoutStep from "../components/CheckoutStep";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

function Checkout() {

    const outlineButtonStyle = {
        color: "common.black",
        borderColor: "common.black",
        fontSize: "0.75rem",
        "&:hover": {
            borderColor: "#F3F3F3"
        }
    }

    return (
        <Container maxWidth={false}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="h6">Shipping and Payment</Typography>
                <CheckoutStep />
            </Box>
            <Box sx={{ minHeight: "25px" }}></Box>
            <Grid container>
                <Grid item md={12} lg={6} >
                    <SectionOne />
                </Grid>
                <Grid item md={12} lg={3} >
                    <SectionTwo />
                </Grid>
                <Grid item md={12} lg={3} >
                    <SectionThree />
                </Grid>
            </Grid>
            <Box sx={{ mt: 5, py: 5, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Button size="large" sx={{ color: "common.black", textTransform: "none" }} startIcon={<ArrowBackIcon />}>Back</Button>
                <Stack direction={"row"} spacing={1}>
                    <Button size="large" disableElevation variant="outlined" sx={outlineButtonStyle}>Continue Shopping</Button>
                    <Button size="large" disableElevation variant="contained" color="secondary" sx={{ color: "common.white", fontSize: "0.75rem" }}>Proceed To Payment</Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default Checkout;