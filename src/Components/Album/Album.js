import { useState, useEffect } from "react";
import AlbumItem from "./AlbumItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  createAlbum,
  getAll,
  removeAlbum,
  editAlbum,
} from "../../services/albumService";
import AlbumForm from "./AlbumForm";
import "./style.css";

export default function Album() {
  const [albums, setAlbums] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [id, setId] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setId(0);
  };

  const handleSave = async (data) => {
    try {
      const response = await createAlbum(data);
      setAlbums([...albums, response]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id) => {
    setId(id);
    handleOpen();
  };

  async function handleSubmitSaveEdit(data, id) {
    try {
      const response = await editAlbum(id, data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  const handleDelete = async (id) => {
    await removeAlbum(id);
    setAlbums(albums.filter((item) => item.idAlbum !== id));
  };

  const fetchData = async () => {
    try {
      const data = await getAll();
      setAlbums(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterAlbum = albums.filter((item) => {
    return item.nameAlbum.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <Grid>
        <div className="header-album">
          <Button
            variant="outlined"
            onClick={handleOpen}
            style={{ marginRight: "50px" }}
          >
            Add New Album
          </Button>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Grid container spacing={2}>
          {filterAlbum.map((album) => (
            <Grid item xs={12} sm={6} md={4} key={album.idAlbum}>
              <AlbumItem
                album={album}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <AlbumForm
        open={open}
        onClose={handleClose}
        onSubmit={id ? handleSubmitSaveEdit : handleSave}
        id={id}
        albums={albums}
      />
    </>
  );
}
