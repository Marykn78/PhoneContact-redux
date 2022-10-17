import './Delete.style.css'
import { useDispatch } from 'react-redux';
import { removecontact } from '../../Redux/reducer/counterSlice';
const Delete = ({dismessage,setdisMessage,userid}) => {
  const dispatch = useDispatch()
  const deleteHandler = () => {
    dispatch(removecontact(userid))
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
