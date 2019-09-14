import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.scss";
import TourList from "./Components/TourList";

//function App() {
//  return <Navbar />;
//}

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

export default App;
