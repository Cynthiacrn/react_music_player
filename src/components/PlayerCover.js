import React from "react";

const PlayerCover = (props) => {
  return (
    <div className="c-player--cover">
      <div className="details-img">
        <img src={props.song.cover} alt="song cover" />
      </div>
    </div>
  );
};

export default PlayerCover;
