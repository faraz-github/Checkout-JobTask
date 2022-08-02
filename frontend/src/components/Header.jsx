import { AppBar, Box, Toolbar, Typography, IconButton, Stack } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ borderBottom: "2px solid #F3F3F3" }}>
                <Toolbar>
                    <StoreIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' } }} />
                    <Typography variant="h6" component="div" sx={{ ml: 1, flexGrow: 1 }}>
                        <span style={{ color: "#FCCB83", letterSpacing: "0.1rem" }}>E-</span>Shop
                    </Typography>
                    <Stack direction={"row"} spacing={7} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="body2">
                            Men
                        </Typography>
                        <Typography variant="body2">
                            Women
                        </Typography>
                        <Typography variant="body2">
                            Kids
                        </Typography>
                    </Stack>
                    <Stack direction={"row"}>
                        <IconButton size='large'>
                            <SearchIcon fontSize='inherit' sx={{ color: "common.black" }} />
                        </IconButton>
                        <IconButton size='large'>
                            <ShoppingCartOutlinedIcon fontSize='inherit' sx={{ color: "common.black" }} />
                        </IconButton>
                        <IconButton size='large'>
                            <PersonOutlineOutlinedIcon fontSize='inherit' sx={{ color: "common.black" }} />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
