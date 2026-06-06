import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import PodcastsCard from "../components/podcastCard/PodcastsCard";

const AllPodcasts = () => {
  const [Podcasts, setPodcasts] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        "https://pod-caster-api-04.vercel.app/api/v1/podcast/getAllPodcasts"
      );
      setPodcasts(res.data.data);
    };
    fetch();
  }, []);
  console.log(Podcasts);
  return (
    <div>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {Podcasts &&
          Podcasts.map((items, i) => (
            <div key={i}>
              <PodcastsCard items={items}/>{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllPodcasts;
