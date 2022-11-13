import { useState } from 'react';
import s from './Button.module.css';

interface ButtonProps {
  children: string
}

function Button({children}: ButtonProps) {
  const [clicked, setPointerDown] = useState(false);

  const clickHandler = () => {
    setPointerDown(true);
    console.log(12);
  }

  return (
    <button className={s.button} onClick={clickHandler}>
      <span>{children}</span>
    </button>
  );
}

export default Button;