import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: []
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			const itemIndex = state.items.findIndex(item => item.id === itemId);
			if (itemIndex !== -1) {
				state.items.splice(itemIndex, 1);
			}
		},
		clearCart: (state) => {
			state.items.length = 0
		}
	}
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
