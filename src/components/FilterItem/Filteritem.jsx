import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Filter.style.css";
const FilterItem = ({ filter, setFilter, setitem }) => {
  const filterdata = [
    { id: 1, title: "all" },
    { id: 2, title: "like" },
    { id: 3, title: "dislike" },
  ];
  const users = useSelector(state=>state.users)
  // const dispatch =useDispatch()
  const filterHandler = (title) => {
    setFilter(title);
  };
  const checkFilter = () => {
    switch (filter) {
      case "like":
        setitem(users.filter((item) => item.favorit === true));
        break;
      case "dislike":
        setitem(users.filter((item) => item.favorit === false));
        break;
      default:
        setitem(users);
    }
  };
  useEffect(() => {
    checkFilter();
  }, [users, filter]);
  return (
    <>
      <div className="filter-container">
        {filterdata.map((item,index) => (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterHandler(item.title)}
            style={{ background: item.title === filter ? "#90728b" : "#ddd" }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterItem;
