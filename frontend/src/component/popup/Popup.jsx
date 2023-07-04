import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
} from "@mui/material";

const PopupModal = ({ open, onClose, onOk, data }) => {
  const [inputValue, setInputValue] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  useEffect(() => {
    setInputValue(data.feedback);
    setRatingValue(data.rating);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleOk = () => {
    onOk({
      feedback: inputValue,
      rating: ratingValue,
    });
    setInputValue("");
    setRatingValue(0);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>How was it ?</DialogTitle>
      <DialogContent>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={handleRatingChange}
        />
        <TextField
          label="Feedback"
          value={inputValue}
          onChange={handleInputChange}
          fullWidth
          multiline
          autoFocus
          style={{ marginTop: "10px" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" style={{ color: "#7aa621" }}>
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary" style={{ color: "#80ae25" }}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopupModal;
