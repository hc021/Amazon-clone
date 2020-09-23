import data from '../product.js'
export const initialState = {
    basket: [],
    user: null,
    data,
    search: '',
    tempData: data,
}
function reducer(state, action) {
    switch (action.type) {
        case "RESET_DATA":
            return { ...state, tempData: action.reset };
        case "SET_DATA":
            let tempData = [];
            data.forEach(item => {
                item.title.toLowerCase().includes(action.search.toLowerCase()) && tempData.push(item);
            })
            console.log(tempData)
            return { ...state, tempData };
        case "SET_SEARCHVALUE":
            return { ...state, search: action.searchValue };
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