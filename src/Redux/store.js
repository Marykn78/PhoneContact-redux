import { configureStore } from '@reduxjs/toolkit'
import  Contactslice  from './reducer/counterSlice'

const store = configureStore({
  reducer: {
    users: Contactslice
  }
})

export default store;