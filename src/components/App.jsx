import React, { useEffect, useState } from "react";
import CardList from "./card-list";
import SearchBox from "./searchBox";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchM, setSearchM] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users) );
  }, []);
  const onChange = (event) => {
    setSearchM(event.target.value.toLocaleLowerCase());
  };
  const fMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchM);
  });
  return (
    <div>
      <h1 className="title">Monsters Reblox</h1>
      <SearchBox
        onChangeH={onChange}
        className="search-box"
        placeholder="search monsters"
      />
      <CardList monsters={fMonsters} />
    </div>
  );
};

export default App;
