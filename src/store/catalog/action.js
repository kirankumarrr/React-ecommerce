import { CATALOGFETCHPRODUCTS, ADDTOCART, ADDTOWISHLIST } from 'store/types'
import axios from "axios";

export const fetchCatalogProducts = (limit, offset) => async dispatch => {
    const res = await axios.get(
        `https://api.musement.com/api/v3/venues/164/activities`
    ).then(response => {
        debugger
        return response.data
    }).catch(error => {
        debugger
        return error
    })
    dispatch({
        type: CATALOGFETCHPRODUCTS,
        payload: res
    });
};

export const addToCart = (product, productPrice) => async dispatch => {
    dispatch({
        type: ADDTOCART,
        payload: {
            product,
            productPrice
        }
    });
};

export const addToWishList = (product) => async dispatch => {
    dispatch({
        type: ADDTOWISHLIST,
        payload: product
    });
};