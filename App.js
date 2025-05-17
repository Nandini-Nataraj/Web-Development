import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import { Switch, Route } from 'react-router-dom';
import SearchView from './Components/SearchView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text");
      fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&type=video&key=YOUR_KEY`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSearchResults(data.items || []); // Ensure `items` is used and fallback to empty array if undefined
        })
        .catch(error => {
          console.error("Error fetching YouTube data:", error);
          setSearchResults([]); // Reset results on error
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/about' component={AboutUs} />

        <Route path='/SearchView'>
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
