import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import NewsPage from "./NewsPage";
import ResponsiveAppBar from "./Navbar";


const  App =() => {
  return (
    <div className="App">
       <ResponsiveAppBar/>
      <NewsPage/>
     

   
     
    </div>
  );
}

export default App;
