import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, TextField } from '@mui/material';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import { db } from '../firebase-config';
import '../styles/dialogBox.css';
import { teal } from '@mui/material/colors';
import { AuthContext } from './AuthContext'; 

const SignUpForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUserName] = useState('');
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [signupSuccessMessage, setSignupSuccessMessage] = useState('');
  const { login } = useContext(AuthContext);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User object:', user);
        console.log('Username:', username);
        updateProfile(user, {
          displayName: username,
        })
          .then(() => {
            const userRef = doc(db, 'users', user.uid);
            setDoc(userRef, { username: username })
              .then(() => {
                login(email, password)
                  .then((loggedInUser) => {
                    console.log('Logged in user:', loggedInUser);
                    console.log('Username:', username);

                    console.log('Inscription réussie', user);
                    setSignupSuccessMessage('Inscription réussie. Vous êtes maintenant connecté.');
                    setIsSnackbarOpen(true);
                    onClose();
                  })
                  .catch((error) => {
                    console.error('Erreur lors de la connexion après l\'inscription', error);
                  });
              })
              .catch((error) => {
                console.error('Erreur lors de la création du document utilisateur', error);
              });
          })
          .catch((error) => {
            console.error('Erreur lors de la mise à jour du profil', error);
          });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'inscription', error);
      });
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <>
          <Dialog open={isOpen} onClose={onClose} className='rounded-dialog'>
              <DialogTitle sx={{ textAlign: 'center', letterSpacing: '7px', backgroundColor: teal[700], color: 'white' }}>INSCRIPTION</DialogTitle>
              <DialogContent sx={{ width: 300, display: 'flex', flexDirection: 'column', gap: '35px', marginTop: '15px' }}>
                  <TextField
                      type='text'
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                      label="Nom d'utilisateur"
                      fullWidth
                      sx={{ marginTop: '15px' }}
                  />
                  <TextField
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      label='Email'
                      fullWidth
                  />
                  <TextField
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      label='Mot de passe'
                      fullWidth
                  />
                  <TextField
                      type='password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      label='Confirmer le mot de passe'
                      fullWidth
                  />
              </DialogContent>
              <DialogActions sx={{ display: 'flex', justifyContent: 'center', marginBottom: '35px' }}>
                  <Button variant='contained' sx={{ width: 150, paddingY: '10px', bgcolor: 'black', color: 'white' }} onClick={handleSignup}>S'inscrire</Button>
              </DialogActions>
          </Dialog>
          <Snackbar
              open={isSnackbarOpen}
              autoHideDuration={5000}
              onClose={handleSnackbarClose}
          >
              <Alert onClose={handleSnackbarClose} severity='success' sx={{ width: '100%' }}>
                  {signupSuccessMessage}
              </Alert>
          </Snackbar>
    </>
  );
};

export default SignUpForm;
