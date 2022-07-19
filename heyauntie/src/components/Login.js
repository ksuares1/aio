import Button from 'react-bootstrap/Button';


const Signup =() =>{
    return(
        
        <div class="profile-img">
        <div class="blue-img">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </div>
            <br/>
            <div class="container">
            <div class="profile-btns" col-md-12 text-center>  
           <Button variant="outline-primary">Login with Facebook</Button>{' '}
           </div>
           <div>
      <Button variant="outline-secondary">Login with Gmail</Button>{' '}
            </div>
           </div>
           </div>
    )
}

export default Signup;