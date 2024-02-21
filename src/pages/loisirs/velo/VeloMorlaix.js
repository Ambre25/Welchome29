import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-velo-mlx.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import BikeIcon from '../../../assets/bicyclette.png'
import DateTimeIcon from '../../../assets/calendar.png'
import AdulteIcon from '../../../assets/bike_adulte.png'
import ChildIcon from '../../../assets/bike_child.png'
import HourIcon from '../../../assets/hour.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import TableVeloCarantecMorlaix from '../../../components/TableVeloCarantecMorlaix'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import dayjs from 'dayjs'
import { Timestamp } from 'firebase/firestore'
import InfoModal from '../../../components/InfoModal'

export default function VeloMorlaix() {

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
        'Vélo électrique': { 1: 32, 2: 44, 3: 75, 4: 100, 5: 122, 6: 145, 7: 165, 8: 185 },
        'Vélo adulte': { 1: 25, 2: 40, 3: 62, 4: 85, 5: 100, 6: 110, 7: 122, 8: 135 },
        'Vélo enfant': { 1: 14, 2: 20, 3: 40, 4: 45, 5: 50, 6: 55, 7: 60, 8: 70 },
    };

    const handleAddToCart = () => {
        const jsDepartureDate = departureDate instanceof Date ? departureDate : new Date(departureDate);
        const jsReturnDate = returnDate instanceof Date ? returnDate : new Date(returnDate);
    
        const departureDateString = dayjs(jsDepartureDate).format('YYYY-MM-DDTHH:mm:ss');
        const returnDateString = dayjs(jsReturnDate).format('YYYY-MM-DDTHH:mm:ss');
    
        const itemId = `Velomorlaix-${departureDateString}-${returnDateString}`;

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
          name: 'Location de vélo à Morlaix',
          velo_electrique: electricBike,
          velo_adulte: adultBike, 
          velo_enfant: childBike, 
          date_depart: Timestamp.fromDate(jsDepartureDate),
          date_retour: Timestamp.fromDate(jsReturnDate),
          quantity: totalQuantity,
          duree: duration,
          totalPrice: totalPrice,
        });
    };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="LOUER UN VÉLO À MORLAIX" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TableVeloCarantecMorlaix />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Vélo électrique" img_url={BikeIcon} width='50px' customComponent='select' value={electricBike} onChange={setElectricBike} />
            <LoisirCard text="Vélo adulte" img_url={AdulteIcon} width='50px' customComponent='select' value={adultBike} onChange={setAdultBike} />
            <LoisirCard text="Vélo enfant" img_url={ChildIcon} width='50px' customComponent='select' value={childBike} onChange={setChildBike} />
            <LoisirCard text="Durée" img_url={HourIcon} width='50px' customComponent='select-velo-carmor' value={duration} onChange={setDuration} />
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