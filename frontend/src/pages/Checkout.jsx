import axios from "axios";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import CheckoutStep from "../components/CheckoutStep";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";

import { useUser } from "../contexts/UserContext";


const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);

    })
}

function Checkout() {

    const { user } = useUser();

    const openRazorpay = async () => {
        const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!response) {
            alert("Razorpay failed to load, make sure you are connected to the internet");
            return;
        }

        try {
            const response = await axios.post("/razorpay");
            if (response.data) {
                console.log(response.data);
                const options = {
                    key: "rzp_test_PqyzTtmpEY8XXt",
                    amount: response.data.amount.toString(),
                    currency: response.data.currency,
                    order_id: response.data.id,
                    name: "E-Shop",
                    description: "Order Checkout",
                    image: "assets/images/tshirtTwo.jpg",
                    handler: function (response) {
                        alert(response.razorpay_payment_id);
                        alert(response.razorpay_order_id);
                        alert(response.razorpay_signature);
                    },
                    prefill: {
                        name: user
                    },
                    theme: {
                        color: "#7AD0A7"
                    }
                }

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            }
        } catch (error) {
            console.log(error);
        }

        // const data = await fetch("/razorpay", { method: "POST" }).then((t) => {
        //     t.json();
        // });

        // console.log(data);



    }



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
                    <Button onClick={openRazorpay} size="large" disabled={user ? false : true} disableElevation variant="contained" color="secondary" sx={{ color: "common.white", fontSize: "0.75rem" }}>Proceed To Payment</Button>
                </Stack>
            </Box>
        </Container>
    )
}

export default Checkout;