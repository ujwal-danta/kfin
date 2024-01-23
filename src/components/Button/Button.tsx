import React from 'react';
import { buttonProps } from '../../Types/Button.types';

const Button = React.memo(({name, buttonClick}:buttonProps) => {

  return (
    <div>
      <button 
      className='border-black border-2'
      onClick={buttonClick} 
      >{name}
      </button>
    </div>
  );
});

export default Button;
