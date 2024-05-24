/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

import { features, propertyImages } from "../data/constants";
import LocationCard from "./LocationCard";
import DownloadApp from "./DownloadApp";
import propertiesData from "../data/properties.json";

const Home: React.FC = () => {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    const updatedProperties = propertiesData.map((property, index) => ({
      ...property,
      imageUrl: propertyImages[index],
    }));
    setProperties(updatedProperties);
  }, []);

  return (
    <main className="py-20">
      <section
        className="hero flex flex-col-reverse md:flex-row items-center w-full justify-between px-6 md:px-20 py-4 bg-[#f7f8fd] bg-cover"
        style={{ backgroundImage: `url('../assets/bg-image.jpg')` }}
      >
        <h1 className="font-bold text-center md:text-left text-xl mt-2 md:mt-0 md:text-[40px] md:w-[500px] leading-snug text-[#2a3042]">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-[#FFBB00]">₹199/-!</span>
        </h1>
        <div className="hero-image md:block">
          <img
            src="../assets/co-working-space.png"
            alt="Workspace Illustration"
            className="w-[388px] h-[388px] object-cover"
          />
        </div>
      </section>
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-[#263238] text-3xl md:text-4xl font-semibold">
          Why Choose us?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-8 gap-y-8 gap-x-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center justify-center
               gap-2 md:gap-4 bg-white md:bg-inherit shadow-md md:shadow-none rounded-md py-3 md:py-6 "
            >
              <img src={feature.image} alt={feature.label} className="" />
              <span className="text-sm md:text-lg font-medium">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-20 py-10">
        <h2 className="text-[#263238] text-3xl md:text-4xl font-semibold">
          Our Space Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4 w-full h-full">
          {properties &&
            properties?.map((property, index) => (
              <div key={index}>
                <LocationCard property={property} />
              </div>
            ))}
        </div>
      </section>
      <DownloadApp />
    </main>
  );
};

export default Home;
