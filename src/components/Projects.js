import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/accxex.png";
import projImg2 from "../assets/img/CBIR.png";
import projImg3 from "../assets/img/knowngainer.png";
import projImg4 from "../assets/img/bequerelh.png";
import projImg5 from "../assets/img/ksh.png";
import projImg6 from "../assets/img/photopix.png";
import projImg7 from "../assets/img/temptas.png";
import projImg8 from "../assets/img/WHD.png";
import projImg9 from "../assets/img/SBG.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import 'animate.css/animate.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Crypto Trading Platform",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "CBIR",
      description: "Content Based Image Retrieval",
      imgUrl: projImg2,
    },
    {
      title: "KnownGainer",
      description: "Education Platform",
      imgUrl: projImg3,
    }
  ];

  const projects2 = [
    {
      title: "Bequerelh",
      description: "Informationpedia",
      imgUrl: projImg4,
    },
    {
      title: "Khushiya Stay Healthier",
      description: "Health Welfare",
      imgUrl: projImg5,
    },
    {
      title: "PhotopiX",
      description: "Blogging",
      imgUrl: projImg6,
    }
  ];

  const projects3 = [
    {
      title: "Temptas",
      description: "Teamperature Analysis",
      imgUrl: projImg7,
    },
    {
      title: "WHD",
      description: "Housing Website",
      imgUrl: projImg8,
    },
    {
      title: "SBG",
      description: "Security Hiring Website",
      imgUrl: projImg9,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I developed over 100+ projects in different fields and verified by 400+ happy clients over couple of years. Some of my work is mentioned below</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}