import logo from './logo.svg';
import './App.css';
import react, {useState, Component} from 'react';

function App() {

  const [participants, setParticipants] = useState(0)

  function onChange(name, value){
    initialState = {
      participants : undefined,
      type : undefined,
    }
    switch(name) {
      case'partic' : 
        
      case '' :
        return 0;
    }
  }



  return (
    <div className="App">
      <h2>Number of People:</h2>
      <label>1</label>
      <input name="partic" value={1} type="checkbox" defaultChecked={false} />
      <label>2</label>
      <input name="partic" value={2} type="checkbox" defaultChecked={false} />
      <label>3</label>
      <input name="partic" value={3} type="checkbox" defaultChecked={false} />
      <label>4</label>
      <input name="partic" value={4} type="checkbox" defaultChecked={false} />
      <label>5</label>
      <input name="partic" value={5} type="checkbox" defaultChecked={false} />
      <label>8</label>
      <input name="partic" value={8} type="checkbox" defaultChecked={false} />
    </div>
  );
}

export default App;
