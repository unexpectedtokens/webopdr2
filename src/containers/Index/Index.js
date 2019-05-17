import React from "react";
import Banner from "../../components/UI/Banner/Banner";
import Description from "../../components/Index/Description/Description";
import Bannerimg from "../../assets/landingpicture.jpg";
class Index extends React.Component {
  state = {};
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let title =
      this.props.language === "english"
        ? "European city of the year"
        : "Europese stad van het jaar";
    return (
      <main>
        <Banner
          language={this.props.language}
          title={title}
          background={Bannerimg}
          bannerheight="500px"
          onlanding
        />
        <Description language={this.props.language} />
      </main>
    );
  }
}

export default Index;
