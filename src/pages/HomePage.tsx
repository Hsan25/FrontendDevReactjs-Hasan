import { useEffect, useState } from "react";
import axiosInstance from "../config/axios";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { Restaurant } from "../types";

const HomePage = () => {
  const [data, setData] = useState<Restaurant[] | undefined>();
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await axiosInstance.get("/list");
        setData(res.data.restaurants);
      } catch (error) {
        console.log("error");
      }
    };
    fetchRestaurant();
  }, []);
  return (
    <>
      <Filter />
      <section className="container mx-auto pt-28">
        <h1 className="text-xl">ALL RESTAURANT</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 py-10">
          {data?.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
