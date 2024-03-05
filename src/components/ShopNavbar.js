import React, { useState } from 'react'
import { Box } from '@mui/system'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom'

const categories = [ 'Fruits de mer', 'Apéro', 'Vins', 'Fruits et légumes', 'Plats préparés']

export default function ShopNavBar() {

    const navigate = useNavigate()
    
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  function handleLinkMenu(category) {
    navigate(`/${category}`)
    handleCloseNavMenu()
  }

  return (
    <AppBar position="static" style={{ backgroundColor: "#116A7B" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx={{ display: { xs: 'flex', md: 'none' }, marginRight: 'auto' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', flex: 1 }}>LE SHOP</Typography>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, width: 48, marginRight: 'auto' }}></Box>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} onClick={() => handleLinkMenu(category)}>
                                <Typography textAlign="center">{category}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', gap: '75px'} }}>
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => handleLinkMenu(category)}
                            sx={{ my: 2, color: 'white', display: 'block', fontSize: '16px' }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
