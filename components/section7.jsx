import Image from 'next/image'
import { Container , Row , Col } from 'react-bootstrap'
import img from '../public/assets/img/cmny1.png'
import img2 from '../public/assets/img/cmny2.png'

const Section7 = () => {
  return (
    <div className="section7">
        <Container>
            <div className="section7-content">
                <div className="title">
                    <h2>Trusted by 12K+ businesses Company</h2>
                </div>
                <div className="company">
                <Row lg={4} md={2}>
                    <Col><Image src={img} /></Col>
                    <Col><Image src={img2} /></Col>
                    <Col><Image src={img} /></Col>
                    <Col><Image src={img2} /></Col>
                </Row>
                <Row lg={4} md={2}>
                    <Col><Image src={img2} /></Col>
                    <Col><Image src={img} /></Col>
                    <Col><Image src={img2} /></Col>
                    <Col><Image src={img} /></Col>
                </Row>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Section7