import React, { ComponentProps } from 'react';
import cn from 'classnames';
import style from './style.module.scss';

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode;
  rounded?: boolean;
}

const Button = ({ children, rounded, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(style.button, {
        [style.round]: rounded,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
