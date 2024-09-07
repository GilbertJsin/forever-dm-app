import React from 'react';
import './CharacterSheet.css'; 

const CharacterSheet = () => {
  return (
    <div className="character-sheet">
      <header>
        <h1>Character Name</h1>
        <div className="character-basics">
          <input type="text" placeholder="Class" />
          <input type="text" placeholder="Level" />
          <input type="text" placeholder="Race" />
          <input type="text" placeholder="Background" />
        </div>
      </header>
      
      <div className="main-stats">
        <div className="stat-section">
          <h3>Ability Scores</h3>
          {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map(ability => (
            <div key={ability} className="stat-item">
              <label>{ability}</label>
              <input type="number" placeholder="10" />
              <span className="modifier">+0</span>
            </div>
          ))}
        </div>
        
        <div className="stat-section">
          <h3>Saving Throws</h3>
          {['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'].map(save => (
            <div key={save} className="stat-item">
              <input type="checkbox" />
              <span>{save}</span>
              <span className="modifier">+0</span>
            </div>
          ))}
        </div>
        
        <div className="stat-section">
          <h3>Skills</h3>
          {['Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Persuasion', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'].map(skill => (
            <div key={skill} className="stat-item">
              <input type="checkbox" />
              <span>{skill}</span>
              <span className="modifier">+0</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="combat-stats">
        <div className="combat-stat">
          <label>Armor Class</label>
          <input type="number" placeholder="10" />
        </div>
        <div className="combat-stat">
          <label>Initiative</label>
          <input type="number" placeholder="+0" />
        </div>
        <div className="combat-stat">
          <label>Speed</label>
          <input type="text" placeholder="30 ft" />
        </div>
        <div className="combat-stat">
          <label>Hit Points</label>
          <input type="number" placeholder="10" />
        </div>
      </div>
      
      <div className="text-section">
        <h3>Features & Traits</h3>
        <textarea placeholder="List your features and traits here..."></textarea>
      </div>
      
      <div className="text-section">
        <h3>Equipment</h3>
        <textarea placeholder="List your equipment here..."></textarea>
      </div>
    </div>
  );
};

export default CharacterSheet;