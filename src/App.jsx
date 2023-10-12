// DO NOT DELETE

import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/pug/n02110958_16337.jpg")

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogUrl(data.message));
  }

  return [
    <header>お試しのアプリ</header>,
    <p>ワンちゃんの画像で癒やされてね</p>,
    <img className="dogImg" src={dogUrl} />,
    <button onClick={handleClick}>更新</button>
  ]
}
