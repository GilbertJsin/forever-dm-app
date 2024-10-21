import { action } from '@storybook/addon-actions';

export const parameters = {
  actions: {
    // Define handlers for common events using `action`
    onClick: action('clicked'),
    onChange: action('changed'),
    onSubmit: action('submitted'),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
