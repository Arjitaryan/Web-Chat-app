import React from "react";

function Search(){
    return (
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>

            <div className="userChat">
                <img src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
}

export default Search;