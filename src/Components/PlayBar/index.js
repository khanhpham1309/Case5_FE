
import { useRef, useState } from 'react'
import './playbar.css'
import { useSelector } from 'react-redux';

const PlayBar = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef(null);

    const topVnSongs = useSelector(state => state.song.topVnSongs)
  
    const handleNextSong = () => {
        if (currentSongIndex === topVnSongs.length - 1) {
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
    const handlePreviousSong = () => {
        if (currentSongIndex === 0) {
            setCurrentSongIndex(topVnSongs.length-1);
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current.load();
                  audioRef.current.play();
            }

        } else {
            setCurrentSongIndex(currentSongIndex - 1);
            if(audioRef.current){
                audioRef.current.pause();
                audioRef.current.load();
                audioRef.current.play();
            }
        }
    };


    return (
        <>  
            <div className="playbar-container">
            <h1>{topVnSongs[currentSongIndex]?.nameSong}</h1>
                <button onClick={handlePreviousSong}><i className="fa-duotone fa-forward"></i></button>
                <div>
                  {
                    topVnSongs.length &&   <audio controls autoPlay ref={audioRef}>
                    <source
                    src={topVnSongs[currentSongIndex]?.sound}
                     type="audio/ogg" />
                </audio>
                  }
                  
                </div>

            <button onClick={handleNextSong}><i className="fa-duotone fa-forward"></i></button>
            </div>
        </>
    )
}

export default PlayBar