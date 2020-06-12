import React, { useState } from "react";
import { createSurvey } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_SURVEY, CLOSE_CREATE_WINDOW } from "../redux/actions/types";

const SurveyCrud = () => {
  const dispatch = useDispatch();
  const [surveyName, setSurveyName] = useState("");

  var myLang = [];
  const mStore = useSelector((state) => state.languages);

  function handleChange(event) {
    setSurveyName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const dispatchSurvey = async () => {
      const response = await createSurvey(surveyName);
      dispatch({ type: CREATE_SURVEY, payload: response });
      dispatch({ type: CLOSE_CREATE_WINDOW });
    };

    dispatchSurvey();
  }

  if (mStore && mStore.language) {
    myLang = mStore.language.filter(
      (lang) => lang.Code == localStorage.getItem("Language")
    );

    return (
      <div>
        <h1>
          {myLang[0].TagList._CREATE} {myLang[0].TagList._SURVEY}
        </h1>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label>{myLang[0].TagList._SURVEY_NAME}</label>
            <input
              placeholder={myLang[0].TagList._SURVEY_NAME}
              value={surveyName}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="ui button">
            {myLang[0].TagList._CREATE}
          </button>
        </form>
      </div>
    );
  }

  return <div></div>;
};

export default SurveyCrud;
