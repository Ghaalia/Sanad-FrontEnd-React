import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DonatedPhoto from "../components/donation/DonatedPhoto";
import { useQuery } from "@tanstack/react-query";
import { getImages } from "../api/donations";

const ImageGallery = () => {
  const { userId } = useParams();

  const { data } = useQuery({
    queryKey: ["images"],
    queryFn: () => getImages(userId),
  });
  console.log(data);
  const furnatureImages = data ? data[0]?.imageData : [];
  const devicesImages = data ? data[1]?.imageData : [];
  const electronicsImages = data ? data[2]?.imageData : [];
  const clothesImages = data ? data[3]?.imageData : [];

  return (
    <div className="min-h-screen w-full mt-[80px] flex flex-col bg-NavyMain mx-120 text-white justify-start items-center ">
      <div className="pt-[40px] text-[28px]">Choose Donated Items</div>
      <div className="flex flex-col gap-6 justify-center items-center border-white border-[1px]">
        <div className="pt-[40px] text-[18px]">{data[0]?.category}</div>
        <div className="flex flex-wrap gap-4">
          {furnatureImages.map((image, index) => {
            return <DonatedPhoto key={index} image={image} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="pt-[40px] text-[18px]">{data[1]?.category}</div>
        <div className="flex flex-wrap gap-4">
          {devicesImages.map((image, index) => {
            return <DonatedPhoto key={index} image={image} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="pt-[40px] text-[18px]">{data[2]?.category}</div>
        <div className="flex flex-wrap gap-4">
          {electronicsImages.map((image, index) => {
            return <DonatedPhoto key={index} image={image} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="pt-[40px] text-[18px]">{data[3]?.category}</div>
        <div className="flex flex-wrap gap-4">
          {clothesImages.map((image, index) => {
            return <DonatedPhoto key={index} image={image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
