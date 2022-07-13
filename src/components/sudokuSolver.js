const animationDelay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

const findNextEmptyCell = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 0) {
        return { row: i, column: j }
      }
    }
  }

  return false
}

const isValid = (grid, guess, row, column) => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[row][i] === guess || grid[i][column] === guess) {
      return false
    }
  }

  let gridRowStart = Math.floor(row / 3) * 3
  let gridColStart = Math.floor(column / 3) * 3

  for (let i = gridRowStart; i < gridRowStart + 3; i++) {
    for (let j = gridColStart; j < gridColStart + 3; j++) {
      if (grid[i][j] === guess) {
        return false
      }
    }
  }

  return true
}

const solveSudoku = async (grid, setGrid, setDisabled) => {
  const { row, column } = findNextEmptyCell(grid)
  if (row === undefined && column === undefined) {
    setDisabled(false)
    return true
  }

  for (let guess = 1; guess <= 9; guess++) {
    if (isValid(grid, guess, row, column)) {
      grid[row][column] = guess
      await animationDelay(10)
      setGrid([...grid])

      if (await solveSudoku(grid, setGrid, setDisabled)) {
        return true
      }
    }

    grid[row][column] = 0
    await animationDelay(10)
    setGrid([...grid])
  }

  return false
}

export { solveSudoku }
