import "./Avatar.style.css";
import { Link } from "react-router-dom";

const Avatarimg = () => {
    const avatadata =[{id:2},{id:3},{id:5}]
    // const showformHandler = () => {
    //   setshowform("block");
    // };
  return (
    <div className="avatar-display">
      <div className="avatar-list">
        {avatadata.map(img => <img className="avatar" alt=""  src= {`https://avatars.dicebear.com/api/adventurer/:${img.id}.svg`}/>)}
      </div>
      <div className="add">
        <Link to={"/newcontact"}>
          <button className="button">
            <iconify-icon icon="akar-icons:plus" width="28"></iconify-icon>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Avatarimg;