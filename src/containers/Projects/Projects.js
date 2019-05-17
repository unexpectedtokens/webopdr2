import React from "react";
import Banner from "../../components/UI/Banner/Banner";
import Projectcontainer from "../../components/Projects/Container/Projectcontainer";
import Projectmul from "../../components/UI/Mulproject/Mulproject";
class Projects extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let title = this.props.language === "english" ? "Projects" : "Projecten";
    return (
      <React.Fragment>
        <Banner
          background={
            "https://platform-duic.imgix.net/app/uploads/sites/2/2018/04/20170410-Rboosterbroek-Utrecht060.jpg?auto=format&ch=Width%2CDPR%2CSave-Data&fit=max&ixlib=php-1.1.0&q=35"
          }
          bannerheight="200px"
          title={title}
        />
        <Projectcontainer>
          <Projectmul />
          <Projectmul />
          <Projectmul />
          <Projectmul />
          <Projectmul />
          <Projectmul />
          <Projectmul />
        </Projectcontainer>
      </React.Fragment>
    );
  }
}
export default Projects;
