import Toolbar from "./Navbar"



const MainProfile=() =>{
    return(
        <>
        <div class="profile-img">
        <Toolbar/>
        <div class="heyladies">
            <div class="user-idenitifies">
            <h1 class="ladies-question" >Ask a question</h1>
            <div class="auntie-links">
                <a href="auntie">
                <h3 class="identify-auntie">I'm an auntie</h3>
                </a>

                <a href="auntie">
                <h3 class="identify-auntee">I'm an auntee</h3>
                </a>
                <div class="ladies">
                <img class="ladies-convo" src={require("../assets/img/heyauntie-ladies.png")} alt="heyauntie-ladies"/>
                </div>
                </div>
                </div>              
                </div>
                 </div>
                </>
        
       
        
       
    )

}

export default MainProfile;