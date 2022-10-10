import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";


//?features'daki reducer'ları store'da birleştirdik.
const store = configureStore({
    reducer:{
        auth:authReducer,
        news:newsReducer,
    }
});

export default store;