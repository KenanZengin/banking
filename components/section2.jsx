import Link from 'next/link'
import React from 'react'
import { Container  , Card } from 'react-bootstrap'

const Section2 = () => {
  return (
    <div className='section2'>
        <Container>
            <div className="section2-content">
                <div className="title">
                    <h2 className='display-6'>The perfect investment solution
                        <br />
                        didn't exist. So we built it.
                    </h2>
                </div>
                <div className="cards">
                <Card >
                    <Card.Body>
                        <Card.Title>Legal & <br />regulatory</Card.Title>
                        <Card.Link href="#">Read More</Card.Link>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>Investment <br />management</Card.Title>
                        <Card.Link href="#">Read More</Card.Link>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>Investor<br />management</Card.Title>
                        <Card.Link href="#">Read More</Card.Link>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>Compliance</Card.Title>
                        <Card.Link href="#">Read More</Card.Link>
                    </Card.Body>
                </Card>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Section2