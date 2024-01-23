import React from 'react';
import { ButtonProps } from '../../Types';

const Button:React.FC<ButtonProps> = React.memo(({name, ButtonClick}) => {

  return (
    <div>
      <button onClick={ButtonClick} >{name}</button>    </div>
  );
});

export default Button;
