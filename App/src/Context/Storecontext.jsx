import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import React from "react";


export const storecontext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setcartItem] = useState({});

    const addToCart = (ItemId) => {
        if (!cartItems[ItemId]) {
            setcartItem((prev) => ({ ...prev, [ItemId]: 1 }))
        }
        else {
            setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }))
        }
    }

    const removeFromCart = (ItemId) => {
        setcartItem((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }))
    }
    const getTotalAmount=()=>{
        let totalAmount=0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let iteminfo=food_list.find((product)=>product._id===item)
                totalAmount+=iteminfo.price*cartItems[item];
            }
        }
        return totalAmount
    }

    

    const contextValue = {
        food_list,
        cartItems,
        setcartItem,
        addToCart,
        removeFromCart,
        getTotalAmount
    }
    return (
        <storecontext.Provider value={contextValue}>
            {props.children}
        </storecontext.Provider>
    )
}
export default StoreContextProvider