

let MemberQuestions=()=>{
    return(
        <div>
            <form>
            <h1> What is your area of interest?</h1>
            <input type= "radio" id ="option" name="questions"  value="self-esteem">
                <label for="self-esteem"> Self Esteem</label><br/>
            </input>
            <input type= "radio" id ="option" name="questions"  value="finances">
                <label for="finances">Finances</label><br/>
                </input>
                <input type= "radio" id ="option" name="questions"  value="relationships">
                <label for="self-esteem"> Self Esteem</label><br/>
                </input>

                <input type= "radio" id ="option" name="questions"  value="career">
                <label for="self-esteem"> Career </label><br/>
                </input>
                <button href="">Next</button>
             </form>
        </div>
    )
}

export default MemberQuestions;