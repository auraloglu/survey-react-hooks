import { combineReducers } from "redux";
import surveyWindowReducer from "./surveyWindowReducer";
import surveyReducer from "./surveyReducer";
import languageReducer from "./languageReducer";
import selectedLanguageReducer from "./selectedLanguageReducer";

export default combineReducers({
  survey: surveyReducer,
  surveyCrud: surveyWindowReducer,
  languages: languageReducer,
  selectedLanguage: selectedLanguageReducer,
});
