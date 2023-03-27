import rootReducer from "./reducers";

import { createStore } from "redux";


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



export default store;


// ...state.city,
//                        st: {
//                         ...state.city.st,
//                         "pak":["vidit","bhautik","keyur","viky"]
//                        }
                