import type { Meta, StoryObj } from '@storybook/react';
 
import { GameBoard } from './GameBoard';
 
const meta: Meta<typeof GameBoard> = {
  title: 'Atoms/GameBoard',
  component: GameBoard,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof GameBoard>;
 
export const Default: Story = {
  args: {
  },
};