import React from 'react';

const Button = props => {
  console.log(props)
  const content = props.isGameStarted ? 'Reset' : 'Start';

  return (
    <div className="button">
      <button
        type="button"
        onClick={props.handleButtonClick}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
