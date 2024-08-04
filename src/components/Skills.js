import Python from "../assets/img/Python.png";
import Java from "../assets/img/Java.png";
import C from "../assets/img/C.png";
import Html from "../assets/img/Html.png";
import Css from "../assets/img/Css.png";
import Javascript from "../assets/img/Javascript.png";
import Sql from "../assets/img/Sql.png";
import ReactIcon from "../assets/img/ReactIcon.png";
import Nodejs from "../assets/img/Nodejs.png";
import Kotlin from "../assets/img/Kotlin.jpeg";
import Googlecloud from "../assets/img/Googlecloud.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in Python, Java, C and have knowledge in the below technologies.</p>                    
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" >                          
                            <div className="item">
                                <img src={Python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={C} alt="Image" />
                                <h5>C</h5>
                            </div>                            
                            <div className="item">
                                <img src={Html} alt="Image" />
                                <h5>HTML</h5>
                            </div> 
                            <div className="item">
                                <img src={Css} alt="Image" />
                                <h5>CSS</h5>
                            </div> 
                            <div className="item">
                                <img src={Javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>  
                            <div className="item">
                                <img src={Sql} alt="Image" />
                                <h5>SQL</h5>
                            </div> 
                            <div className="item">
                                <img src={ReactIcon} alt="Image" />
                                <h5>React</h5>
                            </div> 
                            <div className="item">
                                <img src={Nodejs} alt="Image" />
                                <h5>Node Js</h5>
                            </div> 
                            <div className="item">
                                <img src={Kotlin} alt="Image" />
                                <h5>Kotlin</h5>
                            </div> 
                            <div className="item">
                                <img src={Googlecloud} alt="Image" />
                                <h5>Google Cloud</h5>
                            </div>                          
                        </Carousel>
                      
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}