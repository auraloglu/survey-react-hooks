const INITAL_STATE = {
  selectedLanguage: "",
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      return { ...state, selectedLanguage: action.payload };
    default:
      return state;
  }
};
