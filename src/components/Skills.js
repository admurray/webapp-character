import { useState } from 'react';
import '../App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';
import CharacterAttr from './CharacterAttr';


function Skills() {
    const [skillValue, setSkillValue] = useState(null);
    let x = (someValue) => {

    }

  return (
    <div className="App-section">
        <ul>
        {
            SKILL_LIST.map((item, i) => (
            <p key={i} onClick={() => x(item["attributeModifier"])}>{item["name"]} : </p>
            ))}    
        </ul>   
    </div>
  );
}

export default Skills;
