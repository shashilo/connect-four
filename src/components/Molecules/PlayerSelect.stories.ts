import type { Meta, StoryObj } from '@storybook/react';
 
import { PlayerSelect } from './PlayerSelect';
 
const meta: Meta<typeof PlayerSelect> = {
  title: 'Molecules/PlayerSelect',
  component: PlayerSelect,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof PlayerSelect>;
 
export const Default: Story = {
  args: {
  },
};