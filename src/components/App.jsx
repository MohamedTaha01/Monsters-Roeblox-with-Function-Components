import React, { Component } from "react";
import CardList from "./card-list";
import SearchBox from "./searchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchM: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  onChange = (event) => {
    this.setState({ searchM: event.target.value.toLocaleLowerCase() });
  };
  render() {
    const { monsters, searchM } = this.state;
    const fMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchM);
    });

    return (
      <div>
      <h1 className="title" >Monsters Reblox</h1>
        <SearchBox onChangeH={this.onChange} className="search-box" placeholder="search monsters" />
        <CardList monsters={fMonsters} />
      </div>
    );
  }
}
export default App;
