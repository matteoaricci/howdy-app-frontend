import React, {useState} from 'react';

const Registration = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [regErrors, setRegErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/registrations", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    first_name: firstName,
                    last_name: lastName,
                    username: username,
                    email: email,
                    password: password
                }
            }
            )
        }).then(resp => resp.json())
        .then(user => console.log(user))
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name='first-name' placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input type="text" name="last-name" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                <input type="text" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
