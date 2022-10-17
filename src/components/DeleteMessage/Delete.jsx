import './Delete.style.css'
const Delete = ({dismessage,setdisMessage,userid,users,setusers}) => {
  const deleteHandler = () => {
    setusers(users.filter((item) => item.id !== userid));
    notshowmessage();
  };
  const notshowmessage=()=>{
    setdisMessage('none')
  };
  return (
    <div>
      <div className='deletemess' style={{ display: dismessage }}>
        <p>are you sure to delete?</p>
        <button className='button' onClick={deleteHandler}>yes</button>
        <button className='button' onClick={notshowmessage}>No</button>
      </div>
    </div>
  );
};

export default Delete;
