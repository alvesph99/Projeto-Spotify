import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  //Eu vou usar o name e o banner dentro do meu objeto
  //Logo posso desestruturar pra melhor legibilidade do código
  const { name, banner } = artistArray.filter(
    (currArtistObj) => currArtistObj.id === Number(id)
  )[0];

  const songArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === name
  );

  const randomIndex = Math.floor(
    Math.random() * (songArrayFromArtist.length - 1)
  );
  const randomIdFromArtist = songArrayFromArtist[randomIndex].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songArray={songArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
