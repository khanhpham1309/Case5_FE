import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ item }) {
  console.log(item);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.imageAlbum}
          alt={item.nameAlbum}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.nameAlbum}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">*/}
          {/*  {item.nameAlbum}*/}
          {/*</Typography>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/album/${item.idAlbum}`}>More Detail</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
