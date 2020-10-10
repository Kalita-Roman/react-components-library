import React from 'react';

import HelloWorld from '..';

export default {
  title: 'DMI/HelloWorld',
  component: HelloWorld,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <HelloWorld />;