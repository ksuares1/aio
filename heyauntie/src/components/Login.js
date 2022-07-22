import Button from 'react-bootstrap/Button';
import{useRef, useState, useEffect} from 'react';

const Login =() =>{
    // User Input
    const userRef=useRef();
    // User Password
    const errRef= useRef();

    const[user,setUser]=useState('');
    const[pwd,setPwd]=useState('');
    const [errMsg, setErrMsg]=useState(''); 
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    return(
        <>
        <section>
            <p ref={errRef} className={errMsg ? "errmsg":
            "offscreen"} aria-live="assertive">{errMsg}</p>
        </section>
        <div class="profile-img">
        <div class="blue-img">
            <a href="/">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </a>
            <form>
                <div>
                    {/* Username */}
                <label htmlFor="username">Username</label>
                <div>
                <input type="text" id="username" ref={userRef}
                autocomplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user} required />
                </div>
                </div>

                {/* Password */}
                <div>
                <label htmlFor="password"> Password</label>
                <div>
                <input type="password" id="password" 
                onChange={(e) => setPwd(e.target.value)}
                value={pwd} required />

                <div class="login-btn">
                <Button variant="success">Login</Button>{' '}
                </div>
                </div>
                </div>
                <br/>


                <div class="signup-btn ">
           <Button variant="outline-secondary">Login with Gmail</Button>{' '}
            </div>
              </form>
             <p>Need an account?</p>
             <span className="line">
                {/* put router link here */}
                <a href ="/signup">Sign Up</a>
             </span>
             </div>
            </div>
           </>
    )
}

export default Login;