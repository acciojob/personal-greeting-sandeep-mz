
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  function handleNameChange(event){
    setName("Hello " + event.target.value +"!");
  };

  return (
    <div>
        <input onChange={handleNameChange} />
      <p>{name}</p>
    </div>
  );
};

export default App;
