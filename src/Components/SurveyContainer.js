import React, { useEffect } from "react";
import SurveyList from "./SurveyList";
import SurveyCrud from "./SurveyCrud";
import moment from "moment";
import {
  fetchAccessToken,
  fetchSurveyList,
  fetchLanguages,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_SURVEY_LIST, FETCH_LANGUAGES } from "../redux/actions/types";

const SurveyContainer = () => {
  const dispatch = useDispatch();

  const surveyListUpdated = useSelector((state) => state.survey.surveyList);

  const fetchSurvey = async () => {
    await fetchSurveyList().then((res) => {
      dispatch({ type: FETCH_SURVEY_LIST, payload: res });
    });
  };

  const fetchLanguage = async () => {
    await fetchLanguages().then((res) => {
      dispatch({ type: FETCH_LANGUAGES, payload: res });
    });
  };

  useEffect(() => {
    if (!localStorage.getItem("Token") && !localStorage.getItem("ValidTo")) {
      fetchAccessToken();
    } else if (
      localStorage.getItem("ValidTo") < moment().format("YYYY-MM-DD HH:mm:SS")
    ) {
      fetchAccessToken();
    }

    fetchSurvey();
    fetchLanguage();
  }, []);

  return (
    <div className="ui segment">
      <div className="ui very relaxed two column grid">
        <div className="column">
          <SurveyList surveyList={surveyListUpdated} />
        </div>
        <div className="column">
          <SurveyCrud />
        </div>
      </div>
      <div className="ui vertical divider" />
    </div>
  );
};

export default SurveyContainer;
