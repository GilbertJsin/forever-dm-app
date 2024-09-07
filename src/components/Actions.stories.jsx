import React from 'react';
import Actions from './Actions'; // Adjust the import path if necessary

const meta = {
    title: 'Components/Actions',
    component: Actions,
    parameters: {
      layout: 'centered',
    },
  };
  
  export default meta;

// This creates the default story
export const Default = () => <Actions />;

// You can add more stories to showcase different states or variations
export const WithCustomTitle = () => (
  <div style={{ width: '300px' }}>
    <h1>Custom Title</h1>
    <Actions />
  </div>
);

export const WithDifferentBackground = () => (
  <div style={{ background: '#f0f0f0', padding: '20px', width: '300px' }}>
    <Actions />
  </div>
);

// If you want to showcase how it looks with different styles, you can create a story like this:
export const WithCustomStyles = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
    <Actions />
  </div>
);

