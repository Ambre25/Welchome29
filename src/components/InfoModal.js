import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material'
import React from 'react'

const InfoModal = ({ open, onClose, message }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default InfoModal;