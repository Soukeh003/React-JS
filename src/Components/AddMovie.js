import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Rating } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddMovie({setMovies , movies}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addPosterUrl, setAddPosterUrl] = useState("");
  const [addTrailer, setAddTrailer] = useState("");
  const [addRating, setAddRating] = useState(0);

  const handleAdd = () => {
    setMovies([
      ...movies,
      {
        id: Math.random(),
        title: addTitle,
        description: addDescription,
        posterUrl: addPosterUrl,
        tariler: addTrailer,
        rating: addRating,
      }
    ]);
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Add Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new movie
          </Typography>
          <TextField
            id="outlined-basic"
            label="Titel"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setAddTitle(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setAddDescription(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="PosterUrl"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setAddPosterUrl(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Trailer"
            variant="outlined"
            fullWidth
            onChange={(e) => {
              setAddTrailer(e.target.value);
            }}
          />
          <Rating
            name="simple-controlled"
            value={addRating}
            onChange={(event, newValue) => {
              setAddRating(newValue);
            }}
          />
          <br/>
          <Button variant="contained" onClick={handleAdd}>Add</Button>
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
