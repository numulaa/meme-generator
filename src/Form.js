import React, { useState, useEffect } from "react";

export default function Form() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);
  useEffect(() => {
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((res) => res.json())
    //   .then((data) => setAllMemeImages(data.data.memes));
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNum].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main className="form-section">
      <div className="form">
        <h2>How to Play?</h2>
        <ul>
          <li>Generate a new picture by clicking the purple button</li>
          <li>Type out anything you want in the input section</li>
          <li>The text will be displayed on the image</li>
        </ul>
        <input
          type="text"
          placeholder="Top text"
          className="form-inputs"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-inputs"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />

        <button className="form-button" onClick={getMemeImg}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="meme-text top-text">{meme.topText}</h2>
        <h2 className="meme-text bottom-text">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
