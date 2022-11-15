import { useState,useEffect } from "react";
import { createContext } from "react";

export const FormContext =createContext({
    form:'',
    setForm:()=>{},
})


const Form =({children})=>{
    const [form,setForm]=useState({    
        id: 0,
        name: "",
        email: "",
        phone: "",
        age: "",
        favorit:true,})
    return(
        <>
            <FormContext.Provider value={{form,setForm}}>
                {children}
            </FormContext.Provider>
        </>

    )
}

export default Form;