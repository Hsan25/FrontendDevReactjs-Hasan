import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios";
import type { RestaurantDetail } from "../types";
import StarRating from "../components/StarRating";
import Button from "../components/ui/Button";
import Menus from "../components/Menus";
import Reviews from "../components/Reviews";

const DetailRestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<RestaurantDetail | null>(null);
  useEffect(() => {
    const fetchDetailRestaurant = async () => {
      try {
        const res = await axiosInstance.get(`/detail/${id}`);
        setData(res.data.restaurant);
      } catch (error) {
        console.log("error");
      }
    };
    fetchDetailRestaurant();
  }, [id]);
  return (
    <>
      <Button label="Back" onClick={() => navigate(-1)} />
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2 rounded-md">
            <img
              src={`https://restaurant-api.dicoding.dev/images/medium/${data?.pictureId}`}
              alt=""
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex gap-4 items-center">
              <div className="text-lg md:text-2xl">{data?.name}</div>
              <StarRating rating={data?.rating || 0} />
              <p className="text-xs">{data?.rating}</p>
            </div>
            <div className="text-gray-600 text-sm">{data?.city}</div>
            <div className="text-gray-600 text-sm">{data?.address}</div>

            <div className="border-2 shadow-lg p-2 flex gap-4 rounded-md">
              <div className="">Categories: </div>
              <div className="flex gap-2">
                {data?.categories.map((item, idx: number) => (
                  <div
                    key={idx}
                    className="border-2 shadow-sm  p-0.5 text-sm flex gap-4 rounded-md">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 shadow-lg p-2 rounded-md mt-5">
              <div className="text-lg">Description</div>
              <p className="text-sm text-gray-600/95">{data?.description}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-4">
          <Reviews reviews={data?.customerReviews} />
          <Menus menus={data?.menus} />
        </div>
      </div>
    </>
  );
};

export default DetailRestaurantPage;
