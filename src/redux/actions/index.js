const url =
  "https://thingproxy.freeboard.io/fetch/http://coresurveymvc.appspot.com";

// "https://cors-anywhere.herokuapp.com/http://coresurveymvc.appspot.com";

const token = localStorage.getItem("Token");

export const fetchAccessToken = async () => {
  await fetch(`${url}/Account/Token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      EMail: "ahmettalha.uraloglu@gmail.com",
      Password: "@#ATalha1234",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("Token", data.Token);
      localStorage.setItem("ValidTo", data.ValidTo);
    });
};

export const fetchSurveyList = async () => {
  const response = await fetch(`${url}/api/Survey`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

  return response;
};

export const createSurvey = async (surveyName) => {
  const response = await fetch(`${url}/api/Survey`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: surveyName,
    }),
  }).then((res) => res.json());

  return response;
};

export const editSurvey = async (surveyName, surveyId) => {
  const response = await fetch(`${url}/api/Survey/${surveyId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID: surveyId,
      Name: surveyName,
    }),
  }).then((res) => res.json());

  return response;
};

export const deleteSurvey = async (surveyId) => {
  const response = await fetch(`${url}/api/Survey/${surveyId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ID: surveyId,
    }),
  }).then((res) => res.json());

  return response;
};

export const fetchLanguages = async (languageCode) => {
  const response = await fetch(`${url}/api/Language`, {
    method: "GET",
  }).then((res) => res.json());

  return response;
};
