import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  const [auth, setAuth] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => {
              setAuth(!auth);
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}>
            Buynox
          </Typography>

          {auth ? (
            <>
              <Button color="inherit">Logout</Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit">
                <AccountCircle />
              </IconButton>
            </>
          ) : (
            <>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Signup</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
