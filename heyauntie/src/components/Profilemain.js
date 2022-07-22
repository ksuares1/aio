import Toolbar from "./Navbar"



const MainProfile=() =>{
    return(
        <>
        <Toolbar/>
        <div class="profile-bkg">
        </div>
        <div class="">
        <img src={require("../assets/img/heyauntie-ladies.png")} alt="heyauntie-ladies"/>

        </div>
        </>
    )

}

export default MainProfile;