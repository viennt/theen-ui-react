import React from 'react';

import Button from './TButton';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    componentSource: {
      url: 'https://raw.githubusercontent.com/viennt/theen-ui-react/master/src/Components/Button.jsx',
      language: 'javascript',
    },
  },
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          'subtle',
          'link',
        ],
      },
    },
    spacing: {
      control: { type: 'radio', options: ['compact', 'default', 'large'] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
