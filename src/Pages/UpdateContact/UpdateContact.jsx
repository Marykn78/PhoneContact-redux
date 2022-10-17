import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updatecontact } from '../../Redux/reducer/counterSlice';
const UpdateContact = ({ inputs,form,setForm }) => {
    const dispatch =useDispatch()
    const updatenavigate =useNavigate()
    const inputHandler = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const updateInput = (e)=>{
        e.preventDefault()
        dispatch(updatecontact(form))
        // setUsers(users.map(item=>item.id === form.id ? form :item))
        setForm({ name: "", email: "", phone: "", age: "" });
        updatenavigate('/')
    }
  return (
    <div className="container">
      <div className="form-container">
        <form className="form" action="" onSubmit={updateInput}>
          {inputs.map((item) => (
            <div className="input-row">
              <input
                className="input-submit"
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
              update
            </button>
            <Link to={'/'}>
              <button className="submit-btn">
                cancle
              </button>
            </Link>
          </div>
        </form>
      </div>
      {/* <div className="formimgcontainer">
        <img className="form-image" src={formimage} alt="form" />
      </div> */}
    </div>
  );
};

export default UpdateContact;
