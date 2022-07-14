import { useState } from "react"
import { solveSudoku } from "./sudokuSolver"
import image from "../assets/images/sudoku.png"

const Sudoku = () => {
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

  const [grid, setGrid] = useState(puzzle)
  const [disabled, setDisabled] = useState(false)
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  const startSolve = () => {
    setDisabled(true)
    solveSudoku(grid, setGrid, setDisabled)
  }

  return (
    <div className="sudoku-grid">
      <div className="title">
        <img className="sudoku-title" src={image} alt="sudoku-title-image" />
      </div>
      <div className="left-wrapper">
        <div className="left">
          <h4>Sudoku Visualizer</h4>
          <h5>HOW IT WORKS</h5>
          <div className="info">
            <div className="desc">
              Using a <span>Backtracking algorithm</span> the sudoku is solved
              by one by one assigning numbers to empty cells. Before assigning,
              it check whether it is safe <span>(to assign)</span>. i.e that the
              same number is not present in the current row, current column and
              current 3X3 subgrid.
            </div>
            <div className="desc">
              After checking for safety, assign the number, and
              <span> recursively</span> check whether this assignment leads to a solution. If the
              assignment doesn’t lead to a solution, then try the next number
              for the current empty cell. And if none of the numbers
              <span> (1 to 9) </span>
              leads to a solution, <span>return false </span> and print no
              solution exists.
            </div>
          </div>
          <div className="btns">
            <button
              className="btn btn-solve"
              onClick={() => startSolve()}
              disabled={disabled}
            >
              SOLVE PUZZLE
            </button>
            <button
              className="btn btn-restart"
              onClick={() => setGrid(puzzle)}
              disabled={disabled}
            >
              CLEAR GRID
            </button>
          </div>
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
                        className={`cell-input ${
                          puzzle[row][col] !== 0 && "original-cell"
                        }`}
                        value={grid[row][col] !== 0 ? grid[row][col] : ""}
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
      <div className="my-links">
        <span>By</span>
        <a href="https://github.com/LemmyMwaura" target="_blank">Lemmy Mwaura</a>
      </div>
    </div>
  )
}

export default Sudoku
