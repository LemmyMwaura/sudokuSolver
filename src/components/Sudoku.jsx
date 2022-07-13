import { useEffect, useState } from "react"
import { solveSudoku } from "./sudokuSolver"

const puzzle = [
  [3, 9, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 0, 0, 5],
  [0, 0, 0, 7, 1, 0, 0, 8, 0],
  [0, 5, 0, 0, 6, 8, 0, 0, 0],
  [2, 0, 6, 0, 0, 3, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 4],
  [5, 0, 0, 0, 0, 0, 0, 0, 0],
  [6, 7, 0, 1, 0, 5, 0, 4, 0],
  [1, 0, 9, 0, 0, 0, 2, 0, 0],
]

const Sudoku = () => {
  const [grid, setGrid] = useState(puzzle)
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]


  return (
    <div className="sudoku-grid">
      <h4 className="title">sudoku visualiser</h4>
      <div className="items">
        <div className="actions">
          <button
            className="btn-solve-grid"
            onClick={() => solveSudoku(grid, setGrid)}
          >
            Solve
          </button>
        </div>

        <table>
          <tbody>
            {array.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {array.map((col, colIndex) => {
                  return (
                    <td key={colIndex}>
                      <input
                        type="text"
                        className="cell-input"
                        value={grid[row][col] !== 0 ? grid[row][col] : ''}
                        disabled={puzzle[row][col] !== 0}
                        readOnly
                      />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sudoku
