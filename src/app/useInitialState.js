import React from 'react';

const cartLocalStorage = JSON.parse(localStorage.getItem('GUITARS_V1') || '[]');

const useInitialState = () => {
    const [cart, setCart] = React.useState(cartLocalStorage);

    React.useEffect(() => {

        localStorage.setItem('GUITARS_V1', JSON.stringify(cart));

    }, [cart]);

    const addToCart = (payload) => {
        const duplicates = cart.findIndex(object => object.id === payload.id);
        if(duplicates === -1){
        setCart([...cart, payload]);

        }

        console.log(cart);
    }

    return {
        cart,
        addToCart,
    };
}

export {useInitialState}