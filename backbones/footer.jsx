import React from 'react'
import { Container } from 'react-bootstrap'
import {BsTwitter,BsFacebook,BsTelegram,BsMedium} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
      <div className="footer-web">
        <div className="footer-web-content">
            <div className="footerlogo">
              <h3 className='display-6'>Bankin'</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequant sunt nostrud amet.</p>
            </div>
            <div className="learn">
              <h3>Learn & get help</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">How to works</a></li>
                <li><a href="#">For Developers</a></li>
                <li><a href="#">Token</a></li>
              </ul>
            </div>
            <div className="company">
              <h3>Company</h3>
              <ul>
                <li><a href="#">Whitepaper</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
              <span>helluidex@gmail.com</span>
              <p className='social'>
                <a href="#"><BsTwitter color='white'  size={25} /></a>
                <a href="#"><BsFacebook color='white' size={25}  /></a>
                <a href="#"><BsTelegram color='white' size={25}  /></a>
                </p>
            </div>     
        </div>
      </div>
      </Container>
      <div className="rights">
        Privacy Security Terms & conditions complaints Financial Service guide
      </div>
    </div>
  )
}


export default Footer