import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_CREATE_WINDOW } from "../redux/actions/types";
import Survey from "./Survey";

const SurveyCrud = (props) => {
  const dispatch = useDispatch();

  var myLang = [];
  const mStore = useSelector((state) => state.languages);

  const renderSurveys = () => {
    if (props.surveyList && props.surveyList.length > 0) {
      return props.surveyList.map((survey) => {
        return (
          <Survey
            surveyId={survey.ID}
            surveyName={survey.Name}
            key={survey.ID}
          />
        );
      });
    }
  };

  if (mStore && mStore.language) {
    myLang = mStore.language.filter(
      (lang) => lang.Code == localStorage.getItem("Language")
    );

    return (
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {myLang[0].TagList._SURVEYS}
        </span>
        <div className="ui right floated buttons">
          <button
            className="ui button"
            style={{
              backgroundColor: "orange",
              color: "white",
              paddingTop: "-55px",
            }}
            onClick={() => dispatch({ type: OPEN_CREATE_WINDOW })}
          >
            {myLang[0].TagList._CREATE}
          </button>
        </div>
        <div role="list" className="ui list" style={{ paddingTop: "30px" }}>
          {renderSurveys()}
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default SurveyCrud;
