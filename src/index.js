import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'
import { CartProvider } from './components/CartContext'

const Root = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}  

createRoot(document.getElementById('root')).render(<Root />)