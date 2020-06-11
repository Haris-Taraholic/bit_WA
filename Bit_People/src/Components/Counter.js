import React from 'react';

const Counter = (props) => {
    let maleCounter = 0;
    let femaleCounter = 0;
    props.users.map(item => item.gender === "female" ? femaleCounter++ : maleCounter++)

    return (
        <div className="counter">
            Male: {maleCounter} Female:{femaleCounter}
        </div>
    )
}

export { Counter }