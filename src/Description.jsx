// @ts-check

import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/pug/n02110958_16337.jpg")

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogUrl(data.message));
  }

  return [
    <p>ワンちゃんの画像で癒やされてね</p>,
    <DogImage imageUrl={dogUrl} />,
    <button onClick={handleClick}>更新</button>,
  ]
}

export default Description
