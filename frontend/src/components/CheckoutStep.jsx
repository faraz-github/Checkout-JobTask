import { useState } from 'react';

import { Box, Step, Stepper, IconButton } from '@mui/material';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function CheckoutStep() {

    const [activeStep, setActiveStep] = useState(1);

    const shoppingCartButton = () => {
        console.log("Currently at cart details, The functinality can be implemented here");
        setActiveStep(0);
    }

    const shippingTruckButton = () => {
        console.log("Currently at shipping details, The functionality can be implemented here");
        setActiveStep(1);
    }


    const UnselectedButtonStyle = {
        border: "1px solid",
        borderColor: "secondary.main"
    }

    const SelectedButtonStyle = {
        border: "1px solid",
        borderColor: "secondary.main",
        backgroundColor: "secondary.main",
        "&:hover": {
            backgroundColor: "secondary.main"
        }
    }

    const UnselectedIconStyle = {
        color: "common.black",
    }

    const SelectedIconStyle = {
        color: "common.white",
    }

    return (
        <Box sx={{ minWidth: '150px' }}>
            <Stepper>
                <Step>
                    <IconButton onClick={shoppingCartButton} size='small' sx={activeStep === 0 ? SelectedButtonStyle : UnselectedButtonStyle}>
                        <ShoppingCartOutlinedIcon fontSize='small' sx={activeStep === 0 ? SelectedIconStyle : UnselectedIconStyle} />
                    </IconButton>
                </Step>
                <Step>
                    <IconButton onClick={shippingTruckButton} size='small' sx={activeStep === 1 ? SelectedButtonStyle : UnselectedButtonStyle} >
                        <LocalShippingOutlinedIcon fontSize='small' sx={activeStep === 1 ? SelectedIconStyle : UnselectedIconStyle} />
                    </IconButton>
                </Step>
            </Stepper>
        </Box>
    );
}
