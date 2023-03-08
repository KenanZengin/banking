import { Container  , Card  , Row , Col} from 'react-bootstrap'

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
                    <Row xl={4} lg={3} md={2}>

                    <Col>
                        <Card >
                        <Card.Body>
                            <Card.Title>Legal & <br />regulatory</Card.Title>
                            <Card.Link href="#">Read More</Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>Investment <br />management</Card.Title>
                                <Card.Link href="#">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card >
                        <Card.Body>
                            <Card.Title>Investor<br />management</Card.Title>
                            <Card.Link href="#">Read More</Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>
                                <Card.Title>Compliance</Card.Title>
                                <Card.Link href="#">Read More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    </Row>
                </div>
            </div>

        </Container>
    </div>
  )
}

export default Section2