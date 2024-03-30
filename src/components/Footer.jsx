import Github from '../assets/github-mark-white.png';
import LinkedIn from '../assets/linkedin-blue.png';
import SoundCloud from '../assets/soundcloud.png';

export default function Footer() {
    const dataArray = [
        {
            title: "Github",
            icon: Github,
            link: "https://github.com/torfirst"
        },         
        {
            title: "LinkedIn",
            icon: LinkedIn,
            link: "https://www.linkedin.com/in/torfirst/"
        },       
        {
            title: "SoundCloud",
            icon: SoundCloud,
            link: "https://soundcloud.com/karysmatique"
        }
    ]
    return (
     <footer>
        {dataArray.map(data => (
            <a href={data.link} key={data.title}>
                {/* <h3>{data.title}</h3> */}
                <img className="iconStyle" src = {data.icon}></img>
            </a>
        ))}
     </footer>
    );
  }