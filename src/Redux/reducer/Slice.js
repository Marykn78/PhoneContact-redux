import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
      id: 1,
      name: "mina",
      email: "mina@gmail.com",
      phone: "308271",
      age: 24,
      favorit: true,
    },
    {
      id: 2,
      name: "saeid",
      email: "saeid@gmail.com",
      phone: "564390",
      age: 32,
      favorit: false,
    },
    {
      id: 3,
      name: "paniz",
      email: "paniz@gmail.com",
      phone: "823174",
      age: 18,
      favorit: true,
    },
  ]
export const Contactslice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addcontact:(state,action)=>{    
            // state = [...state,action.payload]
            state.push(action.payload)
        },
        removecontact:(state,action)=>{
            const index = state.findIndex(item=>(item.id === action.payload))
            state.splice(index,1)
        },
        likecontact:(state,action)=>{
            const index = state.findIndex(item=>(item.id === action.payload))
            state[index].favorit= !state[index].favorit
        },
        updatecontact:(state,action)=>{
            const index = state.findIndex(item=>(item.id === action.payload.id))
            state[index]=action.payload
        }
    }
})

export const { addcontact, removecontact, updatecontact,likecontact } = Contactslice.actions

export default Contactslice.reducer

