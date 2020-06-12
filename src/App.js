import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Header from "./Components/Header";
import SurveyContainer from "./Components/SurveyContainer";

const App = () => {
  return (
    <Router history={history}>
      <div
        style={{
          backgroundColor: "rgb(	171, 0, 18)",
          height: "61.56px",
          width: "100%",
          zIndex: -1,
          position: "absolute",
        }}
      ></div>
      <div className="ui container" style={{ width: "70% " }}>
        <Header />
        <Switch>
          <Route path="/" component={SurveyContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
