import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../../../utils/fetch'

const initialState = {
    isLoading: false,
    items: [],
    meta: null,
    link: null,
    isSuccess: false,
    message: '',
    showMessage: false

}
export const fetchPosts = createAsyncThunk('post/fetchPosts', () => {
    return fetchData({ url: 'blogs/liste', }).then(({ data }) => {
        return  data ;
    }).catch((err) => {
        return err;
    })
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
            state.message =""
            state.isSuccess = false;
            state.showMessage = false;
        })
        builder.addCase(fetchPosts.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true;

            state.items = action.payload.response
            
        })
        builder.addCase(fetchPosts.rejected, (state,action) => {
            state.isLoading = false
            state.message ="Erreur"
            state.isSuccess = false
            state.showMessage = true;

        })
    },
    reducers: {
        getItems: (state, { payload }) => {
            console.log(payload)
            state.isLoading = true;



        },

    },
})

// Action creators are generated for each case reducer function
export const { getItems } = postSlice.actions

export default postSlice.reducer