import "./App.css";
import React, { useState } from 'react';
// import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AddContact from "./Pages/AddContact/AddContact";
import InfoContact from "./Pages/InfoContact/InfoContact";
import Home from "./Pages/HomePage/Home";
import UpdateContact from "./Pages/UpdateContact/UpdateContact";
import { Provider } from "react-redux";
import store from "./Redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist"

let persistor =persistStore(store)
function App() {
  const [form, setForm] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  // const [mode, setMode] = useState("save");
  const inputs =[{id:1,name:'name',type:'text',placeholder:'&#xF002;'},{id:2,name:'email',type:'email',placeholder:''},{id:3,name:'phone',type:'text',placeholder:''},{id:4,name:'age',type:'number'}]
  const router = createBrowserRouter([
    { path: "/", 
      element: <Home form={form} setForm={setForm} /> 
    },
    {
      path: "newcontact",
      element: <AddContact form={form} setForm={setForm} inputs={inputs} />,
    },
    {
      path: "/info/:userId",
      element: <InfoContact  />,
    },
    {
      path:"/update",
      element: <UpdateContact  inputs={inputs} form={form} setForm={setForm}  />,
    }
  ]);
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
