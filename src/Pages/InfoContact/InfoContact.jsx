import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cardinfo from "../../components/CardUserInfo/Cardinfo";

const InfoContact = ({users}) => {
    const [infoUser,setInfouser]=useState({})
    const {userId} = useParams()
    // console.log(userId)
    // console.log(users)
    // console.log(infoUser)
    useEffect(() => {
        setInfouser(users.filter(item => item.id === Number(userId))[0])
    },[])
    return ( 
        <div>
            <div>
                <Cardinfo infoUser={infoUser}/>
            </div>
        </div>
     );
}
 
export default InfoContact;