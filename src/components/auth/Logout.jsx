import React from 'react';

const Logout = () => {
    const handleClick = () => {
        fetch('http://localhost:3000/logout', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                "Accepts": 'application/json'
            },
            // credentials: 'include',
        })
        .then(resp => resp.json())
        .then(res => console.log(res))
    }

    return (
        <div>
            <button onClick={() => handleClick()}>Logout</button>
        </div>
    );
}

export default Logout;
