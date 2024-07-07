import * as actionTypes from "../constants/cartConstants";

const CART_INITIAL_STATE = {
    cartItems: [],
    itemsCount: 0,
    cartSubtotal: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const productBeingAddedToCart = action.payload;

            const productAlreadyExistsInState = state.cartItems.find((x) => x.productID === productBeingAddedToCart.productID);

            const currentState = { ...state };

            if (productAlreadyExistsInState) {
               currentState.itemsCount = 0;
                currentState.cartSubtotal = 0;
                currentState.cartItems = state.cartItems.map((x) => {
                    if (x.productID === productAlreadyExistsInState.productID) {
                        currentState.itemsCount += Number(productBeingAddedToCart.quantity);
                        const sum = Number(productBeingAddedToCart.quantity) * Number(productBeingAddedToCart.price);
                        currentState.cartSubtotal += sum;
                    } else {
                        currentState.itemsCount += Number(x.quantity);
                        const sum = Number(x.quantity) * Number(x.price);
                        currentState.cartSubtotal += sum;
                    }
                    return x.productID === productAlreadyExistsInState.productID ? productBeingAddedToCart : x;
                });
            } else {
                currentState.itemsCount += Number(productBeingAddedToCart.quantity);
                const sum = Number(productBeingAddedToCart.quantity) * Number(productBeingAddedToCart.price);
                currentState.cartSubtotal += sum;
                currentState.cartItems = [...state.cartItems, productBeingAddedToCart];
            }

            return currentState
        case actionTypes.REMOVE_FROM_CART:
           return {
              ...state, 
              cartItems: state.cartItems.filter((x) => x.productID !== action.payload.productID),
              itemsCount: state.itemsCount - action.payload.quantity,
              cartSubtotal: state.cartSubtotal - action.payload.price * action.payload.quantity,
           } 
        default:
           return state 
    }
}