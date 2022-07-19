import Button from 'react-bootstrap/Button';


const Signup =() =>{
    return(
        
        <div class="profile-img">
        <div class="blue-img">
            <a href="/home">
            <img href="/" class="blue-logo"  src={require('../assets/img/blue-logo.png')} alt="heyauntie-blue-logo" />
            </a>
            </div>
            <br/>
            <div class="container">
            <div class="profile-btns" col-md-12 text-center>  
           <Button variant="outline-primary">Login with Facebook</Button>{' '}
           </div>
           <br/>
           <div>
      <Button variant="outline-secondary">Login with Gmail</Button>{' '}
            </div>
           </div>
           </div>
    )
}

export default Signup;