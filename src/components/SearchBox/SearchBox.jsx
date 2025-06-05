const SearchBox = ({ filterValue, handleFilter }) => {
  const handleChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div>
      <input value={filterValue} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
