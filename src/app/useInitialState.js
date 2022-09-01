import React from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

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