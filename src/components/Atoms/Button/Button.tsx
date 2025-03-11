import React from 'react';

import './Button.css';

export interface ButtonProps {
  /** Button variant type */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /** Button text contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['btn', `btn--${variant}`].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
