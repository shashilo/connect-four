import type { Meta, StoryObj } from '@storybook/react';
 
import { GameBoard } from './GameBoard';
 
const meta: Meta<typeof GameBoard> = {
  title: 'Atoms/GameBoard',
  component: GameBoard,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof GameBoard>;
 
const board = [
  [
    0,
    0,
    0,
    0,
    0,
    2,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    1,
  ],
  [
    0,
    0,
    0,
    2,
    2,
    2,
  ],
  [
    0,
    0,
    0,
    1,
    1,
    1,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    2,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    2,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    1,
  ],
];
export const Default: Story = {
  args: {},
};