import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap'
import img from '../public/assets/img/sctn4.png'

const Section4 = () => {
  return (
    <div className="section4">
        <Container>
            <div className="section4-content">
            <div className="section4-content-left">
                    <div className="title"><h2 className='display-6'>What are the benefits to working with us.</h2></div>
                    <p className='info'>Forget everything you know about funds. With our customizable fund, you set it up once, and your investors can pick and choose their investments thet want to participate in - any asset class, any investment, all housed in a single</p>
                    <div className="dvntg">
                        <ul>
                            <li>No hidden fees.</li>
                            <li>100% security. Guaranteed</li>
                            <li>Supports 190+ countries</li>
                            <li>No training or maintenance needed.</li>
                        </ul>
                    </div>
                </div>
                <div className="section4-content-right">
                    <Image src={img} />
                </div>

            </div>
        </Container>
    </div>
  )
}

export default Section4