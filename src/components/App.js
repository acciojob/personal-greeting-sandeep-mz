
import React, {useState} from "react";
import './../styles/App.css';
const App = () => {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <p>Enter your name:</p>
      <label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
      </label>
      {name && (
        <p>Hello {name}!</p>
      )}
    </div>
  )
}
export default App