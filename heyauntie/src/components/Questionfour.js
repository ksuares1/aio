import Toolbar from "./Navbar"
import Button from 'react-bootstrap/Button';



const Questionfour =() =>{
return(
            <>
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">Please select from the option you idenitify most with: </h2>
                <div class="question-checkboxes">
                <label>
                <input class="four-box" type="checkbox"/>I am willing to complete training to learn Auntie's Hourse rules to keep the Hey Auntie! experience safe, fun, and meaningful for everyone.
                </label>
                <br/>
                <label>
                <input class="four-box" type="checkbox"/>I  am willing to complete training to learn Auntie's House rules to keep the Hey Auntie! experience safe, fun, and meaningful for everyone. 
                </label>
                <br/>
                <label>
                <input class="four-box" type="checkbox"/>No, I can't particpate at this time. 
                </label>
                </div>
                <div class="question2-btn">
                <a href="/">
                <Button variant="secondary">Submit</Button>{' '}
                </a>
                </div>
                </form>
                </>
    )
}

export default Questionfour;