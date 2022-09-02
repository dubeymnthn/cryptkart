import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Ts2 from '../components/Ts2';
import './pages.css';

const Register = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	async function registerUser(event) {
		event.preventDefault();
		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		});

		const data = await response.json();
		if (data.status === 'ok') {
			history.push('/login');
		}

		console.log(data);
	}

	return (
		// <div >
		//   <h1>Register</h1>
		//   <form onSubmit={registerUser}>
		//     <input
		//       type="text"
		//       onChange={(e) => setName(e.target.value)}
		//       value={name}
		//       placeholder="Name"

		//     /><br/>
		//     <input
		//       type="email"
		//       value={email}
		//       onChange={(e) => setEmail(e.target.value)}

		//       placeholder="Email"
		//     /><br/>
		//     <input
		//           type="password"
		//       value={password}
		//       onChange={(e) => setPassword(e.target.value)}
		//     /><br />
		//    <button type= "submit" value="register">Register</button>
		//   </form>
		// </div>
		<div className='b'>
			<Navbar />
			<div class="body">
				<Ts2 />
				<div class="background">
					<div class="shape"></div>
					<div class="shape"></div>
				</div>
				<form  className="one" onSubmit={registerUser}>
					<h3>Login Here</h3>

					<label for="username">Username</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Username"
						id="username"
					/>

					<label for="username">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email or Phone"
						id="username"
					/>

					<label for="password">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						id="password"
					/>

					<button type="submit" value="register">
						Register
					</button>

					<Link to="/login">
						<button>Login</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default Register;
