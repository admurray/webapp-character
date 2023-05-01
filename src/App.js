import { useState } from 'react';
import './App.css';
import CharacterAttr from './components/CharacterAttr.js'
import Characters from './components/Charaters';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
     <div className="App">
        <section className="App-section">
          <Characters />   
        </section>
      </div>
    </div>
   
  );
}

export default App;
