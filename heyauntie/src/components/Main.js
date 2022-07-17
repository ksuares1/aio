import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


let MainPage=() =>{
    return (
        <main class="main-section">
            <div class="homepage">
                <img class="main-background" src={require("../assets/img/main-img.PNG")} alt="heyauntie-main-img" />
            
            <Card style={{ width: '18rem', height:'35%', float:'right', bottom:'0', position:"relative"}}>
      <Card.Body>
        <Card.Title>A community to help you rise and thrive.</Card.Title>
        <br/>
        <Card.Subtitle className="mb-2 text-muted">Hey Auntie is a culturally sensitive, safe, supportive, and the unique challenges we face in our everyday lives</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div>
        <Button variant="primary" size="sm">
          Login
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Request an Invite
        </Button>
      </div>
      </Card.Body>
    </Card>
    </div>
        </main>
    )
}

export default MainPage;