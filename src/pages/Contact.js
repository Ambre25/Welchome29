import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebase-config'
import { Button, TextField } from '@mui/material'
import '../styles/contactForm.css'
import Title from '../components/Title'
import BodyPage from '../components/BodyPage'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'
import { blueGrey } from '@mui/material/colors'

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envoi du formulaire à Firebase
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
      });

      // Réinitialisation des champs après soumission du formulaire
      setName('');
      setEmail('');
      setMessage('');

      // Message de succès
      alert('Le formulaire a été envoyé avec succès !');

    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
    }
  };

  return (
    <BodyPage>
      <Title text='FORMULAIRE DE CONTACT' />
      <form className="contact-form" onSubmit={handleSubmit}>
        <TextField
          label="Nom"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Adresse e-mail"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="submit-button"
          sx={{
            bgcolor: blueGrey[900],
            paddingY: '1rem',
          }}
        >
          Envoyer
        </Button>
      </form>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
        <a href='https://www.facebook.com/welchome29' target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', color: 'black' }}>
          <FacebookIcon
            sx={{
              cursor: 'pointer',
              padding: '5px',
              fontSize: '2.5rem',
              borderRadius: '20px',
              transition: 'background-color 0.5s',
              ':hover': {
                backgroundColor: '#E4E4E4'
              }
            }}
          />
        </a>
        <a href='https://www.instagram.com/welchome29/' target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', color: 'black' }}>
          <InstagramIcon
            sx={{
              cursor: 'pointer',
              padding: '5px',
              fontSize: '2.5rem',
              borderRadius: '20px',
              transition: 'background-color 0.5s',
              ':hover': {
                backgroundColor: '#E4E4E4'
              }
            }}
          />
        </a>
        <a href='https://g.co/kgs/A7hvxu' target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', color: 'black' }}>
          <GoogleIcon
            sx={{
              cursor: 'pointer',
              padding: '5px',
              fontSize: '2.5rem',
              borderRadius: '20px',
              transition: 'background-color 0.5s',
              ':hover': {
                backgroundColor: '#E4E4E4'
              }
            }}
          />
        </a>
      </div>
    </BodyPage>
  )
}
