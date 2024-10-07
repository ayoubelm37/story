declare module '@shadcn/ui' {
  import React from 'react';

  export interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode; // Include children prop
  }

  export const Button: React.FC<ButtonProps>;
}
