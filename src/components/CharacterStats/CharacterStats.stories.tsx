import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import StatBlock, { StatBlockProps } from "./CharacterStats";
import "./CharacterStats.css"; // Import CSS for styling

export default {
  title: "CharacterStats/StatBlock",
  component: StatBlock,
} as Meta;

const Template: StoryFn<StatBlockProps> = (args) => <StatBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Trovan",
  race: "Mountain Dwarf",
  classLevel: "Paladin 13",
  stats: {
    intelligence: { value: 11, modifier: 0 },
    wisdom: { value: 10, modifier: 0 },
    charisma: { value: 14, modifier: 2 },
  },
  savingThrows: {
    strength: 5,
    intelligence: 2,
    dexterity: 3,
    wisdom: 7,
    constitution: 4,
    charisma: 9,
  },
  senses: {
    passivePerception: 10,
    passiveInvestigation: 10,
  },
  abilities: [
    "Against Poison (Dwarven Resilience)",
    "2 on saves (Aura of Protection)",
  ],
};
