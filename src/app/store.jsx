import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";


//?features'daki reducer'ları store'da birleştirdik.
const store = configureStore({
    reducer:{
        auth:authReducer,
        news:newsReducer,
    },
    devTools:process.env.NODE_ENV !== "production",
    //? NodeJs ortamındaki env değişkenlerini yazmak ve okumak için kullanılan değer.Kullandığımız komutlardan NodeJS hangi aşamada olduğumuzu anlıyor.Build yapınca production aşamasına geçtik anlamına gelir (yarn run build ).

    //? devToolu Production dışında kullanmak istiyorum.Ticarii maksatlı
});


export default store;