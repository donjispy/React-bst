import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { blogData } from '../Data';


export default function AppBlogs() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Latest from blog</h2>
                    <div className="subtitle">get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blog => {
                            return (
                                <Col sm={4} key={blog.id}>
                                    <div className='holder'>
                                        <Card>
                                            <Card.Img variant="top" src={blog.image} />
                                            <Card.Body>
                                                <time>{blog.time}</time>
                                                <Card.Title>{blog.title}</Card.Title>
                                                <Card.Text>
                                                    {blog.description}
                                                </Card.Text>
                                                <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}