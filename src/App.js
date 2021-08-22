import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component.jsx';
import { SearchBox } from './components/search-box/search-box-component.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handelChange = (e) => this.setState({searchField: e.target.value})

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'> 
        <h1 className='App-title'>Monsters Rolodex</h1>
        <SearchBox type='search' placeholder='search monsters' handleChange={this.handelChange}></SearchBox>  
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
