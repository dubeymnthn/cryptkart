import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Ts2 from "../components/Ts2";

import "./pages.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user)
      alert('Login Success')
      window.location.href = "/dashboard"
    } else (
      alert('Login Failure ! Check Your Credentials')
    )

    console.log(data);
  }

  return (
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={registerUser}>
    //     <input
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //       placeholder="Email"
    //     />
    //     <br />
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <br />
    //     <button type="submit" value="login">
    //       Login
    //     </button>
    //   </form>
    // </div>
    
    <div className="b">
    <Navbar />
    <div class="body">
      <Ts2 />
     
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form className="one" onSubmit={registerUser}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email or Phone" id="username" />

        <label for="password">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Password" id="password" />

        <button type="submit" value="login" >Log In</button>

        <Link to='/register'><button>Register</button></Link>
        
      </form>
    </div>
    </div>
  )
};

export default Login;
