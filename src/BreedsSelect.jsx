// @ts-check

export const BreedsSelect = ({breeds}) => {
  const options = breeds.map((value) => <option key={value}>{value}</option>)
  return <select>{options}</select>
}

export default BreedsSelect
