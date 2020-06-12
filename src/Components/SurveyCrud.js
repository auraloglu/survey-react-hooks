import React from "react";
import SurveyCreate from "./SurveyCreate";
import SurveyEdit from "./SurveyEdit";
import { useSelector } from "react-redux";

const SurveyCrud = () => {
  const isCreateOpen = useSelector((state) => state.surveyCrud.isCreateOpen);
  const isEditOpen = useSelector((state) => state.surveyCrud.isEditOpen);
  const editSurveyName = useSelector((state) => state.surveyCrud.editingName);
  const editSurveyId = useSelector((state) => state.surveyCrud.editingId);

  if (isCreateOpen) {
    return <SurveyCreate />;
  } else if (isEditOpen) {
    return <SurveyEdit surveyName={editSurveyName} surveyId={editSurveyId} />;
  }
  return (
    <div>
      <span
        style={{
          fontWeight: "bold",
          fontSize: "2rem",
        }}
      ></span>
    </div>
  );
};

export default SurveyCrud;
