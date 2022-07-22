import Toolbar from "./Navbar"
import Button from 'react-bootstrap/Button';



const QuestionTwo =() =>{
    return(
        <div class="questions-bkg">
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">Please select from one of the options below: </h2>
                <div class="question-checkboxes">
                <label class="checkbox 1">
                <input class="box" type="checkbox-1"/>I want to invest in the area of self-esteem, finances, relationships, or career. 
                </label>
                <br/>
                <label class="checkbox 2">
                <input class="box" type="checkbox-2"/>I want to grow in the area of self-esteem, finances, relationship or career. 
                </label>
                </div>
                <div class="question2-btn">
                <a href="/questionthree">
                <Button variant="secondary">Next</Button>{' '}
                </a>
                </div>
                </form>
                </div>
    )
}

export default QuestionTwo;