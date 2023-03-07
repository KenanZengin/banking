import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../public/assets/img/sctn3.png'

const Section3 = () => {
  return (
    <div className="section3">
        <Container>
            <div className="section3-content">
                <div className="section3-content-left">
                    <Image src={img} />
                </div>
                <div className="section3-content-right">
                    <div className="title"><h2 className='display-6'>Build and manage your portfolio</h2></div>
                    <p className='info'>Forget everything you know about funds. With our customizable fund, you set it up once, and your investors can pick and choose their investments thet want to participate in - any asset class, any investment, all housed in a single</p>
                    <div className="sctn3-btn">
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Section3