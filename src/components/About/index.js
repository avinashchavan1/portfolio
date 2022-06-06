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
            I am Web Developer with good knowledge of frontend and back end
            technologies, enjoy Machine learning and have worked with Business
            Intelligence tools{' '}
          </p>
          <p>
            Enjoy Machine learning and have worked with Business Intelligence
            tools
          </p>
          <p>
            I am Web Developer with good knowledge of frontend and back end
            technologies, enjoy Machine learning and have worked with Business
            Intelligence tools
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
