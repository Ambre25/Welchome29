import React, { useContext, useState } from 'react'
import TitleBanner from '../components/TitleBanner'
import styled from '@emotion/styled'
import { Button, Divider, Grid, IconButton, Menu, MenuItem, Modal, Paper, Tooltip, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { CartContext } from '../components/CartContext'
import CancelIcon from '@mui/icons-material/Cancel'
import { useNavigate } from 'react-router-dom'
import { blueGrey, red, teal } from '@mui/material/colors'
import { AuthContext } from '../components/AuthContext'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const imageUrls = [
  {
    term: 'paddle',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/paddle.jpg?alt=media&token=5b571c81-a554-480d-93bc-313651c18073',
  },
  {
    term: 'kayak',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/kayak.jpg?alt=media&token=4e258c85-4df0-4df9-84de-6e6a4d432617',
  },
  {
    term: 'dériveur',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/deriveur.jpg?alt=media&token=6ca1be61-f78c-4639-92b4-612c731d555f',
  },
  {
    term: 'planche',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/planche.jpg?alt=media&token=11ba76c9-a541-4c72-b2d2-f57c72d1c1c8',
  },
  {
    term: 'catamaran',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/cata.jpg?alt=media&token=24bfd252-bdca-4686-9cea-d1faf49699db',
  },
  {
    term: 'trimaran',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/trimaran.jpg?alt=media&token=142736b4-09e4-4e8b-a24d-3eaacf36fb3a',
  },
  {
    term: 'batz',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/ile-batz.jpeg?alt=media&token=121fd5b5-2af1-4371-9fbc-dcc3a0df20c7',
  },
  {
    term: 'chateau',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/chateau-taureau.jpg?alt=media&token=f3f8a7d2-05ed-40d2-8fe8-d9d66fdb87d4',
  },
  {
    term: 'peche',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/peche2.jpg?alt=media&token=bc72279f-a9f0-4eb7-b427-2452791fa77b',
  },
  {
    term: 'hydro',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/hydro.jpg?alt=media&token=c6e5cefd-db5c-4a3c-9d6f-ac359202a368',
  },
  {
    term: 'douceur',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/pause.jpg?alt=media&token=65ef9a8e-b829-4a32-ae63-a8333402f40e',
  },
  {
    term: 'zen',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/massagezen.jpg?alt=media&token=0329ae52-d70d-4123-b380-983c18b7dce4',
  },
  {
    term: 'veloroscoff',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/velo3.jpg?alt=media&token=d5fc9e83-fc39-4f96-b95c-70e9e641f8c6',
  },
  {
    term: 'velocarantec',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/velo2.jpg?alt=media&token=1713487e-b490-4fee-8641-b1967186f258',
  },
  {
    term: 'velomorlaix',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/bike.jpg?alt=media&token=823a6423-25bc-4508-a120-a85419726351',
  },
  {
    term: 'formuleconfort',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/menu-confort.png?alt=media&token=79f30ab5-a2a0-4a8f-be08-6b8448971679',
  },
  {
    term: 'formulebrunch',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/menu_sucre_sale.png?alt=media&token=e5093ef2-0d7f-48ab-bbaa-ea4b01779fa2',
  },
  {
    term: 'formuleprivilege',
    url: 'https://firebasestorage.googleapis.com/v0/b/welchome-perso.appspot.com/o/menu-privilege.png?alt=media&token=f7fdd53c-6d56-4504-ace1-21b428638095',
  },
]

export default function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);
  const [anchorElArray, setAnchorElArray] = useState(Array(cart.length).fill(null));
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);
  const [showLoginOrSignupModal, setShowLoginOrSignupModal] = useState(false);

  const handleConfirmClick = () => {
    if (!isLoggedIn) {
      setShowLoginOrSignupModal(true);
    } else {
      navigate('/Commande');
    }
  };

  const handleSignupClick = () => {
    setShowSignupModal(true);
    setShowLoginOrSignupModal(false);
  };

  const handleLoginClick = () => {
    setShowSigninModal(true);
    setShowLoginOrSignupModal(false);
  };

  const handleClick = (index) => (event) => {
    const updatedAnchorElArray = [...anchorElArray];
    updatedAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(updatedAnchorElArray);
  };

  const handleDetailsClick = (item) => {
    navigate(`/${item.name}`)
  }

  const handleClose = (index) => () => {
    const updatedAnchorElArray = [...anchorElArray];
    updatedAnchorElArray[index] = null;
    setAnchorElArray(updatedAnchorElArray);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  }

  /*const calculateShippingFees = () => {
    let hasOnlyLeisure = true;
    let nonLeisureTotalPrice = 0;
    cart.forEach((item) => {
      if(item.type !== 'sport nautique' && item.type !== 'visite' && item.type !== 'bien-etre' && item.type !== 'peche' && item.type !== 'velo') {
        hasOnlyLeisure = false;
        nonLeisureTotalPrice += item.newPriceAfterPromotion ? item.newPriceAfterPromotion * item.quantity : item.totalPrice * item.quantity;
      }
    });
    if(hasOnlyLeisure) {
      return 0;
    } else if (nonLeisureTotalPrice < 30) {
      return 10;
    } else {
      return 0;
    }
  };

  const shippingFees = calculateShippingFees(cart);*/

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (item.newPriceAfterPromotion) {
        totalPrice += item.newPriceAfterPromotion * item.quantity;
      } else {
        totalPrice += item.totalPrice * item.quantity;
      }
    });
    return totalPrice/* + shippingFees*/;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <>
      <TitleBanner text="MON PANIER" />
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        {cart.length === 0 ? (
          <Paper sx={{ p: 5, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px' }} elevation={5}>
            <CancelIcon style={{ display: 'block', margin: 'auto', fontSize: '3rem', textAlign: 'center' }} />
            <Typography variant='h6' component='div' sx={{ marginTop: '20px', textAlign: 'center' }}>
              Vous n'avez pas encore ajouté d'articles dans votre panier.
            </Typography>
          </Paper>
        ) : (
          <>
            <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', backgroundColor: blueGrey[900] }} elevation={5}>
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'white', letterSpacing: '6px' }}>
                PRIX TOTAL : {totalPrice}€
              </Typography>
            </Paper>
            <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '30px', borderRadius: '20px', backgroundColor: red[600] }} elevation={5}>
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'white', letterSpacing: '6px' }}>
                DONT FRAIS DE LIVRAISON : OFFERT
              </Typography>
            </Paper>
          {cart.map((item, index) => {
            const itemImageUrl = item.img_url || imageUrls.find(image => item.id.toLowerCase().includes(image.term)).url;
            return (
            <Paper key={index} sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px' }} elevation={5}>
              <Grid container spacing={2} direction='row' alignItems='center'>
                <Grid item xs={3}>
                  <Img alt={item.name} src={itemImageUrl} style={{ borderRadius: '20px' }} />
                </Grid>
                <Grid item xs={8} container direction='column' justifyContent='space-between'>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1' component='div'>
                      <strong>{item.name}</strong>
                    </Typography>
                    <Typography variant='body2' gutterBottom>
                      Quantité: {item.quantity}
                    </Typography>
                    {(item.id.includes('Paddle') || 
                      item.id.includes('Kayak') || 
                      item.id.includes('Dériveur') || 
                      item.id.includes('Planche') ||
                      item.id.includes('Catamaran')
                      ) && (
                      <>
                        <Typography variant='body2' gutterBottom>
                          Date: {item.date.toDate().toLocaleDateString()}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          Heure: {item.time.toDate().toLocaleTimeString()}
                        </Typography>
                        <Typography variant='body2' gutterBottom>
                          Durée: {item.duration}h
                        </Typography>
                      </>
                    )}
                    {item.id.includes('Trimaran') && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date.toDate().toLocaleDateString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure: {item.time.toDate().toLocaleTimeString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Durée: 1 journée
                          </Typography>
                        </>
                    )}
                    {item.id.includes('Batz') && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Adultes: {item.adults}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Enfants: {item.children}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Bébés: {item.babies}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date_visite.toDate().toLocaleDateString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure de départ: {item.departureTime.toDate().toLocaleTimeString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure de retour: {item.returnTime.toDate().toLocaleTimeString()}
                          </Typography>
                        </>
                    )}
                    {item.id.includes('Chateau') && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Adultes: {item.adults}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Enfants: {item.children}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Bébés: {item.babies}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date.toDate().toLocaleDateString()}
                          </Typography>
                        </>
                    )}
                    {item.id.includes('Peche') && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Adultes: {item.adults}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Enfants: {item.children}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date_peche.toDate().toLocaleDateString()}
                          </Typography>
                        </>
                    )}
                    {(item.id.includes('Hydro') || item.id.includes('Douceur') || item.id.includes('Zen')) && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Adultes: {item.adults}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date_bienetre.toDate().toLocaleDateString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure: {item.time_bienetre.toDate().toLocaleTimeString()}
                          </Typography>
                        </>
                    )}
                    {(item.id.includes('Veloroscoff') || item.id.includes('Velocarantec') || item.id.includes('Velomorlaix')) && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Vélo électrique: {item.velo_electrique}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Vélo adulte: {item.velo_adulte}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Vélo enfant: {item.velo_enfant}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date départ: {item.date_depart.toDate().toLocaleString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date retour: {item.date_retour.toDate().toLocaleString()}
                          </Typography>
                        </>
                    )}
                    {item.id.includes('Formuleconfort') && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            Croissant: {item.nb_croissant}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Pain au chocolat: {item.nb_pain_choc}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Confiture: {item.nb_confiture}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Nutella: {item.nb_nutella}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date_traiteur.toDate().toLocaleDateString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure: {item.heure_traiteur.toDate().toLocaleTimeString()}
                          </Typography>
                        </>
                    )}
                    {(item.id.includes('Formulebrunch') || item.id.includes('Formuleprivilege')) && (
                        <>
                          <Typography variant='body2' gutterBottom>
                            1/2 baguette: {item.nb_baguette}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            1/2 tradition: {item.nb_tradition}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            1/2 tradition céréales: {item.nb_cereales}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Confiture: {item.nb_confiture}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Nutella: {item.nb_nutella}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Date: {item.date_traiteur.toDate().toLocaleDateString()}
                          </Typography>
                          <Typography variant='body2' gutterBottom>
                            Heure: {item.heure_traiteur.toDate().toLocaleTimeString()}
                          </Typography>
                        </>
                    )}
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle1' component='div'>
                        <strong>
                          Prix :{' '}
                          {item.hasPromotion
                            ? `${item.newPriceAfterPromotion}€`
                            : `${item.totalPrice}€`}
                        </strong>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={1} container alignItems='flex-start' justifyContent='flex-end'>
                    <Tooltip title="options">
                      <IconButton onClick={handleClick(index)}>
                        <MoreHorizIcon />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      id={`simple-menu-${index}`}
                      anchorEl={anchorElArray[index]}
                      keepMounted
                      open={Boolean(anchorElArray[index])}
                      onClose={handleClose(index)}
                    >
                      <MenuItem onClick={() => handleDetailsClick(item)}>Détails de l'article</MenuItem>
                      <Divider />
                      <MenuItem onClick={() => {handleRemoveFromCart(item.id); handleClose(index)();}}>Supprimer l'article</MenuItem>
                    </Menu>
                </Grid>
              </Grid>
            </Paper>
            )
          })}
        </>
        )}
        <div onClick={handleConfirmClick}>
          <Paper
            sx={{
              p: 3,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              marginTop: '30px',
              marginBottom: '110px',
              borderRadius: '20px',
              backgroundColor: teal[300],
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: teal[500],
              }
            }}
            elevation={5}
          >
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'white', letterSpacing: '6px' }}>
              VALIDER LE PANIER
            </Typography>
          </Paper>
        </div>
      </div>
      <Modal
        open={showLoginOrSignupModal}
        onClose={() => setShowLoginOrSignupModal(false)}
        aria-labelledby="login-or-signup-modal"
        aria-describedby="login-or-signup-modal"
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            height: 200,
            padding: 2,
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column', // Align the items vertically
            alignItems: 'center', // Center the content horizontally
            justifyContent: 'center',
            gap: '25px'
          }}
        >
          <Typography variant="body1" gutterBottom>
            Veuillez vous inscrire ou vous connecter afin de confirmer votre commande.
          </Typography>
          <div style={{ display: 'flex', gap: '25px' }}>
            <Button variant="contained" onClick={handleSignupClick} style={{ marginTop: '10px' }}>
              Inscription
            </Button>
            <Button variant="contained" onClick={handleLoginClick} style={{ marginTop: '10px' }}>
              Connexion
            </Button>
          </div>
        </Paper>
      </Modal>

      {/* Show the signup modal if user clicks on the "Inscription" button */}
      {showSignupModal && (
        <SignUpForm isOpen={showSignupModal} onClose={() => setShowSignupModal(false)} />
      )}
      {/* Show the signin modal if user clicks on the "Connexion" button */}
      {showSigninModal && (
        <SignInForm isOpen={showSigninModal} onClose={() => setShowSigninModal(false)} />
      )}
    </>
  )
}
