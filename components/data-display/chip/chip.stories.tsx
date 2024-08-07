import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './index';

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    text: 'Much Wow!'
  }
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: 'star'
  }
};
