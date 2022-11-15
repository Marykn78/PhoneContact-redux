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

      import "../AddContact/Form.style.css";
      import formimage from "../AddContact/image/image.webp";
      import { useNavigate } from "react-router-dom";
      import { Link } from "react-router-dom";
      import { useDispatch } from "react-redux";
      import { addcontact } from "../../Redux/reducer/counterSlice";
      import { inputs } from "../../Data/data";
      import { useState } from "react";
      const Form = () => {
        const [form, setForm] = useState({
          // id:0,
          id: Math.floor(Math.random()*1000),
          name: "",
          email: "",
          phone: "",
          age: "",
          favorit: false,
        });
        // const users = useSelector(state=>state.users)
        const dispatch = useDispatch()
      
        const navigate = useNavigate();
        const inputHandler = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
        };
        const addItem = () => {
          dispatch(addcontact(form))
          // console.log(form)
          // e.preventDefault();
          // setusers([
          //   ...users,
          //   {
          //     id: Math.floor(Math.random() * 1000),
          //     ...form,
          //     favorit: false,
          //   },
          // ]);
          setForm({ name: "", email: "", phone: "", age: "" });
          navigate("/");
        };
        // const { updateID } = useParams();
        // useEffect(() => {
        //     if(updateID){
        //         setForm(contacts.filter((contact) => contact.id === Number(updateID))[0]);
        //         setFormStatus('update')
        //     }else{
        //         setFormStatus('add')
        //     }
      
            
        // }, []);
      
      
        return (
          <div className="container">
            <div className="form-container">
              <form className="form" action="" onSubmit={addItem}>
                {inputs.map((item) => (
                  <div className="input-row">
                    <input
                      className="input-submit"
                      key={item.id}
                      type={item.type}
                      name={item.name}
                      onChange={inputHandler}
                      value={form[item.name]}
                      placeholder={item.name}
                    />
                  </div>
                ))}
                <div className="submit-container">
                  <button className="submit-btn" type="submit">
                    save
                  </button>
                  <Link to={'/'}>
                    <button className="submit-btn">
                      cancle
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="formimgcontainer">
              <img className="form-image" src={formimage} alt="form" />
            </div>
          </div>
        );
      };
      
      export default Form;
      