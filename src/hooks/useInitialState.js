import React from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
        
        console.log(state);
    };

    return {
        state,
        addToCart
    }
}

export {useInitialState}