import {
  OPEN_CREATE_WINDOW,
  CLOSE_CREATE_WINDOW,
  OPEN_EDIT_WINDOW,
  CLOSE_EDIT_WINDOW,
} from "../actions/types";

const INITAL_STATE = {
  isCreateOpen: false,
  isEditOpen: false,
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case OPEN_CREATE_WINDOW:
      return { ...state, isCreateOpen: true, isEditOpen: false };
    case CLOSE_CREATE_WINDOW:
      return { ...state, isCreateOpen: false };
    case OPEN_EDIT_WINDOW:
      return { ...state, isEditOpen: true, isCreateOpen: false };
    case CLOSE_EDIT_WINDOW:
      return { ...state, isEditOpen: false };
    case "EDIT_SURVEY":
      return {
        ...state,
        editingName: action.payload.surveyName,
        editingId: action.payload.surveyId,
      };
    default:
      return state;
  }
};
