const { actions } = require("configs");

const initialState = {
    loading: false,
    error: null,
    data: null,
};

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_PRODUCT:
            return {
                loading: true,
                error: null,
                data: null,
            };
        case actions.GET_PRODUCT_SUCCESS: {
            return {
                loading: false,
                data: action.payload.data,
                error: null,
            };
        }
        case actions.GET_PRODUCT_FAIL: {
            return {
                loading: false,
                error: 'Ops, something wrong happen!',
                data: null,
            }
        }
        default:
          return state;
    }
}