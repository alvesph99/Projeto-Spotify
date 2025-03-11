import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songArray }) => {
  const [items, setItems] = useState(5);
  // console.log(items);

  return (
    <div className="song-list">
      {songArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
