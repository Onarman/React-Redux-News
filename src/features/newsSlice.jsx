import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios" ;

const initialState = {
    newsList:[],
    loading:true,
}
const API_KEY ="4910c135739b4dba8548b5488564f6fb"
export const getNews = createAsyncThunk("news/getNews",
async () => {
    const url =`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`
    try {
        const {data} = await axios(url);
        return data.articles;
    } catch (error) {
        console.log(error);
    }  
})
const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        clearNewsList:(state) => {
            state.newsList = [];
        },
    },

    extraReducers :{
        [getNews.pending]:(state,action) => {
            state.loading=true;
        },
        //? işlem başarılıysa
        [getNews.fulfilled]:(state, {payload}) => {
            state.loading = false;
            state.newsList = payload;
        },
        //? işlem başarılı değilse
        [getNews.rejected]:(state) => {
            state.loading = false;
        },

    }
});

// export const {setUser,clearUser} = authSlice.actions;

export const { clearNewsList} = newsSlice.actions
export default newsSlice.reducer;