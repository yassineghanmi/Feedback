import React, { useState } from "react";
import { FaTimes,FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
const FeedbackItem = ({ item, handleDelete ,editFeedback}) => {
  const [rating, setRating] = useState(0);
  const [text, SetText] = useState("this is text of feedback");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTimes color="#202142" />
      </button>
      <button className="edit" onClick={()=>{editFeedback(item)}}><FaEdit color='#202142'/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
