import React from 'react';

const Spells = () => {
  return (
    <div className="spells">
      <h2>Spells</h2>
      <div className="spell-level">
        <h3>1st Level</h3>
        <ul>
          <li>Shield of Faith</li>
          <li>Bless</li>
          <li>Bane</li>
          <li>Hunter's Mark</li>
          <li>Command</li>
          <li>Cure Wounds</li>
        </ul>
      </div>
      <div className="spell-level">
        <h3>2nd Level</h3>
        <ul>
          <li>Aid</li>
          <li>Hold Person</li>
          <li>Misty Step</li>
          <li>Find Steed</li>
          <li>Lesser Restoration</li>
        </ul>
      </div>
      <div className="spell-level">
        <h3>3rd Level</h3>
        <ul>
          <li>Blinding Smite</li>
          <li>Create Food and Water</li>
          <li>Spirit Shroud</li>
          <li>Revivify</li>
          <li>Crusader's Mantle</li>
        </ul>
      </div>
    </div>
  );
};

export default Spells;