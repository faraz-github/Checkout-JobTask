import { Paper, Stack, Typography } from "@mui/material";

function DeliveryMethod() {

    const deliveryMethodStyle = {
        py: 2,
        minWidth: "150px",
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
                <Paper variant="outlined" sx={deliveryMethodStyle} >
                    <Stack direction={"row"} spacing={2}>
                        <img src="assets/images/InPost.svg" alt="deliveryPartner" width={"40px"} />
                        <Typography variant="subtitle2">$20.00</Typography>
                    </Stack>
                </Paper>
                <Paper variant="outlined" sx={deliveryMethodStyle}>
                    <Stack direction={"row"} spacing={2}>
                        <img src="assets/images/DPD.svg" alt="deliveryPartner" width={"40px"} />
                        <Typography variant="subtitle2">$12.00</Typography>
                    </Stack>
                </Paper>
            </Stack>
            <Stack direction={"row"} spacing={1}>
                <Paper variant="outlined" sx={deliveryMethodStyle} >
                    <Stack direction={"row"} spacing={2}>
                        <img src="assets/images/DHL.svg" alt="deliveryPartner" width={"40px"} />
                        <Typography variant="subtitle2" disabled>$15.00</Typography>
                    </Stack>
                </Paper>
                <Paper variant="outlined" sx={deliveryMethodStyle}>
                    <Stack direction={"row"} spacing={2}>
                        <img src="assets/images/FedEx.svg" alt="deliveryPartner" width={"40px"} />
                        <Typography variant="subtitle2">$10.00</Typography>
                    </Stack>
                </Paper>
            </Stack>
        </Stack>
    )
}

export default DeliveryMethod;  