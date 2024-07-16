import { createSlice } from "@reduxjs/toolkit";


// Define interface for slice state
interface CategoryState {
    category: any[];
}

// Initial state
const initialState: CategoryState = {
    category: [],
};

export const CategorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addToCategory: (state, action: any) => {
            console.log(action);
            state.category = action.payload;

            console.log(state.category);
            
        },
    }
});

export const { addToCategory } = CategorySlice.actions;
export default CategorySlice.reducer;

