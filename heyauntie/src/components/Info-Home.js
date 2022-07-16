import Button from 'react-bootstrap/Button';


let InfoQuestions =() =>{
    return(
        <>
        <div class="main-info">
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
      </div>
      
      </>
    )
}

export default InfoQuestions;