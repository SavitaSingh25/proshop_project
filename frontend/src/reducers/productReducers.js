import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL, 
 } from '../constants/productConstants'

export const productListReducer = (store = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { Loading: true, products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { Loading: false, products: action.payload }
        case PRODUCT_LIST_FAIL:
             return { Loading: false, products: [] } 
        default:
            return store
    }
} 