import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState, useContext } from 'react'
import '../styles/dialogBox.css'
import { useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { teal } from '@mui/material/colors'

const SignInForm = ({ isOpen, onClose }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { login } = useContext(AuthContext);

    const handleSignin = () => {
        login(email, password)
            .then((user) => {
                if(user) {
                    console.log('Connexion réussie', user);
                    setShowConfirmation(true);
                    onClose();
                }
            })
            .catch((error) => {
                console.error('Erreur lors de la connexion', error);
            });
    };

    useEffect(() => {
        let timer;
        if (showConfirmation) {
            timer = setTimeout(() => {
                setShowConfirmation(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [showConfirmation]);

  return (
    <>
       <Dialog open={isOpen} onClose={onClose} className='rounded-dialog'>
            <DialogTitle sx={{ textAlign: 'center', letterSpacing: '7px', backgroundColor: teal[700], color: 'white' }}>CONNEXION</DialogTitle>
            <DialogContent sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: '35px', marginTop: '15px' }}>
                <TextField 
                    type='email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    label='Email' 
                    fullWidth 
                    sx={{ marginTop: '15px' }}
                />
                <TextField 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    label='Mot de passe' 
                    fullWidth 
                />
            </DialogContent>
            <DialogActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
                <Button variant='contained' sx={{ width: 150, paddingY: '10px', bgcolor: 'black', color: 'white' }} onClick={handleSignin}>Se connecter</Button>
            </DialogActions>
       </Dialog>
    </>
  )
}

export default SignInForm;