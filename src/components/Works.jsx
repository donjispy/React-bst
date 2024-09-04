import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { worksData } from '../Data';


let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


export default function AppWorks() {
    return (
        <section id="works" className="block works-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our works</h2>
                    <div className="subtitle">our awesome works</div>
                </div>
                <Row className='portfoliolist'>
                    {
                        worksData.map(works => {
                            return (
                                <Col sm={4} key={works.id}>
                                    <div className='portfolio-wrapper'>
                                        <a href={works.link}>
                                            <Image src={works.image} />
                                            <div className='label text-center'>
                                                <h3>{works.title}</h3>
                                                <p>{works.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
                <Pagination>{items}</Pagination>
            </Container>
        </section>
    )
}