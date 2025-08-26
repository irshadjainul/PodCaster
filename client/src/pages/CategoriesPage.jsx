import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PodcastsCard from "../components/podcastCard/PodcastsCard";

const CategoriesPage = () => {
  const { cat } = useParams();
  const [Podcasts, setPodcasts] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/v1/getPodcastByCategory/${cat}`,
        { withCredentials: true }
      );
      setPodcasts(res.data.data);
    };
    fetch();
  }, []);
  return (
    <div className="px-4 py-4 lg:px-12">
      <h1 className="text-xl font-semibold">{cat}</h1>
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {Podcasts &&
          Podcasts.map((items, i) => (
            <div key={i}>
              <PodcastsCard items={items}/>{" "}
            </div>
          ))}
          {
            Podcasts && Podcasts.length===0 && (
                <div className="text-3xl font-bold h-screen w-full flex items-center justify-center">
                        {" "}
                        No Podcasts Right Now
                </div>
            )
          }
      </div>
    </div>
  );
};

export default CategoriesPage;
