import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

import { Box, Step, Stepper, IconButton } from '@mui/material';

export default function CheckoutStep() {

    const shoppingCartButton = () => {
        console.log("You want to access your cart? The functinality can be implemented here");
    }

    const shippingTruckButton = () => {
        console.log("Currently at shipping details, The functionality can be implemented here");
    }

    return (
        <Box sx={{ minWidth: '150px' }}>
            <Stepper>
                <Step>
                    <IconButton onClick={shoppingCartButton} size='small' sx={{ border: "1px solid", borderColor: "secondary.main" }}>
                        <ShoppingCartOutlinedIcon fontSize='small' sx={{ color: "common.black" }} />
                    </IconButton>
                </Step>
                <Step>
                    <IconButton onClick={shippingTruckButton} size='small' sx={{ border: "1px solid", borderColor: "secondary.main", backgroundColor: "secondary.main" }} >
                        <LocalShippingOutlinedIcon fontSize='small' sx={{ color: "common.white", "&:hover": { color: "common.black" } }} />
                    </IconButton>
                </Step>
            </Stepper>
        </Box>
    );
}
