import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
const Contact = () => {
  const [letterClass, setLettersClass] = useState('text-animate')
  const updateClass = () => {
    setLettersClass('text-animate-hover')
  }
  const updateClassTimeout = () => {
    setTimeout(updateClass, 3000)
  }
  useEffect(updateClassTimeout, [])

  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_k9mhqpf',
        'template_x9sm9jg',
        refForm.current,
        'ZvrkDXanrXq8FTxh5'
      )
      .then(() => {
        alert('Message sent')
        window.location.reload(false)
      })
      .catch((error) => {
        console.log(error)
        alert('Email failed')
      })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[...'Contact me']}
              idx={15}
            />
          </h1>
          <p>
            Get in touch👋.
            <br />
            Feel free to reach out to me, fillout the form below with some info
            about the opportunity and I will get back to you as soon as I can.
            <br />
            Please allow me a couple of days to respond.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Avinash Chavan,
          <br />
          Kalaburgi, Karnataka, India
          <br />
          Shahbad Cross, Rajapur
          <br />
          585102, Kalaburgi
          <br />
          <span>avinashchavan1443@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[17.309697, 76.852393]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[17.309697, 76.852393]}>
              <Popup>Say Hi, to Avinash 👋 </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
