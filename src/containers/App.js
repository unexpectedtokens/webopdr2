import React from "react";
import { Nav, Footer } from "../Layout";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Index/Index";
import Projects from "./Projects/Projects";
import Detail from "./Detail/Detail";

const Theme = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    padding-top: 65px;
    color: #555;
  }
  a{text-decoration: none;}
  @media (max-width: 800px){
    body{
      font-size: 12.5px;
    }
  }
`;

class App extends React.Component {
  state = {
    language: "english"
  };

  changeLanguage = () => {
    if (this.state.language === "english") {
      return this.setState({ language: "dutch" });
    }
    this.setState({ language: "english" });
  };

  render() {
    return (
      <BrowserRouter>
        <Nav
          changeLanguage={this.changeLanguage}
          language={this.state.language}
        />
        <Theme />
        <Switch>
          <Route
            path="/"
            exact
            component={props => <Index language={this.state.language} />}
          />
          <Route
            path="/projects"
            component={props => <Projects language={this.state.language} />}
          />
          <Route
            path="/detail"
            component={props => <Detail language={this.state.language} />}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
