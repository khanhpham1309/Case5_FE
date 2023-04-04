
import { useRef, useState } from 'react'
import './playbar.css'

const PlayBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);
  
    const [songs, setSongs] = useState([
        {
          title: 'Song 1',
          file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        },
        {
          title: 'Song 2',
          file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'

        },
        {
          title: 'Song 3',
          file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
        }
      ]);


    // const handlePlayback = () => {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    //   setIsPlaying(!isPlaying);
    // };

    const handleNextSong = () => {
        if (currentSongIndex === songs.length - 1) {
          setCurrentSongIndex(0);
          if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    
        } else {
          setCurrentSongIndex(currentSongIndex + 1);
          if(audioRef.current){
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
        }
      };

    console.log(audioRef.current,'audioRef')
    console.log(audioRef.current,'audioRef')
    return (
        <>
            <div className="playbar-container">
            <h1>{songs[currentSongIndex].title}</h1>
                <div>
                    <audio controls autoplay ref={audioRef}>
                        <source 
                        src={songs[currentSongIndex].file}
                         type="audio/ogg" />
                    </audio>
                </div>
            {/* <button onClick={handlePlayback}>{isPlaying ? 'Pause' : 'Play'}12312313123</button> */}
            <button onClick={handleNextSong}>Next songs</button>
            </div>
        </>
    )
}

export default PlayBar