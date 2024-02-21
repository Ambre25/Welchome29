import React from 'react'
import { Box } from '@mui/system'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom'

const categories = ['Sports nautiques', 'Visites', 'Pêche', 'Bien-être', 'Location de vélos']

export default function LoisirsNavBar() {

    const navigate = useNavigate()
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

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
    <AppBar position="static" style={{ backgroundColor: "#007480" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', gap: '50px'} }}>
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
