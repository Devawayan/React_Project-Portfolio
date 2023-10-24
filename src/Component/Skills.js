import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
import TrackVisibility from "react-on-screen";
import 'animate.css'

export const Skills= ()=>{
    const responsive ={
        superLargeDesktop:{
            breakpoint:{max:4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint:{max:3000, min: 1024},
            items:3
        },
        tablet: {
            breakpoint:{max:1024, min: 464},
            items:2
        },
        mobile: {
            breakpoint:{max:464, min: 0},
            items:1
        }
    };

    return(
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible}) =>
                        <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptate aspernatur officiis nisi voluptas quo. Earum debitis rem corporis odio possimus quod aliquam, enim voluptas facere delectus cum repudiandae, voluptatem distinctio veritatis soluta, voluptates veniam eius.<br></br> Animi, excepturi nihil? Deleniti, deserunt! Impedit dolores voluptatibus facere laboriosam reprehenderit asperiores animi. Eius.
                            </p>
                            <Carousel responsive={responsive} infinite={false} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>React Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>UI/UX Developement</h5>
                                </div>
                            </Carousel>
                        </div>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp}className="background-image-left" />
        </section>
    )
}