import React ,{useContext}from 'react';
import {useParams} from 'react-router-dom';
import {UsersContext} from "../../contexts/UsersContext";


const UserPage = () => {
    const {id} = useParams();
    const {getUser} = useContext(UsersContext);
    const user = getUser(id);

    return (
        <div>
            <div className={"font_size50"}>{user.name + " " + user.secondName}</div>
            <div className={"font_size50"}></div>
        </div>
    );
};

export default UserPage;