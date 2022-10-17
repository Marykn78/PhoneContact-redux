import "./App.css";
import React, { useState } from 'react';
// import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AddContact from "./Pages/AddContact/AddContact";
import InfoContact from "./Pages/InfoContact/InfoContact";
import Home from "./Pages/HomePage/Home";
import UpdateContact from "./Pages/UpdateContact/UpdateContact";

function App() {
  const [users, setusers] = useState([
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
  ]);
  const [form, setForm] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [mode, setMode] = useState("save");
  const inputs =[{id:1,name:'name',type:'text',placeholder:'&#xF002;'},{id:2,name:'email',type:'email',placeholder:''},{id:3,name:'phone',type:'text',placeholder:''},{id:4,name:'age',type:'number'}]
  const router = createBrowserRouter([
    { path: "/", 
      element: <Home users={users} setusers={setusers} form={form} setForm={setForm} mode={mode} setMode={setMode} /> 
    },
    {
      path: "newcontact",
      element: <AddContact users={users} setusers={setusers} form={form} setForm={setForm} inputs={inputs} />,
    },
    {
      path: "/info/:userId",
      element: <InfoContact users={users}  />,
    },
    {
      path:"/update",
      element: <UpdateContact users={users} inputs={inputs} form={form} setForm={setForm} setUsers={setusers} />,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
