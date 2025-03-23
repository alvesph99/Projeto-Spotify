import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ name, _id, duration, image, artist, audio, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <div className="song-item__number-album">
        <p className="">{index + 1}</p>

        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da música ${name}`}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
