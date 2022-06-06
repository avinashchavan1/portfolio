import {
  faDocker,
  faGitAlt,
  faJsSquare,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLettersClass] = useState('text-animate')
  const updateClass = () => {
    setLettersClass('text-animate-hover')
  }
  const updateClassTimeout = () => {
    setTimeout(updateClass, 3000)
  }
  useEffect(updateClassTimeout, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'About me']}
              idx={15}
            />
          </h1>
          <p>
            A Passionate and Ambitious Software Engineer with excellent problem
            solving skills.
          </p>
          <p>
            Ardent in coding and enjoy working on new technologies. Always
            commited in to achieve best quality in software delivery.
          </p>
          <p>
            I love❤️ working on the backend system🗄️, which involves planning,
            developing and testing the server-side business logic.
          </p>
          <p>
            Expertise in Fullstack Web development, worked on .NET Framework,
            NLP and ML systems.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#75ac64" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#3776ab" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
