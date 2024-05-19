import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASE_URL} from '../CommonUtils/apiurl'
import { STATUS } from "../CommonUtils/status";
const initialState = {
    products:[],
    productsStatus : '',
    productSingle : [],
    productSingleStatus : ''
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAsyncProducts.pending, (state,action)=>{
            state.productSingleStatus = STATUS.LODING;
        })

        .addCase(fetchAsyncProducts.fulfilled, (state,action)=>{
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchAsyncProducts.rejected, (state,action)=>{
            state.productSingleStatus = STATUS.FAILED;
        })

        .addCase(fetchAsyncSingleProducts.pending, (state,action)=>{
            state.productSingleStatus = STATUS.LODING;
        })

        .addCase(fetchAsyncSingleProducts.fulfilled, (state,action)=>{
            state.productSingle = action.payload;
            state.productSingleStatus = STATUS.SUCCEEDED;
        })

        .addCase(fetchAsyncSingleProducts.rejected, (state,action)=>{
            state.productSingleStatus = STATUS.FAILED;
        })
    }

}) 

export const fetchAsyncProducts = createAsyncThunk('products/fetch', async(limit) => {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}`);
    const data = await response.json();
    return data.products;
});

export const fetchAsyncSingleProducts = createAsyncThunk('products-single/fetch',async(id)=>{
    const response = await fetch(`${BASE_URL}/product/${id}`)
    const data = await response.json();
    return data;
})

export const getAllProducts = (state)=> state.products;
export const getAllProductsStatus = (state) => state.product.productSingleStatus

export const getProductSingle = (state) => state.product.productSingle
export const getSingleProductStatus = (state) => state.product.productSingleStatus

export default productSlice.reducer;