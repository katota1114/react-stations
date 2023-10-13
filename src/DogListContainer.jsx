// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
import DogImage from './DogImage'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({});
  const [selectedBreed, setSelectedBreed] = useState('');
  const [selectedBreedDogs, setSelectedBreedDogs] = useState([]);

  function handleChange(event) {
    setSelectedBreed(event.target.value)
  }

  const limit = 12

  function handleFetchButton() {
    fetch(
      'https://dog.ceo/api/breed/' + selectedBreed + '/images/random/' + limit,
    ).then(response => response.json())
    .then(data => setSelectedBreedDogs(data.message))
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(data.message))
  }, [])

  return [
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      handleChange={handleChange}
    />,
    <button onClick={handleFetchButton}>表示</button>,
    selectedBreedDogs.map(imgUrl => <DogImage imageUrl={imgUrl}/>)
  ]
}

export default DogListContainer
