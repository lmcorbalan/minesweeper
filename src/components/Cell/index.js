import React from 'react';

const Cell = (props) => {
  const row = props.data.y;
  const col = props.data.x;

  const classes = [
    'cell',
    props.data.isRevealed ? 'cell--revealed' : false
  ].map(c => c);

  let content = '';

  if (!props.data.isRevealed) {
    if (props.data.isFlaged) {
      content = <i className="fas fa-flag" data-row={row} data-col={col} />
    }
  } else {
    if (props.data.isMine) {
      content = <i className="fas fa-bomb" data-row={row} data-col={col} />
    } else {
      const text = props.data.minesArround ? props.data.minesArround : '';
      content = <span data-row={row} data-col={col}>{text}</span>
    }
  }

  return (
    <div
      className={classes.join(' ')}
      onClick={props.handleCellClick}
      onContextMenu={props.handleContextMenu}
      data-row={row}
      data-col={col}
    >
      {content}
    </div>
  );
}

export default Cell;
