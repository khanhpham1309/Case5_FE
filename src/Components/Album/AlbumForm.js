import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Add as AddIcon, Clear as ClearIcon } from "@mui/icons-material";
import { getOne } from "../../services/albumService";

function AlbumForm(props) {
  // Destructure the props
  const { open, initialValues, onSubmit, onClose, id, albums } = props;

  // State variables for the form fields
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(null);

  // Function to clear form fields
  const clearForm = () => {
    setText("");
    setPreview(null);
    onClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      const album = albums.find((item) => {
        return item.idAlbum === id;
      });
      if (album) {
        setText(album.nameAlbum);
        setPreview(album.imageAlbum);
      }
    };
    fetchData();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    onSubmit({ nameAlbum: text, imageAlbum: preview }, id);
    clearForm();
  };

  async function fileChange(event) {
    const file = event.target.files[0];
    const form = new FormData();
    form.append("image", file);

    const url =
      "https://api.imgbb.com/1/upload?key=61f980551b1e0949c4870f301c08a6da";

    const options = {
      method: "POST",
      body: form,
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setPreview(data.data.url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open}>
      <DialogTitle>{id ? "Edit Album" : "Add Album"}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <div style={{ cursor: "pointer" }}>
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "300px",
                  marginBottom: "16px",
                }}
              />
            ) : (
              <></>
            )}
            <div
              style={{
                textAlign: "center",
                paddingTop: "32px",
                paddingBottom: "32px",
              }}
            >
              <Button variant="contained" component="label">
                <input
                  type="file"
                  id="input_img"
                  onChange={fileChange}
                  accept="image/*"
                ></input>
              </Button>
            </div>
          </div>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="dense"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button type="button" onClick={clearForm} startIcon={<ClearIcon />}>
            Cancel
          </Button>
          <Button color="primary" type="submit" disabled={!preview || !text}>
            {id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AlbumForm;
