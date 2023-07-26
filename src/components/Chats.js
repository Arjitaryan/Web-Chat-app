import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Chats(){
    
    return (

        <div className="chats">
            <div className="userChat">
                <img src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>

            

            
        </div>
    );
}

export default Chats;