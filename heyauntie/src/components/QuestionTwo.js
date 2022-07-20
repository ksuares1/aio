import Toolbar from "./Navbar"




const QuestionTwo =() =>{
    return(
        <div class="questions-bkg">
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">Please select from one of the options below: </h2>
                <div class="question-checkboxes">
                <label>
                <input class="box" type="checkbox"/>I want to invest in the area of self-esteem, finances, relationships, or career. 
                </label>
                <label>
                <input class="box" type="checkbox"/>I want to grow in the area of self-esteem, finances, relationship or career. 
                </label>
                </div>
                </form>
                </div>
    )
}

export default QuestionTwo;