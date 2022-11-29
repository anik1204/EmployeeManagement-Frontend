import { useState, useEffect } from 'react';
export default function EditEmployee() {

    const [emObj, setemObj] = useState([]);
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');



    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1>User {fname} successfully registered!!</h1>
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
            <h1>Please enter all the fields</h1>
        </div>
        );
    };
    // Handling the name change
    const handlefName = (e) => {
        setfName(e.target.value);
        setSubmitted(false);
    };
    const handlelName = (e) => {
        setlName(e.target.value);
        setSubmitted(false);
    };
    const handleGender = (e) => {
        setGender(e.target.value);
        setSubmitted(false);
    };
    const handleSalary = (e) => {
        setSalary(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname === '' || lname === '' || email === '' || gender === '' || salary === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
    };

    const loadEmp = (e) => {
        setfName(e.first_name);
        setlName(e.last_name);
        setEmail(e.email);
        setGender(e.gender);
        setSalary(e.salary);
        return(
        <div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
        <form>
		{/* Labels and inputs for form data */}
		<label className="label">First Name</label>
		<input onChange={handlefName} className="input"
		value={fname} type="text" />

        <label className="label">Last Name</label>
		<input onChange={handlelName} className="input"
		value={lname} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Gender</label>
		<input onChange={handleGender} className="input"
		value={gender} type="text" />
        <label className="label">Salary</label>
		<input onChange={handleSalary} className="input"
		value={salary} type="number" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
    </div>
        );
    }

}