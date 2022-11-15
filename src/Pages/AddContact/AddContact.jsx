import "../AddContact/Form.style.css";
// import formimage from "../AddContact/image/image.webp";
import addform from '../../Assets/image/addform.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcontact } from "../../Redux/reducer/counterSlice";
import { inputs } from "../../Data/data";
import { useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "../../Context/ContextForm";
const Form = () => {
  const {form,setForm}=useContext(FormContext)
  // const [form, setForm] = useState({
  //   // id:0,
  //   id: Math.floor(Math.random()*1000),
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  //   favorit: false,
  // });
  // const users = useSelector(state=>state.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setForm({ ...form,id:Math.floor(Math.random()*1000),favorit:true, [e.target.name]: e.target.value });
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
  const clearinput =()=>{
    setForm({ name: "", email: "", phone: "", age: "" })
  }
  //unmount
  useEffect(()=>{
    return()=>{
      clearinput()
    }
  },[])
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
        <img className="form-image" src={addform} alt="form" />
      </div>
    </div>
  );
};

export default Form;
