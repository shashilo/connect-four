import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button Primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button Secondary',
    variant: 'secondary',
  },
};

export const Teirtary: Story = {
  args: {
    label: 'Button Tertiary',
    variant: 'tertiary'
  },
};
