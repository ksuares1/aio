import InfoQuestions from '../components/Info-Home';



let MainPage=() =>{
    return (
        <main>
            <div class="homepage">
                <img class="main-background" src={require("../assets/img/main-img.PNG")} alt="heyauntie-main-img" />
                <InfoQuestions/>
            </div>
        </main>
    )
}

export default MainPage;