import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    items: [],
    
  },
  reducers: {
    addCarrito: (state, action) => {
        const itemExistente = state.items.find(item => item.id === action.payload.id);
        if (itemExistente) {
          itemExistente.cantidad += 1; 
        } else {
          state.items.push({ ...action.payload, cantidad: 1 }); 
        }
      },
      removeCarrito: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
      updateCantidad: (state, action) => {
        const { id, cantidad } = action.payload;
        const item = state.items.find(item => item.id === id);
        if (item) {
          item.cantidad = cantidad; 
        }
      },
    },
  });
  
  export const { addCarrito, removeCarrito, updateCantidad } = carritoSlice.actions;
export default carritoSlice.reducer;