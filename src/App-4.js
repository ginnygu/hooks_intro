import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "./components/Spinner/Spinner";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [singleUser, setSingleUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [searchTodo, setSearchTodo] = useState("");
  const [showTodo, setShowTodo] = useState(null);
  const [isSearching, setisSearching] = useState(false);

  async function fetchSingleUser(number) {
    setIsLoading(true);
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${number}`
      );

      setIsLoading(false);
      setSingleUser(result.data);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  async function fetchAllUsers() {
    try {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      //console.log(result);
      setUser(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSearchTodo() {
    try {
      let result = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${searchTodo}`
      );
      console.log(result);
      setShowTodo(result.data);
      setisSearching(false);
      setSearchTodo("");
    } catch (e) {
      console.log(e);
      setisSearching(false);
    }
  }

  function fetchTodo() {
    if (!searchTodo) {
      return;
    }

    setisSearching(true);
  }

  useEffect(() => {
    if (!searchTodo) {
      return;
    }
    handleSearchTodo();
  }, [isSearching]);

  if (!user) {
    return <Spinner />;
  }
  return (
    <div className="App">
      <p>Single User</p>
      <input type="text" onChange={(e) => setSingleUser(e.target.value)} />
      <button onClick={() => fetchSingleUser(singleUser)}>Search User</button>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <div>user full name: {singleUser.name}</div>
      )}
      <hr />
      <p>Users</p>
      <ul>
        {user.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
      <hr />
      <p>Todos</p>
      <input
        value={searchTodo}
        onChange={(e) => setSearchTodo(e.target.value)}
      />
      <button onClick={fetchTodo}>Search Todo</button>

      {isSearching ? <p>Fetching....</p> : <p>{showTodo?.title}</p>}
    </div>
  );
}

export default App;
