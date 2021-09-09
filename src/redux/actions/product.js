import { actions } from "configs";
import { product } from "services";

const getProduct = () => ({
    type: actions.GET_PRODUCT
});

const getProductSuccess = data => ({
    type: actions.GET_PRODUCT_SUCCESS,
    payload: {
        data
    },
});

const getProductFail = error => ({
    type: actions.GET_PRODUCT_FAIL,
    payload: { 
        error
    },
});

const getProductAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: actions.GET_PRODUCT
            });

            const response = await product.getProduct(data);
            dispatch({
                type: actions.GET_PRODUCT_SUCCESS,
                payload: response,
            });
        } catch (error) {
            dispatch({
                type: actions.GET_PRODUCT_FAIL,
                payload: error,
            });
        }
    }
}

export default { getProductAction }