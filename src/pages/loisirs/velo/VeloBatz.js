import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-velo-batz.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import BikeIcon from '../../../assets/bicyclette.png'
import DateTimeIcon from '../../../assets/calendar.png'
import AdulteIcon from '../../../assets/bike_adulte.png'
import ChildIcon from '../../../assets/bike_child.png'
import HourIcon from '../../../assets/hour.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import TableVeloBatz from '../../../components/TableVeloBatz'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import dayjs from 'dayjs'
import { Timestamp } from 'firebase/firestore'
import InfoModal from '../../../components/InfoModal'

export default function VeloBatz() {

    const [electricBike, setElectricBike] = useState(0);
    const [adultBike, setAdultBike] = useState(0);
    const [childBike, setChildBike] = useState(0);
    const [duration, setDuration] = useState(0);
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);

    const { addToCart } = useContext(CartContext);

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const prices = {
        'Vélo électrique': { 1: 20, 2: 25, 3: 32, 4: 45, 5: 75, 6: 100, 7: 123, 8: 145, 9: 170, 10: 195 },
        'Vélo adulte': { 1: 10, 2: 12, 3: 13, 4: 23, 5: 30, 6: 35, 7: 41, 8: 47, 9: 53, 10: 56 },
        'Vélo enfant': { 1: 8, 2: 10, 3: 12, 4: 21, 5: 28, 6: 33, 7: 39, 8: 44, 9: 49, 10: 52 },
    };

    const handleAddToCart = () => {
        const jsDepartureDate = departureDate instanceof Date ? departureDate : new Date(departureDate);
        const jsReturnDate = returnDate instanceof Date ? returnDate : new Date(returnDate);
    
        const departureDateString = dayjs(jsDepartureDate).format('YYYY-MM-DDTHH:mm:ss');
        const returnDateString = dayjs(jsReturnDate).format('YYYY-MM-DDTHH:mm:ss');
    
        const itemId = `Veloroscoff-${departureDateString}-${returnDateString}`;

        const totalQuantity = electricBike + adultBike + childBike;

        const totalElectricBikePrice = prices['Vélo électrique'][duration] * electricBike;
        const totalAdultBikePrice = prices['Vélo adulte'][duration] * adultBike;
        const totalChildBikePrice = prices['Vélo enfant'][duration] * childBike;

        const totalPrice = totalElectricBikePrice + totalAdultBikePrice + totalChildBikePrice;

        if (totalQuantity === 0) {
            setModalMessage("Veuillez sélectionner au moins 1 vélo s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!duration) {
            setModalMessage("Veuillez choisir une durée de locaion s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!departureDate) {
            setModalMessage("Veuillez choisir une date et une heure de départ s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!returnDate) {
            setModalMessage("Veuillez choisir une date et une heure de retour s'il vous plaît");
            setOpenModal(true);
            return;
        }
    
        addToCart({
          id: itemId,
          type: 'velo',
          name: 'Location de vélo île de Batz',
          velo_electrique: electricBike,
          velo_adulte: adultBike, 
          velo_enfant: childBike, 
          date_depart: Timestamp.fromDate(jsDepartureDate),
          date_retour: Timestamp.fromDate(jsReturnDate),
          quantity: totalQuantity,
          duration: duration,
          totalPrice: totalPrice,
        });
    };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="LOUER UN VÉLO SUR L'ÎLE DE BATZ" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TableVeloBatz />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Vélo électrique" img_url={BikeIcon} width='50px' customComponent='select' value={electricBike} onChange={setElectricBike} />
            <LoisirCard text="Vélo adulte" img_url={AdulteIcon} width='50px' customComponent='select' value={adultBike} onChange={setAdultBike} />
            <LoisirCard text="Vélo enfant" img_url={ChildIcon} width='50px' customComponent='select' value={childBike} onChange={setChildBike} />
            <LoisirCard text="Durée" img_url={HourIcon} width='50px' customComponent='select-velo' value={duration} onChange={setDuration} />
            <LoisirCard text="Départ" img_url={DateTimeIcon} width='40px' customComponent='datetimepicker' value={departureDate} onChange={setDepartureDate} />
            <LoisirCard text="Retour" img_url={DateTimeIcon} width='40px' customComponent='datetimepicker' value={returnDate} onChange={setReturnDate} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                  variant='contained'
                  sx={{
                      bgcolor: blueGrey[900],
                      color: 'white',
                      paddingY: '1rem',
                      marginTop: '50px',
                      width: 250,
                      marginBottom: '125px'
                  }}
                  onClick={handleAddToCart}
              >
                  Ajouter au panier
              </Button>
        </div>
        <InfoModal open={openModal} onClose={handleCloseModal} message={modalMessage} />
    </>
  )
}