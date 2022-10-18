const SearchBox = ({ onChangeH, className, placeholder }) => {
  return (
    <input
      type="search"
      onChange={onChangeH}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default SearchBox;
