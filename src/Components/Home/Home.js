import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import CardSong from "../Songs/CardSong";

export default function Home(props) {
    const theme = useTheme();
    
    return(
        <>
            <CardSong/>
        </>
    )
}