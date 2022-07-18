import Button from 'react-bootstrap/Button';

const Signup =() =>{
    return(
        
        <div class="profile-img">
        <div class="blue-img">
            <img class="blue-logo" src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </div>
            <br/>
            <div class="login-buttons">
            <Button class="gmail-btn" variant="outline-secondary">Login with Gmail</Button>{''}
            </div>
            
            <br/>

            <div>
            <Button class="fb-btn" variant="outline-primary">Login with Facebook</Button>{' '}
            </div>     
            </div>  
       
    )
}

export default Signup;