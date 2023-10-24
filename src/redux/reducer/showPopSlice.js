import { createSlice } from '@reduxjs/toolkit';

export const showPopSlice = createSlice({
   name: 'showPopUp',
   initialState: {
      isShowPop: false,
   },
   reducers: {
      SHOW_POPUP: (state, aciton) => {
         state.isShowPop = aciton.payload;
      },

      HIDE_POPUP: (state, action) => {
         state.isShowPop = action.payload;
      },

      CLOSE_POPUP: (state, action) => {
         state.isShowPop = action.payload;
      },
   },
});
