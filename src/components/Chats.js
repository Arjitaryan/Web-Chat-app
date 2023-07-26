import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

function Chats() {

    const [chats, setChats] = useState([]);

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    //console.log(chats);      //prints an object
    console.log(Object.entries(chats));      //prints an array of 2 elements with 1st element as chatId(combined Id) and second element is object

    return (

        // <div className="chats">
        //     {Object.entries(chats)?.map((chat) =>{

        //         <div className="userChat" key={chat[0]}>
        //             <img src= {chat[1].userInfo.photoURL} alt="" />
        //             <div className="userChatInfo">
        //                 <span>{chat[1].userInfo.displayName}</span>
        //                 <p>{chat[1].userInfo.lastMessage?.text}</p>
        //             </div>
        //         </div>

        //     })}
        // </div>

        <div className="chats">
            {Object.entries(chats)?.map((chat) => (

                <div className="userChat" key={chat[0]} >

                    <img src={chat[1].userInfo.photoURL} alt="" />
                    <div className="userChatInfo">

                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Chats;