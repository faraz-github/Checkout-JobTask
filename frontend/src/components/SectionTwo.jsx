import { Box, Typography } from "@mui/material";
import PaymentMethod from "./PaymentMethod";
import DeliveryMethod from "./DeliveryMethod";


function SectionTwo() {
    return (
        <Box sx={{  pb: 5 }}>
            <Typography variant="subtitle2">Payment method</Typography>
            <Box sx={{ minHeight: "25px" }}></Box>
            <PaymentMethod />
            <Box sx={{ minHeight: "50px" }}></Box>
            <Typography variant="subtitle2">Delivery Method</Typography>
            <Box sx={{ minHeight: "25px" }}></Box>
            <DeliveryMethod />
        </Box>
    )
}

export default SectionTwo;