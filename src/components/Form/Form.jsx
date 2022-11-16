// import './Form.style.css' 

// const Form = ({ mode, setMode, form, setForm,users,setusers,showform,setshowform}) => {

//   const inputs =[{id:1,name:'name',type:'text'},{id:2,name:'email',type:'email'},{id:3,name:'phone',type:'text'},{id:4,name:'age',type:'number'}]
//   const inputHandler = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const addItem = (e) => {
//     e.preventDefault();
//     if (mode === "save") {
//       setusers([
//         ...users,
//         {
//           id: Math.floor(Math.random() * 1000),
//           name: form.name,
//           email: form.email,
//           phone: form.phone,
//           age: form.age,
//           favorit: false,
//         },
//       ]);
//     } else {
//       setusers(users.map((item) => (item.id === form.id ? form : item)));
//       setMode("save");
//     }
//     setForm({ name: "", email: "", phone: "", age: "" });
//   };
//   const notshowform = () => {
//     setshowform("none");
//   };
//   return (
//     <div className='input-row'>
//       <form action="" style={{ display: showform }} onSubmit={addItem} >
//         {inputs.map(item=>(<div className="input-row"><input type={item.type} name={item.name} onChange={inputHandler} value={form[item.name]} placeholder={item.name} /></div>))}
//         <button className="button submit-btn" type="submit" onClick={notshowform}>
//           {mode}
//         </button>

//       </form>


//     </div>
//   );
// };

// export default Form;

// ,setForm,showform,setshowform,showformHandler
        {/* <div className='formimgcontainer'>
          <img className='form-image' src={image} alt="form" />
        </div> */}
              {/* <button className="button"  onClick={notshowform}>
          cancle
      </button> */}

   