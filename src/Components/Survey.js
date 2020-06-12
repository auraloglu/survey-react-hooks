import React, { useState, useEffect } from "react";
import { deleteSurvey } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import {
  DELETE_SURVEY,
  EDIT_SURVEY,
  OPEN_EDIT_WINDOW,
} from "../redux/actions/types";

const Survey = (props) => {
  const dispatch = useDispatch();

  var myLang = [];
  const mStore = useSelector((state) => state.languages);

  const [surveyName, setSurveyName] = useState(props.surveyName);
  const [surveyId, setSurveyId] = useState(props.surveyId);

  const handleUpdate = () => {
    dispatch({ type: OPEN_EDIT_WINDOW });
    dispatch({ type: EDIT_SURVEY, payload: props });
  };

  const handleDelete = async () => {
    await deleteSurvey(surveyId).then((res) => {
      dispatch({ type: DELETE_SURVEY, payload: res });
    });
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
      <>
        <div role="listitem" className="item" style={{ paddingTop: "10px" }}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/online-survey-1/66/9-512.png"
            className="ui avatar image"
            alt="avatar"
          />
          <div className="content">
            <div className="header">
              {myLang[0].TagList._SURVEY_NAME}: {surveyName}
            </div>
            <div className="description">
              {myLang[0].TagList._SURVEY} ID: {surveyId}
            </div>
          </div>
          <div className="right floated content">
            <div
              onClick={() => handleUpdate(surveyName, surveyId)}
              className="ui button primary"
            >
              {myLang[0].TagList._UPDATE}
            </div>
            <div onClick={() => handleDelete()} className="ui button negative">
              {myLang[0].TagList._REMOVE}
            </div>
          </div>
        </div>
        <div className="ui section divider"></div>
      </>
    );
  }

  return (
    <>
      <div
        role="listitem"
        className="item"
        style={{ paddingTop: "10px" }}
      ></div>
      <div className="ui section divider"></div>
    </>
  );
};

export default Survey;
