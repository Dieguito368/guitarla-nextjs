'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const AppContext = ({ children }) => {
    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []; 
    const [ cart, setCart ] = useState(cartLS);
    const [ appList, setAppList ] = useState(false);
    
    useEffect(() => {
        setAppList(true);
    }, []);

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [ cart ]);

    const addCart = guitar => {
        const exists = cart.some( guitarState => guitar.id === guitarState.id );

        if(exists) {
            const cartUpdate = cart.map( guitarState => {
                if(guitar.id === guitarState.id) {
                    guitarState.cantidad = guitar.cantidad;
                }

                return guitarState;
            });

            setCart(cartUpdate);
        } else {
            setCart([ ...cart, guitar ]);
        }
    }

    const updateCuantity = product => {
        const cartUpdate = cart.map( productState => {
            if(productState.id === product.id) {
                productState.cantidad = product.cantidad;
            }

            return productState;
        });

        setCart(cartUpdate);
    }
    
    const removeProduct= id => {
        const cartUpdate = cart.filter(product => product.id !== id);

        setCart(cartUpdate);
    }
     
    return appList ? (
        <Context.Provider 
            value={{
                cart, 
                addCart,
                updateCuantity, 
                removeProduct
            }}
        >
            { children }
        </Context.Provider>
    ) : null;
}

export const useAppContext = () => {
    return useContext(Context);
}