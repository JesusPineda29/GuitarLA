import { db } from "../data/db"
import type { Guitar, CartItem } from "../types"

export type CartActions = // type de las acciones que se pueden realizar
    { type: 'add-to-cart', payload: { item: Guitar } } | // son acciones y payload es el dato que se le pasa <-es lo mismo-> function addToCart(item : Guitar)
    { type: 'remove-from-cart', payload: { id: Guitar['id'] } } |
    { type: 'decrease-quantity', payload: { id: Guitar['id'] } } |
    { type: 'increase-quantity', payload: { id: Guitar['id'] } } |
    { type: 'clear-cart' } 




export type CartState = { // type del estado (state) del carrito
    data: Guitar[]
    cart: CartItem[]
}

export const initialState: CartState = { // estado inicial del carrito
    data: db,
    cart: []
}




export const cartReducer = ( // reducer del carrito
    state: CartState = initialState,
    action: CartActions
) => {
    if(action.type === 'add-to-cart') {


        return {
            ...state,
        }
    }

    if(action.type === 'remove-from-cart') {


        return {
            ...state,
        }
    }

    if(action.type === 'decrease-quantity') {


        return {
            ...state,
        }
    }

    if(action.type === 'increase-quantity') {


        return {
            ...state,
        }   
    }

    if(action.type === 'clear-cart') {


        return {
            ...state,
        }
    }
    return state // siempre hay que tener un return para que el reducer funcione
}