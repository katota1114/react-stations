// @ts-check

export const BreedsSelect = (props) => {
  const options = Object.keys(props.breeds).map(item =>
    <option key={item} value={item}>{item}</option>
  );

  return <select value={props.selectedBreed} onChange={props.handleChange}>{options}</select>
}

export default BreedsSelect
