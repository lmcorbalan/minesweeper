import React from 'react';

const Cell = (props) => {
  const classes = [
    'cell',
    props.data.isRevealed ? 'cell--revealed' : false
  ].map(c => c);

  let content = '';

  // fixme - move inside condition
  const text = props.data.minesArround ? props.data.minesArround : '';
  content = <span>{text}</span>

  if (!props.data.isRevealed) {
    if (props.data.isMine) {
      content = <i className="fas fa-bomb" />
    }
    if (props.data.isFlaged) {
      content = <i className="fas fa-flag" />
    }
  }

  return (
    <div className={classes.join(' ')}>
      {content}
    </div>
  );
}

export default Cell;
