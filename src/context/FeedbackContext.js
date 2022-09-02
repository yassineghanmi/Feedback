import React from "react";
import { createContext, useState } from "react";
import { FeedbackData } from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const feedbackDelete = (id) => {
    setFeedback(feedback.filter((feed) => feed.id !== id));
  };
  const handleForm = (text, rating, id) => {
    setFeedback([
      {
        id: id,
        rating: rating,
        text: text,
      },
      ...feedback,
    ]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
    setFeedback(feedback.filter((feed) => feed.id !== item.id));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackDelete,
        handleForm,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
