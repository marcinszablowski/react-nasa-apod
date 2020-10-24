import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {

    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=" + apiKey)
      const data = await res.json();
      setPhotoData(data);
    }
  }, [])

  if (!photoData) return <div />;
  console.log(photoData);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="photo">
          <img src={photoData.url} alt={photoData.title} />
        </div>

        <div className="text">
          <h1>{photoData.title}</h1>
          <p>{photoData.date}</p>
          <p className="copyright">{photoData.copyright}</p>
          <p>{photoData.explanation}</p>
        </div>
      </div>
    </>
  )
}