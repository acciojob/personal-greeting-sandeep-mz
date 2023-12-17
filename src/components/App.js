
import React, {useState} from "react";
import './../styles/App.css';
const App = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value); 
  };
  return (
    <div>
      <label>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      {name && ( <p>Hello {name}!</p> )}
    </div>
  )
}
export default App