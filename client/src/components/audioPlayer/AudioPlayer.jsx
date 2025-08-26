import React, { useEffect, useRef, useState } from "react";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPause, FaPlay } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player.js";

const AudioPlayer = () => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  const dispatch = useDispatch();
  const PlayerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);
  const audioRef = useRef(null);

  const formatTime = (time) => {
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadMetaData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handlePlayPodcast = () => {
    const nextState = !isSongPlaying;
    setIsSongPlaying(nextState);

    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSongPlaying(false);
    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(""));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadMetaData);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadMetaData);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current && songPath) {
      audioRef.current.play();
      setIsSongPlaying(true);
    }
  }, [songPath]);

  return (
    <div
      className={`${
        PlayerDivState ? "fixed" : "hidden"
      } bottom-1 rounded lg:rounded-full left-1 right-1 mx-auto bg-zinc-900 text-zinc-200 p-4 flex items-center gap-4 max-w-5xl shadow-lg`}
    >
      <div className="hidden md:block w-1/3">
        <img
          src={img}
          className="size-14 rounded-full object-cover"
          alt="Podcast Thumbnail"
        />
      </div>

      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-4 text-xl">
          <button className="hover:cursor-pointer">
            <IoPlaySkipBack />
          </button>
          <button onClick={handlePlayPodcast} className="hover:cursor-pointer">
            {isSongPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button>
            <IoPlaySkipForward className="hover:cursor-pointer" />
          </button>
        </div>

        <div className="w-full flex items-center justify-center mt-3">
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const seekTime = Number(e.target.value);
              audioRef.current.currentTime = seekTime;
              setCurrentTime(seekTime);
            }}
            className="w-full cursor-pointer"
          />
        </div>

        <div className="w-full flex items-center justify-between text-sm">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="w-1/3 justify-end flex text-3xl">
        <button onClick={closeAudioPlayerDiv} className="cursor-pointer">
          <RxCross2 />
        </button>
      </div>

      <audio ref={audioRef} src={songPath}></audio>
    </div>
  );
};

export default AudioPlayer;
