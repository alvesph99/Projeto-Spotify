import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePause,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  //Minutes = TimeInSeconds vira Minutes quebrados => Floor Tira os quebrados => minutes redondinho
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  //Subtrai os minutes pra pegar apenas seconds, e arredonda pra um número normal
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({
  duration,
  randomId2FromArtist,
  randomIdFromArtist,
  audio,
}) => {
  //useRef() Disponibiliza acesso à um componente que ainda não foi renderizado (segundo a ordem da aplicação)

  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    //isPlaying diz SE o playPause() toca ou pausa
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    //Setta o valor de isPlaying pro oposto do que já tava
    setIsPlaying(!isPlaying);
  };

  //useEffect()

  useEffect(() => {
    const intervalId = setInterval(() => {
      //Atualiza currentTime, argumento: Tempo atual formatado pro padrão 00:00
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
      //ALÉM de atualizar o currentTime, atualizar o progresso da progress bar:
      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);
    return () => {
      //Ao parar, ele vai executar:
      clearInterval(intervalId);
    };
    //Variável observada que vai motivar nova execução:
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          //icon vira um condicional, se estiver tocando usa um, se não usa outro
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
