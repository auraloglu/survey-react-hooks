import React, { useState, useEffect } from "react";
import { editSurvey, fetchSurveyList } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_SURVEY_LIST,
  EDIT_SURVEY,
  CLOSE_EDIT_WINDOW,
} from "../redux/actions/types";

const SurveyCrud = (props) => {
  const dispatch = useDispatch();

  const [surveyName, setSurveyName] = useState(props.surveyName);
  const [surveyId, setSurveyId] = useState(props.surveyId);

  var myLang = [];
  const mStore = useSelector((state) => state.languages);

  function handleChange(event) {
    setSurveyName(event.target.value);
  }

  const fetchSurvey = async () => {
    await fetchSurveyList().then((res) => {
      dispatch({ type: FETCH_SURVEY_LIST, payload: res });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dispatchSurvey = async () => {
      const response = await editSurvey(surveyName, surveyId);
      dispatch({ type: EDIT_SURVEY, payload: response });
      dispatch({ type: CLOSE_EDIT_WINDOW });
    };

    await dispatchSurvey();
    await fetchSurvey();
  };

  useEffect(() => {
    setSurveyName(props.surveyName);
    setSurveyId(props.surveyId);
  }, [props]);

  if (mStore && mStore.language) {
    myLang = mStore.language.filter(
      (lang) => lang.Code == localStorage.getItem("Language")
    );

    return (
      <div>
        <h1>
          {myLang[0].TagList._UPDATE} {myLang[0].TagList._SURVEY}
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
            {myLang[0].TagList._UPDATE}
          </button>
        </form>
      </div>
    );
  }

  return <div></div>;
};

export default SurveyCrud;
