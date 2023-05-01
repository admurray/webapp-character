import { useEffect, useState } from 'react';
import '../App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from '../consts.js';



function CharacterAttr(props) {
  const activeCharacter = props.activeCharacter;  
  
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  
  useEffect(() => {
    let activeCharacterAttrs = null
    if (activeCharacter) {
      activeCharacterAttrs = CLASS_LIST[activeCharacter]
      setStrength(activeCharacterAttrs['Strength'])
      setDexterity(activeCharacterAttrs['Dexterity'])
      setConstitution(activeCharacterAttrs['Constitution'])
      setIntelligence(activeCharacterAttrs['Intelligence'])
      setWisdom(activeCharacterAttrs['Wisdom'])
      setCharisma(activeCharacterAttrs['Charisma'])
    }
  }, [activeCharacter])


  return (
      <div className="App-section">
        <div className="">
          Strength: &nbsp;&nbsp;
          {strength}&nbsp;&nbsp;
          <button onClick={() => setStrength(strength+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setStrength(strength-1)}>-</button>&nbsp;&nbsp;
        </div>

        <div>
          Dexterity:&nbsp;&nbsp;
          {dexterity}&nbsp;&nbsp;
          <button onClick={() => setDexterity(dexterity+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setDexterity(dexterity-1)}>-</button>&nbsp;&nbsp;
        </div>
        <div>
          Constitution:&nbsp;&nbsp;
          {constitution}&nbsp;&nbsp;
          <button onClick={() => setConstitution(constitution+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setConstitution(constitution-1)}>-</button>&nbsp;&nbsp;
        </div>
        <div>
          Intelligence:&nbsp;&nbsp;
          {intelligence}&nbsp;&nbsp;
          <button onClick={() => setIntelligence(intelligence+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setIntelligence(intelligence-1)}>-</button>&nbsp;&nbsp;
        </div>
        <div>
          Wisdom:&nbsp;&nbsp;
          {wisdom}&nbsp;&nbsp;
          <button onClick={() => setWisdom(wisdom+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setWisdom(wisdom-1)}>-</button>&nbsp;&nbsp;
        </div>
        <div>
          Charisma:&nbsp;&nbsp;
          {charisma}&nbsp;&nbsp;
          <button onClick={() => setCharisma(charisma+1)}>+</button>&nbsp;&nbsp;
          <button onClick={() => setCharisma(charisma-1)}>-</button>&nbsp;&nbsp;
        </div>
        </div>
  );
}

export default CharacterAttr;
