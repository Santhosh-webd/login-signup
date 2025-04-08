import React, { useEffect, useState } from 'react'
import "./Login.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


export const Login = () => {
  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active")
    })
    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active")
    })
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phno,setPhno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const redirect = useNavigate();


  async function signupsubmit(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      Swal.fire({
        title: "Warning!",
        text: "Passwords do not match!",
        icon: "warning",
        timer: 1500,
        showConfirmButton: false,
        iconColor: "yellow",
        color: "#000"
      });
      return;
    }
    else {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        Swal.fire({
          title: "Success!",
          text: "You have signed up successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          iconColor: "green",
          color: "#000"
        });
        const container = document.getElementById('container');
        container.classList.remove("right-panel-active")

        // window.location.reload();
        // redirect("/")
      })
    }
  }
  async function singinsubmit(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      // window.location.reload();
      window.location.href = "https://meatify-shopping.netlify.app/"
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        iconColor: "green",
        color: "#000"
      });
    })
  }

  return (
    <div className='loginsignupbody'>
      <h2 className='mainhead'>Welcome to Meatify</h2>
      <h3 className='subhead'>Sign in or create your account to start shopping</h3>
      <div className="maindiv" id='container'>
        <div className="mainform signupbox">
          <form onSubmit={signupsubmit}>
            <h1 className="signuphead">Create Account</h1>
            <input type="text" placeholder="Name" value={name} required onChange={(event) => setName(event.target.value)} />
            <input type="email" placeholder="Email" value={email} required onChange={(event) => setEmail(event.target.value)} />
            {/* <input type="number" placeholder="Phone Number" value={phno} required onChange={(event)=> setPhno(event.target.value)} /> */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{6,}$"
              title="Use 6+ chars with a mix of letters, numbers & symbols"
              onChange={(event) => setPassword(event.target.value)}
            />
            <input type="password" placeholder="Confirm Password" value={confirmpassword} required onChange={(event) => setConfirmpassword(event.target.value)} />
            <button className='formbutton' type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="mainform signinbox">
          <form onSubmit={singinsubmit}>
            <h1 className="signinhead">Sign in</h1>
            <input type="email" placeholder='E-mail' onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
            <a href="#">Forgotten password ?</a>
            <button className='formbutton'>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="signinhead">Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id='signIn'>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="signinhead">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id='signUp'>Sign Up</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
