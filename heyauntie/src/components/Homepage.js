import Button from 'react-bootstrap/Button';

const Homepage=()=>{
    return(
        <div class="home-container">
            <div>
                <img src={require("../assets/img/heyauntie-ladies.png")}  alt="two-woman-dicussing-heyauntie" />
            </div>
            <div class="text-container">
                    <h1 class="home-heading"> A community to help you rise and thrive.</h1> 
                    <br/>
                    <p class="home-para"> HeyAuntie is a culturally sensitive, safe, supportive,and accessible, platform for black women, and the unique challenges we face in our everyday lives.</p>
                    <br/>
                    <div class="btns-container">
                    <div className="mb-2">
                        <a href="/login">
                <Button id="log-btn" variant="primary" size="lg">
                     LOGIN
                     </Button>{' '}
                     </a>
                     <a href="/questions">
                <Button id="invite" variant="secondary" size="sm">
                    Request an Invite
                </Button>
                </a>
      </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Homepage;