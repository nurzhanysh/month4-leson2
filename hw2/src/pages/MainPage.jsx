import About from "../components/About"
import Title from "../components/Title"

function MainPage(){
    return (
        <>
            <Title title={"Hello world"} />
            <About info={{title: "Some Title", body:"Some body"}} />
        </>
    )
}

export default MainPage