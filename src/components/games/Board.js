import React, { Component } from 'react';
import './Map.css';
import battleship from 'battleship';

const W = 10;
const H = 10;

class Map extends Component {
  render() {
    let grid = [];
    for (let y = 0; y < H; ++y) {
      grid[y] = [];
      for (let x = 0; x < W; ++x) {
        grid[y][x] = '';
      }
    }
    console.log(battleship);

    return (
      <div className="Map">
        {grid.map((row, rowI) => {
          let divRow = row.map((col, colI)=> {
            return <span key={colI} className={rowI + ',' + colI}>
              {colI + ' ' + rowI}
            </span>;
          });
          return <div key={rowI} className={'row ' + rowI}>
            {divRow}
          </div>;
        })}
      </div>
    );
  }
}

export default Map;
