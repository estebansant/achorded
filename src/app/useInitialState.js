import React from 'react';

// const cartLocalStorage = JSON.parse(localStorage.getItem('GUITARS_V1') || '[]');
const products = JSON.parse(localStorage.getItem('products'));
const cart = JSON.parse(localStorage.getItem('cart'))

const useInitialState = () => {
    const [state, setState] = React.useState(cartLocalStorage);

    localStorage.setItem('products', JSON.stringify(state));

    if(!localStorage.getItem('cart')){
        localStorage.setItem('cart', '[]')
    }

    // React.useEffect(() => {

    //     localStorage.setItem('GUITARS_V1', JSON.stringify(state));

    // }, [state]);

    // const addToCart = (payload) => {

	// 		setState([
    //             ...state,
	// 			payload
    //         ]);
        
    //     console.log(state);
    // };

    return {
        state,
        addToCart,
    };
}

export {useInitialState}