import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import QuantityControl from './QuantityControl';

export default function QuantityModal({ open, handleClose, item }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Modifier la quantité</DialogTitle>
      <DialogContent>
        <QuantityControl
          quantity={item.quantity}
          setQuantity={(newQuantity) => item.handleQuantityChange(item.id, newQuantity)}
          itemId={item.id}
          updateCartItemQuantity={item.updateCartItemQuantity}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Fermer</Button>
      </DialogActions>
    </Dialog>
  );
}