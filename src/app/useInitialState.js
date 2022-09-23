import React from 'react';
import { ItemData } from '@pages/sections/products/ProductData/ItemData';

const cartLocalStorage = JSON.parse(localStorage.getItem('GUITARS_V1') || '[]');
const dataLocalStorage = JSON.parse(localStorage.getItem('GUITARS_DATA') || JSON.stringify(ItemData));
const ordersLocalStorage = JSON.parse(localStorage.getItem('ORDERS') || '[]');

const useInitialState = () => {
    const [cart, setCart] = React.useState(cartLocalStorage);
    const [price, setPrice] = React.useState(0);
    const [added, setAdded] = React.useState(dataLocalStorage);
    const [orders, setOrders] = React.useState(ordersLocalStorage);

    React.useEffect(() => {

        localStorage.setItem('GUITARS_V1', JSON.stringify(cart));

    }, [cart]);

    React.useEffect(() => {
        localStorage.setItem('GUITARS_DATA', JSON.stringify(added));
    }, [added])

    React.useEffect(() => {
      localStorage.setItem('ORDERS', JSON.stringify(orders));
    }, [orders])

    const addOrders = (payload) => {
      setOrders([...orders, payload]);
    }

    const addToCart = (payload) => {
        const duplicates = cart.findIndex(object => object.id === payload.id);
        if(duplicates === -1){
            setCart([...cart, payload]);
        }

        console.log(cart);
    }

    const addItem = (id) => {

        const itemAdded = added.map((product) => {
            if(product.id === id){
              return {
                ...product,
                inCart: true,
              }
            }
            return product;
          })
          
          setAdded([...itemAdded]);
    }

    const changeAmount = (product, sum) => {
        const index = cart.findIndex(object => object.id === product.id);
        const array = cart;
        array[index].amount += sum;

        if (array[index].amount === 0) array[index].amount = 1;
        setCart([...array]);
    }

    const handlePrice = () => {
        let total = 0;
        cart.map((item) => (total += item.amount * item.price)) ;
        setPrice(total)
    }

    React.useEffect(() => {
        handlePrice();
      }, [cart]);

    const removeItem = (id) =>{
        const arr = cart.filter((item) => item.id !== id);

        const itemRemoved = added.map((product) => {
            if(product.id === id){
              return {
                ...product,
                inCart: false,
              }
            }
            return product;
          }) 
        setAdded([...itemRemoved]);
        setCart(arr);
        changeAmount();
    }

    return {
        cart,
        price,
        added,
        addItem,
        addToCart,
        addOrders,
        changeAmount,
        removeItem,
        orders,
        setCart,
    };
}

export {useInitialState}