import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PodcastsCard from "../podcastCard/PodcastsCard";

const YourPodcast = () => {
  const [Podcasts, setPodcasts] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://pod-caster-api-04.vercel.app/api/v1/podcast/getUserPodcast",
        { withCredentials: true }
      );
      setPodcasts(res.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="px-4 lg:px-12 my-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-semibold md:font-bold">Your Podcasts</h1>
        <Link
          to="/addPodcast"
          className="px-4 py-2 bg-zinc-800 text-white rounded font-semibold"
        >
          Add Podcast
        </Link>
      </div>
      <div className="w-full my-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {Podcasts &&
          Podcasts.map((items, i) => (
            <div key={i}>
              <PodcastsCard items={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default YourPodcast;
