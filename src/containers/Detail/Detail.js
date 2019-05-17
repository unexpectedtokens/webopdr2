import React from "react";
import Banner from "../../components/UI/Banner/Banner";
import Bannerimg from "../../assets/landingpicture.jpg";
import { Detailcontainer } from "../../components/Detail/Detailcontainer";
class Projects extends React.Component {
  state = {
    project: {
      titleEng: "Fillprojecttitle",
      titleDutch: "Plaatshouder titel",
      textEng:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam error sapiente doloremque rem maxime necessitatibus iure libero, iusto sed reprehenderit minima. Nam dolorum, repudiandae culpa explicabo voluptatum enim sint!",
      textDutch:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quisquam error sapiente doloremque rem maxime necessitatibus iure libero, iusto sed reprehenderit minima. Nam dolorum, repudiandae culpa explicabo voluptatum enim sint!"
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let content = {
      title:
        this.props.language === "english"
          ? this.state.project.titleEng
          : this.state.project.titleDutch,
      text:
        this.props.language === "english"
          ? this.state.project.textEng
          : this.state.project.textDutch
    };
    return (
      <React.Fragment>
        <Banner
          background={Bannerimg}
          bannerheight="200px"
          title={content.title}
        />
        <Detailcontainer>
          <p>{content.text}</p>
        </Detailcontainer>
      </React.Fragment>
    );
  }
}
export default Projects;
