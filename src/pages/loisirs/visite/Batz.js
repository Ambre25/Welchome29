import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-batz.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import AdulteIcon from '../../../assets/child.png'
import ChildIcon from '../../../assets/adulte.png'
import BabyIcon from '../../../assets/baby.png'
import DateIcon from '../../../assets/calendar.png'
import HourIcon from '../../../assets/hour.png'
import TableNavetteBatz from '../../../components/TableNavetteBatz'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'
import { Timestamp } from 'firebase/firestore'
import InfoModal from '../../../components/InfoModal'

export default function Batz() {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);
    const [date, setDate] = useState(null);
    const [departureTime, setDepartureTime] = useState(null);
    const [returnTime, setReturnTime] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const { addToCart } = useContext(CartContext);

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleAddToCart = () => {

        const totalQuantity = adults + children + babies;

        if (totalQuantity === 0) {
            setModalMessage("Veuillez entrer un nombre de personnes supérieur à 0 s'il vous plaît");
            setOpenModal(true);
            return;
          }
        
          if (!date) {
            setModalMessage("Veuillez choisir une date s'il vous plaît");
            setOpenModal(true);
            return;
          }
        
          if (!departureTime) {
            setModalMessage("Veuillez choisir une heure de départ s'il vous plaît");
            setOpenModal(true);
            return;
          }
        
          if (!returnTime) {
            setModalMessage("Veuillez choisir une heure de retour s'il vous plaît");
            setOpenModal(true);
            return;
          }

        const jsDate = date instanceof Date ? date : new Date(date);
        const jsDepartureTime = departureTime instanceof Date ? departureTime : new Date(departureTime);
        const jsReturnTime = returnTime instanceof Date ? returnTime : new Date(returnTime);

        if (jsReturnTime <= jsDepartureTime) {
            setModalMessage("L'heure de retour ne peut pas être inférieure ou égale à l'heure de départ. Veuillez choisir une heure de retour valide s'il vous plaît");
            setOpenModal(true);
            return;
        }
    
        const dateString = jsDate.toISOString().split('T')[0];
        const departureTimeString = jsDepartureTime.toTimeString().split(' ')[0];
        const returnTimeString = jsReturnTime.toTimeString().split(' ')[0];
    
        const itemId = `Batz-${dateString}-${departureTimeString}-${returnTimeString}`;

        const totalPrice = adults * 13 + children * 8 + babies * 3;
    
        addToCart({
          id: itemId,
          type: 'visite',
          name: 'Navette île de Batz',
          adults,
          children,
          babies,
          date_visite: Timestamp.fromDate(jsDate),
          departureTime: Timestamp.fromDate(jsDepartureTime),
          returnTime: Timestamp.fromDate(jsReturnTime),
          quantity: totalQuantity,
          totalPrice: totalPrice,
        });
      };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="RÉSERVATION NAVETTE ÎLE DE BATZ" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TableNavetteBatz />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Nombre d'adultes" img_url={AdulteIcon} width='40px' customComponent='select' value={adults} onChange={setAdults} />
            <LoisirCard text="Nombre d'enfants" img_url={ChildIcon} width='40px' customComponent='select' value={children} onChange={setChildren} />
            <LoisirCard text="Nombre de bébés" img_url={BabyIcon} width='40px' customComponent='select' value={babies} onChange={setBabies} />
            <LoisirCard text="Date" img_url={DateIcon} width='40px' customComponent='datepicker' value={date} onChange={setDate} />
            <LoisirCard text="Heure Aller" img_url={HourIcon} width='40px' customComponent='timepicker' value={departureTime} onChange={setDepartureTime} />
            <LoisirCard text="Heure Retour" img_url={HourIcon} width='40px' customComponent='timepicker' value={returnTime} onChange={setReturnTime} />
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