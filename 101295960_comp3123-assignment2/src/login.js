import { useState } from 'react';
import axios from 'axios';

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errCode, setErrCode] = useState(1);

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = async (e) => {
	e.preventDefault();
	if (email === '' || password === '') {
	setError(true);
    setErrCode(1);
	} else {
	//setSubmitted(true);
	setError(false);
    try {
        const {params} = JSON.stringify({

            "email": {email},
            
            "password": {password},
            
            });
        const {data} = await axios.post('https://101295960-comp-3123-assignment1.vercel.app/api/user/login',params, {
        headers: {
            "content-type": "application/json",
          },
        });
  
        console.log('data is: ', JSON.stringify(data, null, 4));
  
        setErrCode(data.message);
      } catch (err) {
        setErrCode(err.message);
      } finally {
       // setIsLoading(false);
      }
    }
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {email} successfully logged in!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
        {errCode===1 ? <h1>Please enter all the fields</h1> : <h1>{errCode}</h1>}
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>User Login</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}
