// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, handleChange }) => {
  const options = Object.keys(breeds).map(item =>
    <option key={item} value={item}>{item}</option>
  );

  return <select value={selectedBreed} onChange={handleChange}>{options}</select>
}

export default BreedsSelect
