import Birbtopia from '../assets/birbtopia.png';
import Cancelled from '../assets/yourecancelled.png';
import Weather from '../assets/weatherdashboard.gif';
import RecipeDrink from '../assets/recipedrink.png';
import Scheduler from '../assets/scheduler.png';
import Notetaker from '../assets/notetaker.png';

export default function Portfolio() {
    const dataArray = [
        {
            title: "Birbtopia",
            image: Birbtopia,
            link: "https://birbtopia-4joq.onrender.com/",
            repo: 'https://github.com/Scrysis/birbtopia'
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
        },
        {
            title: "Workday Scheduler",
            image: Scheduler,
            link: "https://torfirst.github.io/work-day-scheduler/",
            repo: "https://github.com/torfirst/work-day-scheduler"
        },
        {
            title: "Notetaker",
            image: Notetaker,
            link: "https://notetakerproj0-24281f1b47e0.herokuapp.com/",
            repo: "https://github.com/torfirst/note-taker"
        },
    ]
    return (
        <div className="reset portfolioMargins">
            <h2>portfolio</h2>
            <p className="portfolioBlurb">Click on a title to go to the project repository, or click on an image tile to go to the deployed project.</p>
            <div className='portfolio'>
                {dataArray.map(data => (
                    <div className="formatTiles" key={data.title}>
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