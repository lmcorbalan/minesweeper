import React from 'react';
import Row from '../Row'

const Board = (props) => {
  return (
    <div className="board">
      {props.data.map((row, i) => (
        <Row
          key={`row-${i}`}
          row={i}
          data={row}
          handleCellClick={props.handleCellClick}
        />
      ))}
    </div>
  )
}

export default Board;
