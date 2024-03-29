import './index.scss'
import logoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLettersClass] = useState('text-animate')
  const nameArray = [...'vinash']
  const jobArray = [...'Software Engineer']
  const updateClass = () => {
    setLettersClass('text-animate-hover')
  }
  const updateClassTimeout = () => {
    setTimeout(updateClass, 4000)
  }
  useEffect(updateClassTimeout, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            {/* Hi, <br /> I'm */}
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img src={logoS} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Full Stack Engineer / Software Development Engineer / Javascript
            Expert
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
