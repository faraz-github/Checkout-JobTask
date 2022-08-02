import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";

import CheckoutStep from "../components/CheckoutStep";

function Checkout() {
    return (
        <Container maxWidth={false}>
            <Box sx={{ display: "flex", alignItems:"center", justifyContent:"space-between" }}>
                <Typography variant="h6">Shipping and Payment</Typography>
                <CheckoutStep />
            </Box>
        </Container>
    )
}

export default Checkout;