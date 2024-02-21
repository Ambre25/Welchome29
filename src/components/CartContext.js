import { collection, deleteDoc, doc, getDoc, onSnapshot, query, setDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { db } from "../firebase-config";

export const CartContext = createContext();

const calculateTotalPrice = (item, quantity) => {
    // Calculate the total price based on the item's price and quantity
    return item.prix * quantity;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        const q = query(collection(db, "cart"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let items = [];
            let total = 0;
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                items.push({ id: doc.id, ...data });
                total += data.quantity;
            });
            setCart(items);
            setTotalItems(total);
        });

        return () => unsubscribe();
    }, []);

    const addToCart = async (item) => {
        const cartItemRef = doc(collection(db, "cart"), item.id);
        const cartItemSnapshot = await getDoc(cartItemRef);

        let newQuantity;

        if(
            item.type === 'sport nautique' || 
            item.type === 'visite' || 
            item.type === 'peche' || 
            item.type === 'bien-etre' || 
            item.type === 'velo' || 
            item.type === 'traiteur' ||
            item.type === 'traiteur-plus'
        ) {
            if (cartItemSnapshot.exists()) {
                // Si l'article est déjà dans le panier, met à jour la quantité
                newQuantity = cartItemSnapshot.data().quantity + item.quantity;
                const updatedTotalPrice = item.totalPrice;
                await updateDoc(cartItemRef, { quantity: newQuantity, totalPrice: updatedTotalPrice });
            } else {
                await setDoc(cartItemRef, { ...item });
            }
        } else {;
            if (cartItemSnapshot.exists()) {
                // Si l'article est déjà dans le panier, met à jour la quantité et le prix total
                newQuantity = cartItemSnapshot.data().quantity + item.quantity;
                const updatedTotalPrice = calculateTotalPrice(item, newQuantity); // Recalculez le prix total après avoir déterminé la nouvelle quantité
                await updateDoc(cartItemRef, { quantity: newQuantity, totalPrice: updatedTotalPrice });
            } else {
                // Si l'article n'est pas dans le panier, l'ajoute avec le prix total calculé
                const initialTotalPrice = calculateTotalPrice(item, item.quantity); // Calculez le prix total pour la quantité initiale ajoutée
                const hasPromotion = item.hasPromotion !== undefined ? item.hasPromotion : 0;
                await setDoc(cartItemRef, { ...item, hasPromotion, totalPrice: initialTotalPrice });
            }
        }
    };

    const removeFromCart = async (itemId) => {
        await deleteDoc(doc(db, "cart", itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};