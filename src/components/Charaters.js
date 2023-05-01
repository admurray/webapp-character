import { useState } from 'react';
import '../App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';
import CharacterAttr from './CharacterAttr';
import Skills from './Skills'


function Characters() {
  const [activeCharacter, setActiveCharater] = useState(null);
  
  return (
    <div className="App-section">
        <ul>
      {Object.keys(CLASS_LIST).map((key) => (
        <span>
            <button onClick={() => setActiveCharater(key)} key={key}>
                {key}
            </button>
        </span>
      ))}
    </ul>   
    <CharacterAttr activeCharacter={activeCharacter} />
    <section className="App-section">
            <Skills />   
          </section>
    </div>
  );
}

export default Characters;
