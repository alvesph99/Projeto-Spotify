import React from "react";
import Player from "../components/Player";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const songId = useParams().id;
  // Já existe uma variável chamada id, logo não da pra desestruturar
  // o songObj. Solução: não desestrutura a variável única id, pra poder
  // desestruturar mais coisas em songObj

  const { image, name, duration, artist, audio, _id } = songsArray.filter(
    (currSongObj) => currSongObj._id === songId
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  const songArrayFromArtist = songsArray.filter(
    (currSongObj) => currSongObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songArrayFromArtist.length - 1)
  );

  const randomIndex2 = Math.floor(
    Math.random() * (songArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songArrayFromArtist[randomIndex]._id;
  const randomId2FromArtist = songArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name} `} />
        </div>
      </div>
      <div className="song__bar">
        <div className="song__artist-image">
          <Link to={`/artist/${artistObj._id}`}>
            <img
              width={75}
              height={75}
              src={artistObj.image}
              alt={`Imagem do artista ${artist}`}
            />
          </Link>
        </div>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div className="">
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
