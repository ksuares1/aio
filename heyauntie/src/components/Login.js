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
    const [success,setSuccess] =useState(false)
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])
    const handleSubmit =async(e) =>{
        e.preventDefault();
        console.log(user,pwd)
        setUser('');
        setPwd('');
        setSuccess(true);
    }

 return(
        <>
        {success ? (
            <section>
                <h1> You are logged in!</h1>
                <br/>
                <p>
                    <a href="/dashboard"> Go to Dashboard</a>
                </p>
                 </section>
        ) : (
        <section>
            <p ref={errRef} className={errMsg ? "errmsg":
            "offscreen"} aria-live="assertive">{errMsg}</p>
        

        <div class="profile-img">
        <div class="blue-img">
            <a href="/">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </a>

            <form onSubmit={handleSubmit}>
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
                <a href ="/signup">Sign Up</a>
             </span>
             </div>
            </div>
            </section>
             )}
           </>
    )}
      
        


        export default Login;