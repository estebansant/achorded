import React from 'react';

const cartLocalStorage = JSON.parse(localStorage.getItem('GUITARS_V1') || '[]');

const useInitialState = () => {
    const [cart, setCart] = React.useState(cartLocalStorage);
    const [price, setPrice] = React.useState(cartLocalStorage);

    React.useEffect(() => {

        localStorage.setItem('GUITARS_V1', JSON.stringify(cart));

    }, [cart]);

    const addToCart = (payload) => {
        const duplicates = cart.findIndex(object => object.id === payload.id);
        if(duplicates === -1){
            setCart([...cart, payload]);
            setAdded(true);
        }

        console.log(cart);
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
      });

    const removeItem = (id) =>{
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        changeAmount();
    }

    return {
        cart,
        price,
        addToCart,
        changeAmount,
        removeItem,
    };
}

export {useInitialState}