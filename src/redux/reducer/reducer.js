import {productlist} from '../../data/ProductList';

const initialState = {
    productArr: [],
    cartArr: [],
    totalPrice: undefined,
    orderStatus: undefined
};

export default reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_PRODUCT":
            return {
                ...state,
                productArr: productlist
            }
        case "ADD_TO_CART": 
            let _price = 0;
            [...state.cartArr, action.payload].map(it => {
            const _count = it.count || 1;
            _price += it.price * _count;
            })
            return {
                ...state,
                cartArr: [...state.cartArr, {...action.payload, count: 1}],
                totalPrice: _price
            }
        case "CHANGE_QUANTITY":
            let _cartArr = [...state.cartArr]
            if (action.toDo == "increase")
                _cartArr[action.payload].count += 1;
            else
             _cartArr[action.payload].count -= 1;
            _cartArr = _cartArr.filter(it => it.count )
            let __price = 0;
            [..._cartArr].map(it => {
            const _count = it.count || 1;
            __price += it.price * _count;
            })
            return {
                ...state,
                cartArr: _cartArr,
                totalPrice: __price
            }
        
        case "PLACE_ORDER":
            return {
                ...state,
                cartArr: [],
                totalPrice: undefined,
                orderStatus: "success"
            }
        
        case "RESET_ORDER_STATUS": {
            return {
                ...state,
                orderStatus: undefined
            }
        }
        default:
            return state;
    }
};
