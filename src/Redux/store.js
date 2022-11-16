import { configureStore } from '@reduxjs/toolkit'
import  Contactslice  from './reducer/Slice'

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit";

const persistconfig ={
  key:"root",
  version:1,
  storage
}
const reducer =combineReducers({
  users: Contactslice
})
const persistedReducer =persistReducer(persistconfig,reducer)
const store = configureStore({
  reducer: persistedReducer
})

export default store;