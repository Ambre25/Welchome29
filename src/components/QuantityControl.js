import { Add, Remove } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'

export default function QuantityControl({ quantity, setQuantity, itemId }) {

    const handleChange = (newQuantity) => {
        if(newQuantity >= 0 && newQuantity <= 6) {
            setQuantity(newQuantity);
        }
    }

  return (
    <>
        <IconButton onClick={() => handleChange(Number(quantity) - 1)}>
            <Remove />
        </IconButton>
        <TextField value={quantity} sx={{ width: '60px', textAlign: 'center' }} />
        <IconButton onClick={() => handleChange(Number(quantity) + 1)}>
            <Add />
        </IconButton>
    </>
  )
}
