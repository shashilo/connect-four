import type { Meta, StoryObj } from '@storybook/react';
 
import { GameWrapper } from './GameWrapper';
 
const meta: Meta<typeof GameWrapper> = {
  title: 'Pages/GameWrapper',
  component: GameWrapper,
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof GameWrapper>;
 
export const Default: Story = {
  args: {
  },
};