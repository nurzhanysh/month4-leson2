import Title from "./Title"

function About({ info }){
    return (
        <div>
            <Title title={info.title} />
            <p>{info.body}</p>
        </div>
    )
}

export default About