import React, {useState} from "react";
import Products from "./products";


function App() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const YOUR_APP_ID = "a81a9fb4";
  const YOUR_APP_KEY = "d99d74b541596ad23679b9ed07d517f4";

  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
    response => response.json()
  ).then(
    data => setData(data.hits)
  )
  }
  return (
    <div>
      <center>
      <h2 className="title"><span className="sub-title">F<span className="sub-title-1">oo</span>d</span> Recipes Junction...</h2>
      <form onSubmit={submitHandler}>
        <input className="search-style"
         type="text" id="search" 
         name="search" 
         placeholder="delicious Food is here..."
         value={search}
         onChange={(e) => setSearch(e.target.value) }
         />
          <br/>
        <input className="btn btn-primary mt-2 mb-3" type="submit" value="Search"/>
      </form>
      {data.length>=1 ? <Products data={data}  />:null}
      </center>
      
    </div>
  );
}

export default App;
