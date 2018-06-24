import React from 'react';
import Cell from '../Cell';

const Row = (props) => {
  return (
    <div className="row">
      {props.data.map((cell, i) => <Cell key={`cell-${props.row}-${i}`} data={cell} />)}
    </div>
  )
}

export default Row;
