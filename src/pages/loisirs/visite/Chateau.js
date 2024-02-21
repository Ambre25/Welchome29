import React from 'react'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import mainBg from '../../../assets/bg-chateau.jpg'
import Title from '../../../components/Title'
import LoisirCard from '../../../components/LoisirCard'
import AdulteIcon from '../../../assets/child.png'
import ChildIcon from '../../../assets/adulte.png'
import BabyIcon from '../../../assets/baby.png'
import DateIcon from '../../../assets/calendar.png'
import { Button } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import TableChateau from '../../../components/TableChateau'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../components/CartContext'

export default function Chateau() {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [babies, setBabies] = useState(0);
    const [date, setDate] = useState(null);

    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const jsDate = date instanceof Date ? date : new Date(date);
    
        const dateString = jsDate.toISOString().split('T')[0];
    
        const itemId = `Chateau-${dateString}`;

        const totalQuantity = adults + children + babies;

        const totalPrice = adults * 25 + children * 13;
    
        addToCart({
          id: itemId,
          type: 'visite',
          name: 'Château du taureau',
          adults,
          children,
          babies,
          date: jsDate,
          quantity: totalQuantity,
          totalPrice: totalPrice,
        });
      };

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île de Batz' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="RÉSERVATION EXCURSION AU CHÂTEAU DU TAUREAU" />
        </div>
        <div style={{ marginTop: '25px' }}>
            <TableChateau />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '25px', flexWrap: 'wrap' }}>
            <LoisirCard text="Nombre d'adultes" img_url={AdulteIcon} width='50px' customComponent='select' value={adults} onChange={setAdults} />
            <LoisirCard text="Nombre d'enfants" img_url={ChildIcon} width='40px' customComponent='select' value={children} onChange={setChildren} />
            <LoisirCard text="Nombre de bébés" img_url={BabyIcon} width='40px' customComponent='select' value={babies} onChange={setBabies} />
            <LoisirCard text="Date" img_url={DateIcon} width='40px' customComponent='datepicker' value={date} onChange={setDate} />
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
    </>
  )
}