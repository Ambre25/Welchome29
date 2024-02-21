// BARRE DE NAVIGATION

import React, { useContext, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../assets/logo.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import '../styles/navbar.css'
import Badge from '@mui/material/Badge'
import { useNavigate } from 'react-router-dom'
import { Avatar, Tooltip } from '@mui/material'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import { AuthContext } from './AuthContext'
import { useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase-config'
import { CartContext } from './CartContext'

const pages = ['Accueil', 'Shop', 'Loisirs', 'Traiteur', 'Contact'];

export default function Navbar() {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isDialogOpenSignin, setIsDialogOpenSignin] = useState(false);
    const { user, isLoggedIn, logout, anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = useContext(AuthContext);
    const [usernameFirstLetter, setUsernameFirstLetter] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
    
    const { totalItems } = useContext(CartContext);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    function handleLinkMenu(page) {
        navigate(`/${page}`)
        handleCloseNavMenu()
    }

    const handleClickUserOrders = () => {
        navigate('/Mes Commandes');
    }

    function handleLinkCart() {
        navigate('/Panier');
    }

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    }

    const handleCloseDialogSignin = () => {
        setIsDialogOpenSignin(false);
    }

    useEffect(() => {
        setIsUserLoggedIn(isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
        if(user) {
            const fetchUserData = async () => {
                const userRef = doc(db, 'users', user.uid);
                const userSnapshot = await getDoc(userRef);

                if(userSnapshot.exists() && userSnapshot.data().username) {
                    const userData = userSnapshot.data();
                    console.log('Connexion réussie', user);
                    console.log('User data from Firebase:', userData);

                    const username = userData.username;
                    const firstLetter = username ? username[0].toUpperCase() : 'U';
                    console.log('First letter of username:', firstLetter);
                    setUsernameFirstLetter(firstLetter);
                } else {
                    console.error('User document or username field not found in firestore');
                    setUsernameFirstLetter(null);
                }
            };
            fetchUserData();
        }
    }, [user]);

    return (
        <AppBar position="static" sx={{ bgcolor: '#EAF3F2' }} className='appbar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={Logo} alt='welchome29' className='logo' />
                        <div className='right-icons'>
                            <div onClick={handleLinkCart}>
                                    <Badge
                                        badgeContent={isUserLoggedIn ? totalItems : 0}
                                        color='success'
                                        sx={{
                                            alignSelf: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <ShoppingBagIcon />
                                    </Badge>
                            </div>
                            <SignUpForm isOpen={isDialogOpen} onClose={handleCloseDialog} />
                            <SignInForm isOpen={isDialogOpenSignin} onClose={handleCloseDialogSignin} />
                            {isLoggedIn && user ? (
                                <Tooltip title="User Menu">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar sx={{ bgcolor: 'teal', width: 32, height: 32, fontSize: '1.2rem' }}>{usernameFirstLetter || 'U'}</Avatar>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Inscription / Connexion">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="user-menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {isLoggedIn && user ? (
                                    [
                                        <MenuItem key='commandes' onClick={handleClickUserOrders}>Commandes</MenuItem>,
                                        <MenuItem key='deconnexion' onClick={logout}>Déconnexion</MenuItem>,
                                    ]
                                ) : (
                                    [
                                        <MenuItem key='isncription' onClick={() => setIsDialogOpen(true)}>Inscription</MenuItem>,
                                        <MenuItem key='connexion' onClick={() => setIsDialogOpenSignin(true)}>Connexion</MenuItem>,
                                    ]
                                )}
                            </Menu>
                        </div>
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleLinkMenu(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                lg: 'flex'
                            },
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            gap: '50px'
                        }}
                    >
                        <img src={Logo} alt='welchome29' className='logo' style={{ position: 'absolute', left: 0 }} />
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleLinkMenu(page)}
                                sx={{ my: 2, color: 'black', display: 'block', letterSpacing: '5px', fontSize: '1.2rem' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <div className='right-icons'>
                            <div onClick={handleLinkCart}>
                                <Badge badgeContent={isUserLoggedIn ? totalItems : 0} color='success' sx={{ alignSelf: 'center', cursor: 'pointer' }}>
                                    <ShoppingBagIcon sx={{ width: 32, height: 32 }} />
                                </Badge>
                            </div>
                            <SignUpForm isOpen={isDialogOpen} onClose={handleCloseDialog} />
                            <SignInForm isOpen={isDialogOpenSignin} onClose={handleCloseDialogSignin} />
                            {isLoggedIn && user ? (
                                <Tooltip title="User Menu">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar sx={{ bgcolor: 'teal', width: 32, height: 32, fontSize: '1.2rem' }}>{usernameFirstLetter || 'U'}</Avatar>
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Inscription / Connexion">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Menu
                                sx={{ mt: '45px' }}
                                id="user-menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {isLoggedIn && user ? (
                                    [
                                        <MenuItem key='commandes' onClick={handleClickUserOrders}>Commandes</MenuItem>,
                                        <MenuItem key='deconnexion' onClick={logout}>Déconnexion</MenuItem>,
                                    ]
                                ) : (
                                    [
                                        <MenuItem key='isncription' onClick={() => setIsDialogOpen(true)}>Inscription</MenuItem>,
                                        <MenuItem key='connexion' onClick={() => setIsDialogOpenSignin(true)}>Connexion</MenuItem>,
                                    ]
                                )}
                            </Menu>
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
