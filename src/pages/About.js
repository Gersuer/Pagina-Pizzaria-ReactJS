import '../styles/About.css'
import Making from '../assets/makingpizza.jpeg'
import Friends from '../assets/multiplePizzas.jpeg'
import Pizza from '../assets/pizzarAbout.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="makingPizza">
                <img src={Making} alt="making" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, aut
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, autLorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, aut
                </p>
            </div>
            <div className="friends">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, autLorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, aut</p>
                <img src={Friends} alt="" />
            </div>
            <div className="pizza">
                <img src={Pizza} alt="making" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, aut
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, autLorem ipsum dolor sit, amet consectetur adipisicing elit. Provident laboriosam minus suscipit aliquam cupiditate odio rem itaque perspiciatis molestias, aut
                </p>
            </div>
        </div>
    )
}

export default About