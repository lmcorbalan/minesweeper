import React from 'react';

const Cell = (props) => {
  const classes = [
    'cell',
    props.data.isRevealed ? 'cell--revealed' : false
  ].map(c => c);

  let icon = '';
  if (!props.data.isRevealed) {
    if (props.data.isMine) {
      icon = <i className="fas fa-bomb" />
    }
    if (props.data.isFlaged) {
      icon = <i className="fas fa-flag" />
    }
  }

  return (
    <div className={classes.join(' ')}>
      {icon}
    </div>
  );
}

export default Cell;
