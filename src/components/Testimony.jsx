import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { testimonialsData } from '../Data';


export default function AppTestimony() {
    return (
        <section id="testimonials" className="testimonials-block">
            <Container fluid>
                <Carousel controls={false}>
                    <div className="title-holder">
                        <h2>Client testimonials</h2>
                        <div className="subtitle">what client says about us</div>
                    </div>

                    {
                        testimonialsData.map(testimonials => {
                            return (
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                            <span className='designation'>{testimonials.designation}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            );
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}
