import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { teamsData } from '../Data';

export default function AppTeams() {
    return (
        <section id="teams" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our teams</h2>
                    <div className="subtitle">some of our experts</div>
                </div>
                <Row>
                    {
                        teamsData.map(teams => {
                            return (
                                <Col sm={3} key={teams.id}>
                                    <div className='image'>
                                        <Image src={teams.image} />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3>{teams.name}</h3>
                                        <span className='designation'>{teams.designation}</span>
                                        <p>{teams.description}</p>
                                    </div>
                                </Col>
                            );
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}