import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

let InfoQuestions =() =>{
    return(
        <>
        {/* <div class="main-info">
        <h1>A community to help you rise and thrive.</h1>
        <p>Hey Auntie is a culturally sensitive, safe, supportive, and the unique challenges we face in our everyday lives.</p>
        </div>
        <div>
        <Button variant="primary" size="sm">
          Login
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Request an Invite
        </Button>
      </div> */}
     

    <Card style={{ width: '18rem', height:'35%'}}>
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
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  
      
      </>
    )
}

export default InfoQuestions;