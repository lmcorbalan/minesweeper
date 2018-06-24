import React from 'react';
import Row from '../Row'

const Board = (props) => {
  return (
    <div className="board">
      {props.data.map((row, i) => <Row key={`row-${i}`} row={i} data={row} />)}
    </div>
  )
}

export default Board;
