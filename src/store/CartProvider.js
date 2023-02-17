import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const calculateTotalCost = (items) => {
    return items.reduce((cost, item) => {
        return cost + item.price * item.amount;
    }, 0);
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD_CART_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        
        return {
            items: updatedItems,
            totalAmount: calculateTotalCost(updatedItems)
        };
    }
    else if(action.type === 'REMOVE_CART_ITEM') {
        let updatedItems = [];
        state.items.forEach(item => {
            if(item.id === action.id) {
                if (item.amount > 1) {
                    updatedItems.push({...item, amount: item.amount - 1});
                }
            }
            else {
                updatedItems.push({...item});
            }
        })

        return {
            items: updatedItems,
            totalAmount: calculateTotalCost(updatedItems)
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_CART_ITEM', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id});
    };

    const cartContext = {
        ...cartState,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;