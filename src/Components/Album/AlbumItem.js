import { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MultiActionAreaCard({ album, onEdit, onDelete }) {
  const DEFAULT_ALBUM_BACKGROUND =
    "https://imgs.search.brave.com/wY45xGpFfs8gaW2Rx7yvzNnXNspwkOPMQt0H8UOhnck/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxwaGFjb2Rl/cnMuY29tLzExMi8x/MTIxMjEuanBn";

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={album.imageAlbum || DEFAULT_ALBUM_BACKGROUND}
            alt={album.nameAlbum}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {album.nameAlbum}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/album/${album.idAlbum}`}>Detail</Link>
          </Button>
          <Button onClick={() => onEdit(album.idAlbum)}>Edit</Button>
          <Button onClick={() => onDelete(album.idAlbum)}>Delete</Button>
        </CardActions>
      </Card>
    </>
  );
}
