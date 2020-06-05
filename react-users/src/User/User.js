import React from 'react';

const User = (props) => {
    return <div className="User__wrapper">
        <img src={props.img} alt='fail' className='UserList__image'></img>,
        <div className='UserList__textContent'>
            <p className="User__text">Name : {props.name}</p>
            <p className="User__text">Email : {props.mail}</p>
            <p className="User__text">Date of birth : {props.date}</p>
        </div>
    </div>
}

export { User };