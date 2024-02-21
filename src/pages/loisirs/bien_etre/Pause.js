import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-bienetre-douceur.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import AdulteIcon from '../../../assets/child.png'
import HourIcon from '../../../assets/hour.png'
import DateIcon from '../../../assets/calendar.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import TableZen from '../../../components/TableZen'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import { Timestamp } from 'firebase/firestore'
import InfoModal from '../../../components/InfoModal'

export default function Pause() {

    const [adults, setAdults] = useState(0);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const { addToCart } = useContext(CartContext);

    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleAddToCart = () => {
        const jsDate = date instanceof Date ? date : new Date(date);
        const jsTime = time instanceof Date ? time : new Date(time);
    
        const dateString = jsDate.toISOString().split('T')[0];
        const timeString = jsTime.toTimeString().split(' ')[0];
    
        const itemId = `Douceur-${dateString}-${timeString}`;

        const totalPrice = adults * 85;

        if (adults === 0) {
            setModalMessage("Veuillez entrer un nombre de personnes supérieur à 0 s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!date) {
            setModalMessage("Veuillez choisir une date s'il vous plaît");
            setOpenModal(true);
            return;
        }

        if (!time) {
            setModalMessage("Veuillez choisir une heure s'il vous plaît");
            setOpenModal(true);
            return;
        }
    
        addToCart({
          id: itemId,
          type: 'bien-etre',
          name: 'Pause douceur',
          adults,
          date_bienetre: Timestamp.fromDate(jsDate),
          time: Timestamp.fromDate(jsTime),
          quantity: adults,
          totalPrice: totalPrice,
        });
      };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="RÉSERVATION PAUSE DOUCEUR À ROSCOFF" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TableZen />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Nombre d'adultes" img_url={AdulteIcon} width='50px' customComponent='select' value={adults} onChange={setAdults} />
            <LoisirCard text="Date" img_url={DateIcon} width='40px' customComponent='datepicker' value={date} onChange={setDate} />
            <LoisirCard text="Heure" img_url={HourIcon} width='40px' customComponent='timepicker' value={time} onChange={setTime} />
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