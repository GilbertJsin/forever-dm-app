import React from "react";

export interface StatBlockProps {
  name: string;
  race: string;
  classLevel: string;
  stats: {
    [key: string]: {
      value: number;
      modifier: number;
    };
  };
  savingThrows: {
    [key: string]: number;
  };
  senses: {
    passivePerception: number;
    passiveInvestigation: number;
  };
  abilities: string[];
}

const StatBlock: React.FC<StatBlockProps> = ({
  name,
  race,
  classLevel,
  stats,
  savingThrows,
  senses,
  abilities,
}) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}
    >
      <header style={{ marginBottom: "16px" }}>
        <h2>{name}</h2>
        <p>
          {race} | {classLevel}
        </p>
      </header>
      <section style={{ marginBottom: "16px" }}>
        <h3>Abilities, Saves, Senses</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {Object.keys(stats).map((statKey) => (
            <div key={statKey} style={{ textAlign: "center" }}>
              <p style={{ fontWeight: "bold" }}>{statKey.toUpperCase()}</p>
              <p style={{ fontSize: "1.5em", margin: "8px 0" }}>
                +{stats[statKey].modifier}
              </p>
              <p>{stats[statKey].value}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ marginBottom: "16px" }}>
        <h3>Saving Throws</h3>
        {Object.keys(savingThrows).map((key) => (
          <div
            key={key}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span>{key.toUpperCase()}</span>
            <span>+{savingThrows[key]}</span>
          </div>
        ))}
        <div>
          {abilities.map((ability, index) => (
            <p key={index} style={{ marginBottom: "8px" }}>
              {ability}
            </p>
          ))}
        </div>
      </section>
      <section>
        <h3>Senses</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>PASSIVE PERCEPTION</span>
          <span>{senses.passivePerception}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>PASSIVE INVESTIGATION</span>
          <span>{senses.passiveInvestigation}</span>
        </div>
      </section>
    </div>
  );
};

export default StatBlock;
