import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define interface for a cart item
interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

// Define interface for slice state
interface CartState {
    cart: CartItem[];
}

// Initial state
const initialState: CartState = {
    cart: [],
};

// Create slice
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const itemPresent = state.cart.find(item => item.id === action.payload.id);
            if (itemPresent?.quantity) {
                itemPresent.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<CartItem>) => {
            // Ensure state.cart is defined before filtering
            if (state.cart) {
                const removeItem = state.cart.filter(item => item.id !== action.payload.id);
                state.cart = removeItem;
            } else {
                console.error('state.cart is undefined or null.');
            }
        },
        incrementQuantity: (state, action: PayloadAction<CartItem>) => {
            // Ensure state.cart is defined before finding and updating
            if (state.cart) {
                const itemPresentIndex = state.cart.findIndex(item => item.id === action.payload.id);
                const itemPresent = state.cart.find(item => item.id === action.payload.id);
                // console.log(itemPresent)

                if(itemPresentIndex !== -1 && itemPresent?.quantity) {
                    state.cart[itemPresentIndex] = {...state.cart[itemPresentIndex], quantity: itemPresent?.quantity + 1}
                } else {
                    console.error(`Item with id ${action.payload.id} not found in cart.`);
                }
            } else {
                console.error('state.cart is undefined or null.');
            }
        },
        decrementQuantity: (state, action: PayloadAction<CartItem>) => {
            // Ensure state.cart is defined before finding and updating
            if (state.cart) {
                const itemPresent = state.cart.find(item => item.id === action.payload.id);
                if (itemPresent?.quantity) {
                    if (itemPresent.quantity === 1) {
                        const removeItem = state.cart.filter(item => item.id !== action.payload.id);
                        state.cart = removeItem;
                    } else {
                        itemPresent.quantity--;
                    }
                } else {
                    console.error(`Item with id ${action.payload.id} not found in cart.`);
                }
            } else {
                console.error('state.cart is undefined or null.');
            }
        },
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = CartSlice.actions;
export default CartSlice.reducer;
