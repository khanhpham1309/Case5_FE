import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import cartReducer from './features/cart/cartSlice'
import userReducer from './user/index'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        user: userReducer,
    },
})
