import React, { useState } from "react";

const PlayerControls = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (e) => {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <div className="c-player--controls">
      <button
        onClick={handleClick}
        id="like-btn"
        className={isLiked ? "active-btn" : null}
      >
        <i class="fa-solid fa-heart"></i>
      </button>
      <a href={props.song.url} target="_blank" className="link-btn">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
      <button className="skip-btn" onClick={() => props.skipSong(false)}>
        <i class="fa-solid fa-backward"></i>
      </button>
      <button className="skip-btn" onClick={() => props.skipSong()}>
        <i class="fa-solid fa-forward"></i>
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        {props.isPlaying ? (
          <i class="fa-regular fa-circle-pause"></i>
        ) : (
          <i class="fa-regular fa-circle-play"></i>
        )}
      </button>
    </div>
  );
};

export default PlayerControls;
