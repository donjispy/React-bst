import Carousel from 'react-bootstrap/Carousel';
import { heroData } from '../Data.js';

export default function AppHero(){
    return (
        <section id="home" className="hero-block">
        <Carousel>
           {
             heroData.map(hero => {
               return (
                 <Carousel.Item key={hero.id}>
                   <img
                     className="d-block w-100"
                     src={hero.image}
                     alt={"slide " + hero.id}
                   />
                   <Carousel.Caption>
                     <h2>{hero.title}</h2>
                     <p>{hero.description}</p>
                     <a className="btn btn-primary" href={hero.link}>Learn More  <i className="fas fa-chevron-right"></i></a>
                   </Carousel.Caption>             
                 </Carousel.Item>
               );
             })
           }
       </Carousel>
     </section>
    )

}