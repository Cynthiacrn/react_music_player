import { React, useState, useRef, useEffect } from "react";
import PlayerControls from "./PlayerControls";
import PlayerCover from "./PlayerCover";
import PlayerDetails from "./PlayerDetails";

const Player = (props) => {
  const audioEL = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEL.current.play();
    } else {
      audioEL.current.pause();
    }
  });

  const skipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.lenght - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  return (
    <div className="c-play">
      <audio
        src={props.songs[props.currentSongIndex].source}
        ref={audioEL}
      ></audio>
      <PlayerCover song={props.songs[props.currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
        song={props.songs[props.currentSongIndex]}
      />
      <PlayerDetails song={props.songs[props.currentSongIndex]} />
    </div>
  );
};

export default Player;
