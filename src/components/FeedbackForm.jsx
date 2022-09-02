import React, { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const id = uuidv4();
  const { handleForm, feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setIsDisabled(false);
      setRating(feedbackEdit.item.rating);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);
  const handleChange = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          selectedRate={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleChange}
            value={text}
            type="text"
            placeholder="Write a review"
          />
          <Button
            handleForm={() => {
              handleForm(text, rating, id);
              setText("");
              setIsDisabled(true);
            }}
            type={"submit"}
            isDisabled={isDisabled}
            version={"primary"}
          >
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
