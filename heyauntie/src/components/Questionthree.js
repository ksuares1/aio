import Toolbar from "./Navbar"
import Button from 'react-bootstrap/Button';



const Questionfour =() =>{
    return(
        <div class="questions-bkg">
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">Please select one of the options below: </h2>
                <div class="question-checkboxes">
                <label class="checkbox 1">
                <input class="box" type="checkbox-1"/>I have 10 plus years of experience, and context navigating my area of interest and my footsteps can serve as a guide. 
                </label>
                <br/>
                <label class="checkbox 2">
                <input class="box" type="checkbox-2"/>I have less than 10 years of experience and context navigating my area of interest and want to learn from the footsteps of those who have gone before me. 
 
                </label>
                </div>
                <div class="question2-btn">
                <a href="/questionfour">
                <Button variant="secondary">Next</Button>{' '}
                </a>
                </div>
                </form>
                </div>
    )
}

export default Questionfour;