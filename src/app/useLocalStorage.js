import React from 'react'

const useLocalStorage = (itemName, ) => {

    const localStorageProducts = localStorage.getItem(itemName);
    let parsedProducts;

    if(!localStorageProducts){
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedProducts = [];
    } else{
        parsedProducts = JSON.parse(localStorageProducts);
    }

    const [products, setProducts] = React.useState(parsedProducts);
}

export {useLocalStorage}