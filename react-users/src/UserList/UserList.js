import React from 'react';
import { User } from "../User/User.js"
import data from "../data.json";

const UserList = () => {
    const users = data.results;
    return (
        <div className="UserList__wrapper">
            {users.map((user, i) => < User key={i}
                img={users[i].picture.thumbnail}
                name={users[i].name.first + " " + users[i].name.last}
                mail={users[i].email}
                date={users[i].dob.date} />)}
        </div>
    )
}
export { UserList };