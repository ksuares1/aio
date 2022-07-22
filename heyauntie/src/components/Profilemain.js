import Toolbar from "./Navbar"



const MainProfile=() =>{
    return(
        <>
        <div class="profile-img">
        <Toolbar/>
        <div class="heyladies">
            <div class="user-idenitifies">
            <h1 >Ask a question</h1>
                <a href="auntie">
                <h3 >I'm an auntie</h3>
                </a>
                <a href="auntee">
                <h3>I'm an auntee</h3>
                </a>
        <img src={require("../assets/img/heyauntie-ladies.png")} alt="heyauntie-ladies"/>
        </div>
        </div>
        </div>
        </>
        
       
        
       
    )

}

export default MainProfile;