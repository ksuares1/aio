import Toolbar from "./Navbar";





const Ask =()=>{
    
    return(
        <>
          <div class="questions-bkg">
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">What is your area of interest? </h2>
                <div class="question-checkboxes">
                <label>
                <input class="box" type="checkbox"/>Self Esteem
                </label>
                <label>
                <input class="box" type="checkbox"/>Finances
                </label>
                <label>
                <input class="box" type="checkbox"/>Relationsips
                </label>
                <label>
                <input class="box" type="checkbox"/>Career  
                </label>
                </div>
                </form>
                </div>
        </>
    )
}

export default Ask;