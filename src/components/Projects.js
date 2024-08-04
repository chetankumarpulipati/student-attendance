import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "WeatherWise",
      description: "A web application that fetches real-time weather data from a backend API and displays it in a user-friendly interface. Users can search for weather conditions by city or zip code.",
      imgUrl: projImg1,
    },
    {
      title: "TaskMaster",
      description: "A PWA that allows users to manage their to-do lists offline, with automatic syncing when they come back online. Features include push notifications, home screen installation, and offline support.",
      imgUrl: projImg2,
    },
    {
      title: "Galaxy Explorer",
      description: "An interactive website that takes users on a journey through the solar system. Features include scrolling animations, parallax effects, and gamification elements like quizzes and rewards.",
      imgUrl: projImg1,
    },
    {
      title: "Customer Segmentation",
      description: "An analysis of customer data using clustering algorithms to identify distinct customer segments. The results were used to create targeted marketing campaigns and improve customer satisfaction.",
      imgUrl: projImg2,
    },
    {
      title: "Predictive Maintenance",
      description: "A predictive maintenance model that forecasts equipment failures before they occur. The model uses machine learning algorithms to analyze historical data and predict future maintenance needs.",
      imgUrl: projImg3,
    },
    {
      title: "Sentiment Analysis",
      description: "A sentiment analysis tool that evaluates customer feedback to identify positive and negative sentiments. The tool uses natural language processing techniques to analyze text data and generate sentiment scores.",
      imgUrl: projImg1,
    },
    {
      title: "Fitness Tracker",
      description: "A fitness tracking app that monitors users' daily activity levels and provides personalized workout recommendations. The app includes features like step tracking, calorie counting, and workout logging.",
      imgUrl: projImg3,
    },
    {
      title: "Recipe Finder",
      description: "A recipe search app that helps users discover new dishes and plan meals. The app allows users to search for recipes by ingredients, cuisine, or dietary preferences, and save their favorite recipes for later.",
      imgUrl: projImg1,
    },
    {
      title: "Language Translator",
      description: "A language translation app that translates text and speech between multiple languages. The app uses machine learning algorithms to improve translation accuracy and provide real-time language support for users.",
      imgUrl: projImg2,
    },
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
                      <p>Here's a glimpse into my project portfolio.</p>
                      <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Web Projects</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Data Science Projects</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Android Apps</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                          <Tab.Pane eventKey="first">
                            <Row>
                              {
                                projects.slice(0,3).map((project, index) => {
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
                                projects.slice(3,6).map((project, index) => {
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
                                projects.slice(6,9).map((project, index) => {
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
        <img className="background-image-right" src={colorSharp2}></img>
      </section>
  )
}