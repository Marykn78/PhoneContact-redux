import { useDispatch} from 'react-redux';
import formimage from "../../Assets/image/image.webp";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { updatecontact } from '../../Redux/reducer/Slice';
import { inputs } from '../../Data/data';
import { useContext } from 'react';
import { FormContext } from '../../Context/ContextForm';

const UpdateContact = () => {
  const {form,setForm}=useContext(FormContext)
    const dispatch =useDispatch()
    const updatenavigate =useNavigate()

    const inputHandler = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
    const updateInput = (e)=>{
        e.preventDefault()
        dispatch(updatecontact(form))
        // setUsers(users.map(item=>item.id === form.id ? form :item))
        // setForm({ name: "", email: "", phone: "", age: "" });
        updatenavigate('/')
    }
  return (
    <div className="container">
      <div className="form-container">
        <form className="form" action="" onSubmit={updateInput}>
          {inputs.map((item) => (
            <div className="input-row" key={item.id}>
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
      <div className="formimgcontainer">
        <img className="form-image" src={formimage} alt="form" />
      </div>
    </div>
  );
};

export default UpdateContact;
