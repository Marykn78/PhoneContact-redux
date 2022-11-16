import { useState} from "react";
import Delete from "../DeleteMessage/Delete";
import FilterItem from "../FilterItem/Filteritem";
import Search from "../Search/Search";
import './Table.style.css'
import Avatarimg from "../Avatarnimation/Avatar";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { likecontact } from "../../Redux/reducer/Slice";
import { useContext } from "react";
import { FormContext } from "../../Context/ContextForm";
import { tablerow } from "../../Data/data";
import { tablehead } from "../../Data/data";

const Table = () => {
  const [userid, setUserid] = useState(null);
  const [dismessage, setdisMessage] = useState("none");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [items, setitem] = useState([]);
  const {setForm}=useContext(FormContext)
  const dispatch =useDispatch()
  const checklikeHandler = (id) => {
    dispatch(likecontact(id))
    // setusers(
    //   users.map((item) =>
    //     item.id === id ? { ...item, favorit: !item.favorit } : item
    //   )
    // );
  };
  const showmessage = (id) => {
    setdisMessage("flex");
    setUserid(id);
  };
  const updateHandler = (user) => {
    setForm(user);
  };

  return (
    <div>
      <Delete
        dismessage={dismessage}
        setdisMessage={setdisMessage}
        userid={userid}
      />
      <Avatarimg />
      <Search setSearch={setSearch} />
      <FilterItem
        setitem={setitem}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="space-item">
        <table className='table' >
          <thead>
            <tr>
              {tablehead.map((th,index)=>(<th key={index}>{th.name}</th>))}
            </tr>
          </thead>
          {items
            .filter((item) =>
              item.name.toUpperCase().includes(search.toUpperCase())
            )
            .map((user) => (
              <tbody key={user.id}>
                <tr>
                    <td className="avatar-table">
                      <img src= {`https://avatars.dicebear.com/api/adventurer/:${user.id}.svg`} alt='avatar' />
                    </td>
                    {tablerow.map((row,index)=>(<td key={index}>{user[row.name]}</td>))}
                    <td onClick={() => checklikeHandler(user.id)}>
                      {user.favorit ? <iconify-icon icon="ant-design:like-twotone" width="28" height="28"></iconify-icon> :<iconify-icon icon="ant-design:dislike-twotone" width="28" height="28"></iconify-icon>}
                    </td>
                    <td>
                      <button className="button" onClick={() => showmessage(user.id)}><iconify-icon icon="fluent:delete-12-regular" width="22"></iconify-icon></button>
                      <Link to={`/update`}><button className="button" onClick={() => updateHandler(user)}><iconify-icon icon="fa-regular:edit" width="24"></iconify-icon></button></Link>
                      <Link to={`/info/${user.id}`}><button className="button"><iconify-icon icon="akar-icons:info" width="22"></iconify-icon></button></Link>
                    </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
