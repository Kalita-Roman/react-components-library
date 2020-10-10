import React from 'react';

import Button from '..';

export default {
  title: 'DMI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <Button />;