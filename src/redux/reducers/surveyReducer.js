import {
  FETCH_SURVEY_LIST,
  CREATE_SURVEY,
  DELETE_SURVEY,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEY_LIST:
      return { ...state, surveyList: action.payload };
    case CREATE_SURVEY:
      return { ...state, surveyList: [...state.surveyList, action.payload] };
    case DELETE_SURVEY:
      return {
        ...state,
        surveyList: state.surveyList.filter(
          (survey) => survey.ID !== action.payload.ID
        ),
      };
    default:
      return state;
  }
};
