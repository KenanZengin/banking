import Image from 'next/image'
import React from 'react'
import img from '../public/assets/img/sctn1.png'
import { Container } from 'react-bootstrap'

const Section1 = () => {
  return (
    <div className='section1'>
        <Container>
            <div className="section1-content">
                <div className="section1-content-left">
                    <div className="title">
                        <h1 className='display-2'>
                            We are the
                            <br />
                            leading financial
                            <br />
                            instituions
                        </h1>
                    </div>
                    <div className="about">
                        <p>It's about time the incestment world caught up with the <br />
                        times. Our platform streamlines the entire alternative <br /> investment process from start to finish
                        </p>
                    </div>
                    <div className="sctn1btn">
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="section1-content-right">
                    <Image src={img} />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Section1