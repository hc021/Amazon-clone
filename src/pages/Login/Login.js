import React from 'react'
import './login.css'
import { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
    const [input, setinput] = useState("");
    const [password, setPassword] = useState("");
    const [vaild, setVaild] = useState(true);
    const [caution, setCaution] = useState(true);
    const history = useHistory();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!input) setVaild(prestate => prestate = false)
        else {
            setVaild(prestate => prestate = true)
            
            auth.signInWithEmailAndPassword(input, password)
                .then(auth => {
                    history.push("/");
                }).catch(error=>{
                    console.log(error.message)
                    setCaution(prestate => prestate = false)
                })
            
        }
    };
    const handleChange = (event) => {
        setinput(event.target.value);
        event.target.value === null ? setVaild(prestate => prestate = false) : setVaild(prestate => prestate = true)
    }
    const handleRegister = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(input, password).then(auth => {
            history.push("/");
        }).catch(error => console.log(error))
    };
    return (
        <div>
            {!caution && (<div className="problem-occer">
                <ReportProblemOutlinedIcon className="caution-icon" />
                <div>
                    <h4>There was a problem</h4>
                    <p>We cannot find an account with that email address</p>
                </div>
            </div>)}
            <Link to="/">
                <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="" />
            </Link>
            <form>
                <div className='signIn'>
                    <h3>Sign-In</h3>
                    <p className="email">Email (phone for mobile accounts)</p>
                    <input autoFocus type="text" value={input} onChange={handleChange} />
                    <span>{!vaild && "! please fill your email address"}</span>
                    <p className="email">Password</p>
                    <input type="password" onChange={event => setPassword(event.target.value)} />
                    <button type="submit" className="submit-btn" onClick={handleSubmit}>Coutinue</button>
                    <p className="legal">By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.</p>
                    <p className="help"><ArrowBackIosIcon className="left-pointer" />Need help?</p>
                </div>
            </form>
            <div className="newToAmazon">
                <div></div>
                <p>New to Amazon?</p>
                <div></div>
            </div>
            <form action="" >
                <div className="create" >
                    <button onClick={handleRegister}>Create your Amazon account</button>
                </div>
            </form>
        </div>
    )
}

export default Login
