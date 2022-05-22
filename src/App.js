import './App.css';
import React from 'react';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Restaurant from './components/Restaurant';
import userInfo from "./components/data/navbar.json"
import offer from "./components/data/offer.json"
import Restaurants from "./components/data/restaurent.json"

const filters = 
  {
    1: "Cost High to Lost",
    2: "Cost Lost to High",
    3: "Ratings",
    4: "Delive",
    5: "Relevance"
  };


function App() {
  const [filteredBy,setFilterdBy]=React.useState("");
  const [data,setData]=React.useState(Restaurants);

  const updateFilter=(newFilter)=>{
    switch(newFilter){
      case "1": {
        setFilterdBy("1");
        let newSortedValue=data.sort((a,b)=>b["cost-for-two"]-a["cost-for-two"]);
        setData(newSortedValue);
        break;
      }

      case "2":{
        setFilterdBy("2");
        let newSortedValue=data.sort((a,b)=>a["cost-for-two"]-b["cost-for-two"]);
        setData(newSortedValue);
        break;
      }

      case "3":{
        setFilterdBy("3");
        let newSortedValue=data.sort((a,b)=>a["cost-for-two"]-b["cost-for-two"]);
        setData(newSortedValue);
        break;
      }

      case "4":{
        setFilterdBy("4");
        let newSortedValue=data.sort((a,b)=>a["rating"]-b["rating"]);
        setData(newSortedValue);
        break;
      }

      case "5":{
        setFilterdBy("5");
        let newSortedValue=data.sort((a,b)=>a["rating"]-b["rating"]);
        setData(newSortedValue);
        break;
      }




     }
  }

  return (
    <div >
      <Navbar {...userInfo.location} />
      <Offer offer={offer} />
      <section className="near-you">
        <Filter filters={filters} currentFilteredBy={filteredBy} updateFilter={updateFilter} />
        <Restaurant restaurant={data}  />
      </section>
    </div>
  );
}

export default App;
