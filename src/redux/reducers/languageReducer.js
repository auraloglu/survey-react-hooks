import { FETCH_LANGUAGES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_LANGUAGES:
      return { ...state, language: action.payload };
    case "FILTER_LANGUAGE":
      return {
        ...state,
        selectedLanguage: state.language.filter(
          (lang) => lang.Code == localStorage.getItem("Language")
        ),
      };
    default:
      return state;
  }
};
