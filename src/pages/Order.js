import React, { useContext, useEffect, useState } from 'react'
import TitleBanner from '../components/TitleBanner'
import { CartContext } from '../components/CartContext'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { blueGrey, grey} from '@mui/material/colors'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EuroIcon from '@mui/icons-material/Euro'
import PaymentsIcon from '@mui/icons-material/Payments'
import { AuthContext } from '../components/AuthContext'
import { Timestamp, addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, serverTimestamp, setDoc, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import DateTimePicker from '../components/DateTimePicker'
import { useNavigate } from 'react-router-dom'

export default function Order() {

    const { cart, removeFromCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [userName, setUsername] = useState(null);
    const [paymentMode, setPaymentMode] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [promo, setPromo] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (event, newAlignment) => {
        setPaymentMode(newAlignment);
    };

    const cartArray = Object.values(cart);

    const onlyClassicItems = cartArray.some(item =>  !item.hasOwnProperty('type'));

    useEffect(() => {
        if (user) {
          const fetchUserData = async () => {
            try {
              const userRef = doc(db, 'users', user.uid);
              const userSnapshot = await getDoc(userRef);
    
              if (userSnapshot.exists() && userSnapshot.data().username) {
                const userData = userSnapshot.data();
                console.log('Connexion réussie', user);
                console.log('User data from Firebase:', userData);
    
                const username = userData.username;
                setUsername(username);
              } else {
                console.error('User document or username field not found in firestore');
              }
            } catch (error) {
              console.error('Error fetching user data', error);
            }
          };
          fetchUserData();
        }
      }, [user]);

      const handleConfirmOrder = async () => {
        try {
          // Convertir la date de livraison en format timestamp
          const orderId = `${Date.now()}${Math.random().toString(36).substr(2, 10)}`;
      
          const orderRef = doc(db, 'Order', orderId);
          const orderData = {
            timestamp: serverTimestamp(),
            deliveryAddress: deliveryAddress,
            phone: phone,
            city: city,
            paymentMode: paymentMode,
            codePromo: promo,
            user: user.uid,
        };

        if (dateTime) {
          orderData.deliveryDate = Timestamp.fromDate(new Date(dateTime));
        }

        await setDoc(orderRef, orderData);
          
          cart.forEach(async (item) => {
            const { id, name, quantity, totalPrice, newPriceAfterPromotion } = item;
            let itemData = {
              id,
              name,
              quantity,
              totalPrice: newPriceAfterPromotion ? newPriceAfterPromotion * quantity : totalPrice,
            };
            if (item.type === 'sport nautique') {
              itemData.duration = item.duration;
              itemData.time = item.time;
              itemData.date = item.date;
            }
            if (item.type === 'visite') {
              itemData.adults = item.adults;
              itemData.children = item.children;
              itemData.babies = item.babies;
              itemData.date_visite = item.date_visite;
              itemData.departureTime = item.departureTime;
              itemData.returnTime = item.returnTime;
            }
            if (item.type === 'peche') {
              itemData.adults = item.adults;
              itemData.children = item.children;
              itemData.date_peche = item.date_peche;
            }
            if (item.type === 'bien-etre') {
              itemData.adults = item.adults;
              itemData.date_bienetre = item.date_bienetre;
              itemData.time_bienetre = item.time_bienetre;
            }
            if (item.type === 'velo') {
              itemData.velo_adulte = item.velo_adulte;
              itemData.velo_electrique = item.velo_electrique;
              itemData.velo_enfant = item.velo_enfant;
              itemData.duration = item.duration;
              itemData.departureDateTime = item.date_depart;
              itemData.returnDateTime = item.date_retour;
            }
            if (item.type === 'traiteur') {
              itemData.nb_croissant = item.nb_croissant;
              itemData.nb_pain_choc = item.nb_pain_choc;
              itemData.nb_nutella = item.nb_nutella;
              itemData.nb_confiture = item.nb_confiture;
              itemData.date_traiteur = item.date_traiteur;
              itemData.heure_traiteur = item.heure_traiteur;
            }
            if (item.type === 'traiteur-plus') {
              itemData.nb_baguette = item.nb_baguette;
              itemData.nb_tradition = item.nb_tradition;
              itemData.nb_cereales = item.nb_cereales;
              itemData.nb_confiture = item.nb_confiture;
              itemData.nb_nutella = item.nb_nutella;
              itemData.date_traiteur = item.date_traiteur;
              itemData.heure_traiteur = item.heure_traiteur;
            }
            await addDoc(collection(orderRef, 'items'), itemData);
          });
      
          setIsModalOpen(true);
          setModalMessage('Votre commande a été prise en compte avec succès !');
        } catch (error) {
          console.error('Erreur lors de la validation de la commande :', error);
        }
      };

      const deleteCart = async (userId) => {
        try {
          // Récupérer les documents du panier associés à l'utilisateur
          const cartQuery = query(collection(db, 'cart'), where('userId', '==', userId));
          const cartSnapshot = await getDocs(cartQuery);
      
          // Supprimer chaque document du panier
          cartSnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
          });
      
          console.log('Le panier de l\'utilisateur a été supprimé avec succès!');
        } catch (error) {
          console.error('Erreur lors de la suppression du panier :', error);
        }
      };

      const handleCloseModal = () => {
        // Vider le panier (ajoutez ici le code pour supprimer le panier)
        deleteCart(user.uid);
        cartArray.forEach((item) => {
          removeFromCart(item.id);
        })
        setIsModalOpen(false);
        // Rediriger vers la page d'accueil
        navigate('/');
      };

  return (
    <>
        <TitleBanner text="INFORMATIONS DE COMMANDE" />
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', letterSpacing: '6px' }}>
                  MON MODE DE PAIEMENT
              </Typography>
              <ToggleButtonGroup
                  value={paymentMode}
                  exclusive
                  onChange={handleChange}
                  aria-label='Payment Mode'
                  sx={{
                      display: 'flex',
                      justifyContent: 'center'
                  }}
              >
                  <ToggleButton value='cb' title='Carte de crédit' sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}><CreditCardIcon /><Typography variant='body2'>Carte</Typography></ToggleButton>
                  <ToggleButton value='cash' title='Cash' sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}><EuroIcon /><Typography variant='body2'>Cash</Typography></ToggleButton>
                  <ToggleButton value='check' title='Chèque' sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}><PaymentsIcon /><Typography variant='body2'>Chèque</Typography></ToggleButton>
              </ToggleButtonGroup>
              <Typography variant="body2" gutterBottom sx={{ textAlign: 'center', letterSpacing: '6px', fontStyle: 'italic', marginTop: '10px', color: 'grey' }}>
                  Le paiement s'effectue à la livraison
              </Typography>
          </Paper>
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
              <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', letterSpacing: '3px' }}>
                  Votre nom : <strong style={{ color: grey[600], textTransform: 'uppercase' }}>{userName}</strong>
              </Typography>
          </Paper>
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
          <TextField variant='standard' placeholder='Code Promo' InputProps={{ sx: {  '&::placeholder': { textAlign: 'center' } }}} value={promo} onChange={(e) => setPromo(e.target.value)} />
          </Paper>
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
            <TextField variant='standard' placeholder='Adresse de livraison' InputProps={{ sx: {  '&::placeholder': { textAlign: 'center' } }}} value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
          </Paper>
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
            <TextField variant='standard' placeholder='Ville' InputProps={{ sx: {  '&::placeholder': { textAlign: 'center' } }}} value={city} onChange={(e) => setCity(e.target.value)} />
          </Paper>
          <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
            <TextField variant='standard' placeholder='Téléphone' InputProps={{ sx: {  '&::placeholder': { textAlign: 'center' } }}} value={phone} onChange={(e) => setPhone(e.target.value)} />
          </Paper>
          {onlyClassicItems && (
              <Paper sx={{ p: 3, margin: 'auto', maxWidth: 500, flexGrow: 1, marginBottom: '10px', borderRadius: '20px', marginTop: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }} elevation={5}>
                  <DateTimePicker value={dateTime} onChange={setDateTime} />
              </Paper>
          )}
          <div onClick={handleConfirmOrder}>
              <Paper
                  sx={{
                      p: 3,
                      margin: 'auto',
                      maxWidth: 500,
                      flexGrow: 1,
                      marginTop: '50px',
                      borderRadius: '20px',
                      backgroundColor: blueGrey[800],
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      marginBottom: '125px',
                      '&:hover': {
                          backgroundColor: blueGrey[900],
                      }
                  }}
                  elevation={5}
              >
                  <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'white', letterSpacing: '6px' }}>
                      CONFIRMER LA COMMANDE
                  </Typography>
              </Paper>
          </div>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Confirmation de commande</DialogTitle>
        <DialogContent>
          <DialogContentText>{modalMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Fermer</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
