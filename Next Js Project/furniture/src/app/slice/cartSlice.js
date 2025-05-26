import { createSlice } from "@reduxjs/toolkit";


export let cartSlice=createSlice(
    {
        name:"cartSlice",
        initialState:{
            cart:localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : [] 
        },
        reducers:{
            addTocart:function( state,reqData ){
                console.log(reqData)
                let obj=reqData.payload //Fixed
                state.cart.push(obj)
                localStorage.setItem("CART",JSON.stringify(state.cart))
            },
            deleteCart:function(state,reqData){
                //state  Old data
                //reqData Id
                let id=reqData.payload; //1
                state.cart=state.cart.filter((items)=>items.id!=id)
                localStorage.setItem("CART",JSON.stringify(state.cart))
            }
        }
    }
)

export const { addTocart,deleteCart } = cartSlice.actions

export default cartSlice.reducer