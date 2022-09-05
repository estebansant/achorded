import React from 'react';

const cartLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

const useInitialState = () => {
    const [state, setState] = React.useState(cartLocalStorage);

    React.useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(state));

    }, [state]);

    const addToCart = (payload) => {
        if(!state.cart.includes(payload)){
			setState({
				...state,
				cart: [...state.cart, payload]
			});
		}
        
        console.log(state);
    };

    return {
        state,
        addToCart
    };
}

export {useInitialState}