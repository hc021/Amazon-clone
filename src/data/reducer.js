import data from '../product.js'
export const initialState = {
    basket: [],
    user: null,
    data,
    search: '',

}

function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.data };
        case "SET_SEARCHVALUE":
            return { ...state, search: action.search };
        case "SET_USER":
            return { ...state, user: action.user };
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };
        case "REMOVE_FROM_BASKET":
            const basket = [...state.basket];
            basket.splice(action.index, 1);
            return { ...state, basket };
        default:
            return state;
    }
}
export const subtotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}
// export const changeData =() =>{

// }
export default reducer;