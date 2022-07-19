import Button from 'react-bootstrap/Button';

const Signup =() =>{
    return(
        
        <div class="profile-img">
        <div class="blue-img">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </div>
            <br/>
            <div class="login-buttons">
            <div>
                <a href="/">
            <Button class="gmail-btn" variant="outline-secondary">Login with Gmail</Button>{''}
            </a>
            </div>
            
            <br/>

            <div>
                <a href="/git ">
            <Button class="fb-btn" variant="outline-primary">Login with Facebook</Button>{' '}
            </a>
            </div>
            </div>     
            </div>  
       
    )
}

export default Signup;