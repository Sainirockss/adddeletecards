import React, { useState } from "react";
import Tours from "./Tours";
import data from './data';
const App = () => {
  const [tours,setTours] = useState(data);
  
  function removetour(id){
    const newtours = tours.filter(tourss=>tourss.id!==id);
    setTours(newtours);
   }

   function refreshhandler(){
    setTours(data);
   }
   
   
   if(tours.length===0){
    return(
      <div>
        <div className="refresh">
          <h2>no tours left</h2>
          <button onClick={refreshhandler} className="btn-white">
            refresh
          </button>
        </div>
      </div>
    )
   }




  return ( <div>

    
    <Tours tours={tours} removetour={removetour}></Tours>
  </div>
  )
};

export default App;
