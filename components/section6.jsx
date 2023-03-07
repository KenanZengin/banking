import Image from 'next/image';
import { Container , Card , Carousel } from 'react-bootstrap';
import {AiOutlineStar} from 'react-icons/ai'
import img from '../public/assets/img/sctn3.png'
import img2 from '../public/assets/img/sctn72.png'

const Section6 = () => {
  return (
    <div className="section6">
        <Container>
            <div className="section6-content">
                <div className="title"><h2 className='display-6'>Our Customers Say</h2></div>
                <Carousel>
                    <Carousel.Item>
                    <Card >
                        <Card.Body>

                            <Card.Title>
                                <div className="stars">                                
                                <AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} /><AiOutlineStar size={25} />
                                </div>
                                <h3>I'd wholeheartedly recommed</h3>
                            </Card.Title>
                            <Card.Text>
                                "Our conversion rates have increades by 125% since they recamped our website and messaging. I'd wholeheartedly recommed their services to any SaaS founder"
                            </Card.Text>
                            <div className="card-img">
                                <Image src={img} width={50} />
                                <div className="name">
                                    <p className='h4'>Jeck Milan</p>
                                    <span>Marketing Coordinator</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="carousel-img">
                        <Image src={img2} />
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    </div>
  )
}

export default Section6