import { Avatar, List, ListItem, ListItemText, ListItemAvatar, Typography, Stack } from '@mui/material';

export default function CartItem() {

    const printTitleAndSubtitle = (productTitle, productSubtitle, price) => {
        return <Stack>
            <Typography variant='body2'>{productTitle}</Typography>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
                <Typography variant="body2">{productSubtitle}</Typography>
                <Typography variant="body2">{price}</Typography>
            </Stack>
        </Stack >
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="product" src="/assets/images/tshirtOne.jpg" />
                </ListItemAvatar>
                <ListItemText primary={printTitleAndSubtitle("T-Shirt", "Summer Vibes", "$89.99")} secondary="#261311" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt="product" src="/assets/images/tshirtTwo.jpg" />
                </ListItemAvatar>
                <ListItemText primary={printTitleAndSubtitle("Basic Slim", "Fit T-Shirt", "$69.99")} secondary="#212315" />
            </ListItem>
        </List>
    );
}


