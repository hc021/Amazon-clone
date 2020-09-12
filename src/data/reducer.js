
export const initialState = {
    basket: [],
    user:null
}

function reducer(state, action) {
    console.log(action, state)
    switch (action.type) {
        case "SET_USER":
            return {...state, user:action.user};
        case "ADD_TO_BASKET":
            return {...state, basket: [...state.basket, action.item] };
        case "REMOVE_FROM_BASKET":
            const basket = [...state.basket];
            basket.splice(action.index, 1);
            return {...state, basket };
        default:
            return state;

    }

}
export const subtotal = (basket) => {
  return  basket?.reduce((amount, item) => item.price + amount, 0)
}
export default reducer;