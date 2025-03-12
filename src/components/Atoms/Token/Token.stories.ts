import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Token } from './Token';

const meta = {
  title: 'Atoms/Token',
  component: Token,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Token>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};
