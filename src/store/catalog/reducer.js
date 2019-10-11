import {
    CATALOGFETCHPRODUCTS,
    ADDTOCART,
    ADDTOWISHLIST,
    SHOWSPINNER,
    HIDESPINNER
} from 'store/types'
const initialState = {
    catalogPoducts: [],
    cart: [],
    wishList: [],
    cartTotal: 0,
    spinner: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CATALOGFETCHPRODUCTS:
            return { ...state, catalogPoducts: action.payload };
        case ADDTOCART:
            const cartIn = Object.assign([], state.cart)
            const totalIn = parseInt(state.cartTotal) + parseInt(action.payload.productPrice)
            cartIn.push(action.payload.product)
            return { ...state, cart: cartIn, cartTotal: totalIn };
        case ADDTOWISHLIST:
            const wishListIn = Object.assign([], state.wishList)
            wishListIn.push(action.payload)
            return { ...state, wishList: wishListIn };
        case SHOWSPINNER:
            return { ...state, spinner: action.payload };
        case HIDESPINNER:
            return { ...state, spinner: action.payload };
        default:
            return state;
    }
}