import type { Meta, StoryObj } from '@storybook/react';

import { Player } from './Player';

const meta = {
  title: 'Atoms/Player',
  component: Player,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

