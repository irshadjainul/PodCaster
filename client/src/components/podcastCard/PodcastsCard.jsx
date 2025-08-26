import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { playerActions } from "../../store/player.js";

const PodcastsCard = ({ items }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handlePlay = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      dispatch(playerActions.setDiv());
      dispatch(
        playerActions.changeImage(`http://localhost:3000/${items.frontImage}`)
      );
      dispatch(
        playerActions.changeSong(`http://localhost:3000/${items.audioFile}`)
      );
    }
  };
  return (
    <div className="border p-4 flex flex-col shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
      <Link to={`/description/${items._id}`}>
        <img
          src={`http://localhost:3000/${items.frontImage}`}
          className="rounded h-[35vh] w-full object-cover"
          alt={items.title}
        />
        <div className="mt-2 text-xl font-bold">{items.title.slice(0, 20)}</div>
        <div className="mt-2 leading-5 text-slate-500">
          {items.description.slice(0, 20)}
        </div>
        <div className="mt-2 bg-orange-100 text-orange-800 border-orange-800 rounded-full px-4 py-2 text-center">
          {items.category.categoryName}
        </div>
      </Link>
      <div className="mt-2">
        <Link
          to={isLoggedIn ? `/#` : "/login"}
          className="text-white bg-green-900 px-4 py-2 rounded mt-2 flex items-center justify-center hover:bg-green-700 transition-all duration-300"
          onClick={handlePlay}
        >
          Play Now
        </Link>
      </div>
    </div>
  );
};

export default PodcastsCard;
