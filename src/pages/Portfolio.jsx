import Birbtopia from '../assets/birbtopia.png';
import Cancelled from '../assets/yourecancelled.png';
import Weather from '../assets/weatherdashboard.gif';
import RecipeDrink from '../assets/recipedrink.png';

export default function Portfolio() {
    const dataArray = [
        {
            title: "Birbtopia",
            image: Birbtopia,
            link: "https://yourecancelled-4aa25f1b6285.herokuapp.com/login",
            repo: 'https://github.com/torfirst/ur-cancelled'
        },
        {
            title: "You're Cancelled",
            image: Cancelled,
            link: "https://yourecancelled-4aa25f1b6285.herokuapp.com/login",
            repo: "https://github.com/torfirst/ur-cancelled"
        },
        {
            title: "Recipe & Drink Finder",
            image: RecipeDrink,
            link: "https://torfirst.github.io/recipe-drink-api-proj/",
            repo: "https://github.com/torfirst/recipe-drink-api-proj"
        },
        {
            title: "Weather Dashboard",
            image: Weather,
            link: "https://torfirst.github.io/weather-dashboard/",
            repo: "https://github.com/torfirst/weather-dashboard"
        }
    ]
    return (
        <div className="reset">
            <h2>portfolio</h2>
            <p>Click on a title to go to the project repository, or click on an image tile to go to the deployed project.</p>
            <div className='portfolio'>
                    {dataArray.map(data => (
        <div key={data.title}>
            <a className='portLinks' href={data.link}>
                <h3 className='repo'>{data.title}</h3>
                <img className="tiles" src={data.image} alt={data.title} />
            </a>
        </div>
    ))}
            </div>
        </div>
    )
}