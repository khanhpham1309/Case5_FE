import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import customAxios from "../../../service/api";
import { useEffect, useState } from "react";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CardSong() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        const init = async () => {
            try {
                const res = await customAxios.get('/songs')
                setSongs(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        init()
    }, [])

    return (
        <>
            <div>
                <audio controls autoplay>
                    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/ogg" />
                </audio>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1>Nhạc Việt</h1>
                    </Grid>

                    {
                        songs.length ? songs.map((song) => (

                            <Grid item xs={3}>
                                <Item>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={song?.image ?? ""}
                                                alt="song img"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Item>
                            </Grid>
                        ))

                            : null
                    }

                    <Grid item xs={12}>
                        <h1>Nhạc Pop</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3KkKgrgsKm4OZvKdal8MQA6QsZOW20hNxzxCx2r0yU1qB2ctEuoGaEf0LZWxRrkKwk8&usqp=CAU"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3x-eAdegDp0WPeVjB93ZiPiofutjMFE-cWh1LHxTIAhbL4EHDmIm_-pzOLjQfrczJcXQ&usqp=CAU"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://vcdn1-dulich.vnecdn.net/2021/07/16/8-1626444967.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=GfgGn4dNuKZexy1BGkAUNA"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={3}>
                        <Item>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCGdWHkrUQGCVGGGzf1A6QewVwvh-kW0nrrdYcdMYFHw3yP2YHhR-b5QQ_guZRg0VGlI&usqp=CAU"
                                        alt="green iguana"
                                    />
                                </CardActionArea>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}