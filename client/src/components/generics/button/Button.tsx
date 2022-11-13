import { useState } from 'react';
import s from './Button.module.css';

interface ButtonProps {
  children: string,
  clickHandler?: () => void
}

function Button({children, clickHandler}: ButtonProps) {
  return (
    <button className={s.button} onClick={clickHandler}>
      <span>{children}</span>
    </button>
  );
}

export default Button;