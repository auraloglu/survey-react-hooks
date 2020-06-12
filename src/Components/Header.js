import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import "../assets/styles/Header.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  var myLang = [];
  const mStore = useSelector((state) => state.languages);
  const sStore = useSelector((state) => state.survey);
  const setLanguage = (languageCode) => {
    localStorage.setItem("Language", languageCode);
    dispatch({ type: "SET_LANGUAGE", payload: languageCode });
    dispatch({ type: "FILTER_LANGUAGE", payload: languageCode });
  };

  useEffect(() => {
    if (!localStorage.getItem("Language")) {
      localStorage.setItem("Language", "EN");
    } else {
      var selectedLanguage = localStorage.getItem("Language");
      dispatch({ type: "SET_LANGUAGE", payload: selectedLanguage });
    }
  }, []);

  const handleSurveyCounter = () => {
    if (sStore.surveyList) {
      return sStore.surveyList.length;
    }
    return 0;
  };

  if (mStore && mStore.language) {
    myLang = mStore.language.filter(
      (lang) => lang.Code == localStorage.getItem("Language")
    );

    return (
      <div
        className="ui secondary large menu"
        style={{ backgroundColor: "rgb(	171, 0, 18)", paddingTop: "10px" }}
      >
        <div className="item link">
          {myLang[0].TagList._SURVEY} : {handleSurveyCounter()}
        </div>
        <div className="right menu">
          <div className="item link"></div>
          <Dropdown text={myLang[0].TagList._SURVEY} className="item link">
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLanguage("TR")}>
                Turkish
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setLanguage("EN")}>
                English
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }

  return (
    <div
      className="ui secondary large menu"
      style={{ backgroundColor: "rgb(	171, 0, 18)", paddingTop: "10px" }}
    ></div>
  );
};

export default Header;
