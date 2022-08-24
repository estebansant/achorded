import React from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

}