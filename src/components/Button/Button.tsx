// src/components/Button.tsx
import React from 'react';
import { Button as ShadcnButton } from '@shadcn/ui';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  return (
    <ShadcnButton onClick={onClick} disabled={disabled}>
      {label}
    </ShadcnButton>
  );
};

export default Button;