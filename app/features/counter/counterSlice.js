import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  rate: 2,
  price : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      if(state.value>20)
      {
        state.value = 20;
      }

      state.price = (state.value)*state.rate;
    },

    decrement: (state) => {
      state.value -= 1
      if(state.value<0)
      {
        state.value = 0;
      }

      state.price = (state.value)*state.rate;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
