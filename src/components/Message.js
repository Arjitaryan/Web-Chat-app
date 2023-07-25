import React from "react";

function Message(){
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                <span>just now</span>
            </div>

            <div className="messageContent">
                <p>hello</p>
                <img src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
}

export default Message;