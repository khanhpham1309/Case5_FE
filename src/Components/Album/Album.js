import { useState, useEffect } from "react";
import AlbumItem from "./AlbumItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Album() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    // Call the API to get the album list
    fetch("http://localhost:3001/albums")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAlbum(data[0]);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      {album.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <AlbumItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
