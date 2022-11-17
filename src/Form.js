import React, { useState } from "react";
import memesData from "./memesData";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImg() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form-inputs" />
        <input type="text" placeholder="Bottom text" className="form-inputs" />

        <button className="form-button" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={meme.randomImage} alt="meme" className="meme-image" />
    </main>
  );
}
