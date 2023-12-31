//tüm reducelerimı topladığım yer
//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    // Diğer reducer'ları buraya ekleyebilirsiniz
});

export default rootReducer;
