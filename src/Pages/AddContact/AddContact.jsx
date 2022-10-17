import "../AddContact/Form.style.css";
import formimage from "../AddContact/image/image.webp";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = ({ form, setForm, users, setusers, inputs }) => {
  const navigate = useNavigate();
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addItem = (e) => {
    e.preventDefault();
    setusers([
      ...users,
      {
        id: Math.floor(Math.random() * 1000),
        ...form,
        favorit: false,
      },
    ]);
    setForm({ name: "", email: "", phone: "", age: "" });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" action="" onSubmit={addItem}>
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
