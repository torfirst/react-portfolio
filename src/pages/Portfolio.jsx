import Example from '../assets/react.svg'
export default function Portfolio(){
    const dataArray = [
        {
            // title: "You're Cancelled",
            image: Example,
            link: "https://yourecancelled-4aa25f1b6285.herokuapp.com/login"
        },       
        {
            // title: "Weather Dashboard",
            image: Example,
            link: "https://torfirst.github.io/weather-dashboard/"
        }
    ]
    return (
        <div>
        <h2>Portfolio</h2>
        {dataArray.map(data => (
            <a href={data.link} key={data.title}>
                <h3>{data.title}</h3>
                <img src = {data.image}></img>
            </a>
        ))}
        </div>
    )
}