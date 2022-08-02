import { Paper, Stack } from "@mui/material";

function PaymentMethod() {

    const paymentMethodStyle = {
        py: 1,
        minWidth: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            borderColor: "#FCCB83"
        }
    }

    return (
        <Stack spacing={1}>
            <Stack direction={"row"} spacing={1}>
                <Paper variant="outlined" sx={paymentMethodStyle} >
                    <img src="assets/images/Paypal.svg" alt="paymentPartner" width={"50"} />
                </Paper>
                <Paper variant="outlined" sx={paymentMethodStyle}>
                    <img src="assets/images/Visa.svg" alt="paymentPartner" width={"34px"} />
                </Paper>
                <Paper variant="outlined" sx={paymentMethodStyle}>
                    <img src="assets/images/Master.svg" alt="paymentPartner" width={"34px"} />
                </Paper>
            </Stack>
            <Stack direction={"row"} spacing={1}>
                <Paper variant="outlined" sx={paymentMethodStyle} >
                    <img src="assets/images/Maestro.svg" alt="paymentPartner" width={"34px"} />
                </Paper>
                <Paper variant="outlined" sx={paymentMethodStyle}>
                    <img src="assets/images/Discover.svg" alt="paymentPartner" width={"34px"} />
                </Paper>
                <Paper variant="outlined" sx={paymentMethodStyle}>
                    <img src="assets/images/I-Deal.svg" alt="paymentPartner" width={"26px"} />
                </Paper>
            </Stack>
        </Stack>

    )
}

export default PaymentMethod;