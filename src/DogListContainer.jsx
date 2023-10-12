// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState('');

  function handleChange(event) {
    setSelectedBreed(event.target.value);
  }

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => setBreeds(data.message));
  },[]);

  return <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} handleChange={handleChange} />
}

export default DogListContainer
