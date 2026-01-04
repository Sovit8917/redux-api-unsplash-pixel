import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast, Zoom } from "react-toastify";


const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id == action.payload.id
      );
      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state, action) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast:()=>{
        toast.success('Add to Collection!', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Zoom,
});
    },
    removeToToast:()=>{
  toast.warn('Removed From Collection!', {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
  },
  },
});

export const { addCollection, removeCollection, clearCollection,addedToast,removeToToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
