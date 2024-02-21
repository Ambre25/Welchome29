import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { AuthContext } from './AuthContext';
import { useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { db } from '../firebase-config';
import Title from './Title';

export default function OrderList() {

    const [orders, setOrders] = useState([]);
    const auth = useContext(AuthContext);
    const { user } = auth;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const orderCollection = collection(db, 'Order');
                const q = query(orderCollection, where('user', '==', user.uid));
                const querySnapshot = await getDocs(q);
                console.log(querySnapshot.docs);
                const fetchedOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                fetchedOrders.sort((a, b) => b.timestamp?.toDate().getTime() - a.timestamp?.toDate().getTime());

                for (let order of fetchedOrders) {
                    const itemsCollection = collection(orderCollection, order.id, 'items');
                    const itemsSnapshot = await getDocs(itemsCollection);
                    order.items = itemsSnapshot.docs.map(doc => doc.data());
                }

                setOrders(fetchedOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        if (user) {
            fetchOrders();
        }
    }, [user]);

  return (
    <Container maxWidth='md' sx={{ marginTop: '50px' }}>
        <Title text='MES COMMANDES' />
          <Table sx={{ marginTop: '50px' }}>
              <TableHead sx={{ backgroundColor: 'black' }}>
                  <TableRow>
                      <TableCell sx={{ color: 'white' }}>Date de commande</TableCell>
                      <TableCell sx={{ color: 'white' }}>Nom du produit</TableCell>
                      <TableCell sx={{ color: 'white' }}>Quantité</TableCell>
                      <TableCell sx={{ color: 'white' }}>Prix</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {orders.map((order, orderIndex) => (
                    <React.Fragment key={`order-${order.id}`}>
                      {order.items.map((item, itemIndex) => (
                          <TableRow key={`order-${order.id}-item-${itemIndex}`} style={{ backgroundColor: orderIndex % 2 === 0 ? 'white' : 'lightgray' }}>
                              <TableCell>{order.timestamp?.toDate().toLocaleDateString()}</TableCell>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.quantity}</TableCell>
                              <TableCell><strong>{item.totalPrice}€</strong></TableCell>
                          </TableRow>
                      ))}
                      </React.Fragment>
                  ))}
              </TableBody>
          </Table>
    </Container>
  )
}
