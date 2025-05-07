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

const MIN_ITEMS = 1
const MAX_ITEMS = 5



export const cartReducer = ( // reducer del carrito
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'add-to-cart') {

        const itemExists = state.cart.find(guitar => guitar.id === action.payload.item.id)

        let updatedCart : CartItem[] = []
        if (itemExists) { // existe en el carrito
            updatedCart = state.cart.map(guitar => {
                if(guitar.id === action.payload.item.id) {
                    if(guitar.quantity < MAX_ITEMS) {
                        return { ...guitar, quantity: guitar.quantity + 1 }
                    } else {
                        return guitar
                    }
                } else {
                    return guitar
                }
            })
        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }


        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'remove-from-cart') {

        const updatedCart = state.cart.filter(guitar => guitar.id !== action.payload.id)

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'decrease-quantity') {


        return {
            ...state,
        }
    }

    if (action.type === 'increase-quantity') {


        return {
            ...state,
        }
    }

    if (action.type === 'clear-cart') {


        return {
            ...state,
        }
    }
    return state // siempre hay que tener un return para que el reducer funcione
}