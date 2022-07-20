import Toolbar from "../components/Navbar";





const Ask =()=>{
    
    return(
        <>
          <div class="questions-bkg">
        <Toolbar/>
      
            <form>
                <h2 class="form-questions">What is your area of interest? </h2>
                <div class="question-checkboxes">
                <label>
                <input type="checkbox"/>Self Esteem
                </label>
                <label>
                <input type="checkbox"/>Finances
                </label>
                <label>
                <input type="checkbox"/>Relationsips
                </label>
                <label>
                <input type="checkbox"/>Career  
                </label>
                </div>
                </form>
                
        </div>
        </>
    )
}

export default Ask;