import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

//O novoArtistArray é uma cópia do artistArray -id em cada objeto.
const newArtistArray = artistArray.map((currentArtistObj) => {
  //Pra cada objeto do artistArray, um novo objeto com todas
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  //Pra cada objeto do SongArray, um novo objeto com todas
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;
  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseArtists);
console.log(responseSongs);
