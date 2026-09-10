const GRID_SIZE = 4;
    let board = [];
    let score = 0;

    const gridElement = document.getElementById('grid');
    // const scoreElement = document.getElementById('score');

    // Game Start Function()
    export function startGame() {
        board = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(0));
        score = 0;
        updateScore();
        addRandomTile();
        addRandomTile();
        renderBoard();
      }


      // Adds Random Tile
      function addRandomTile() {
        const emptyCells = [];
        for (let r = 0; r < GRID_SIZE; r++) {
          for (let c = 0; c < GRID_SIZE; c++) {
            if (board[r][c] === 0) emptyCells.push({ r, c });
          }
        }
  
        if (emptyCells.length > 0) {
          const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
          board[r][c] = Math.random() < 0.9 ? 2 : 4;
        }
      }

      
      // Renders Game Board [#]
      function renderBoard() {
        gridElement.innerHTML = '';
        for (let r = 0; r < GRID_SIZE; r++) {
          for (let c = 0; c < GRID_SIZE; c++) {
            const val = board[r][c];
            const cell = document.createElement('div');
            cell.className = 'cell';
            if (val > 0) {
              cell.textContent = val;
              cell.setAttribute('data-val', val);
            }
            gridElement.appendChild(cell);
          }
        }
      }

      function updateScore() {
        // scoreElement.textContent = score;
      }



      // Slides & Merges Tile to Next Open Position
      function slide(row) {
        // 1. Filter out zeros (slide left)
        let filtered = row.filter(val => val !== 0);
  
        // 2. Merge adjacent equals
        for (let i = 0; i < filtered.length - 1; i++) {
          if (filtered[i] === filtered[i + 1]) {
            filtered[i] *= 2;
            score += filtered[i];
            filtered[i + 1] = 0;
            i++; // Skip merged tile
          }
        }
  
        // 3. Re-filter zeros and pad end with zeros
        filtered = filtered.filter(val => val !== 0);
        while (filtered.length < GRID_SIZE) {
          filtered.push(0);
        }
  
        return filtered;
      }



      // Grid Transitions & Reversal Effect Based on utilities for managing four different directions
      function rotateLeft(mat) {
        return mat[0].map((_, colIdx) => mat.map(row => row[colIdx])).reverse();
      }

      function rotateRight(mat) {
        return mat.reverse()[0].map((_, colIdx) => mat.map(row => row[colIdx]));
      }

      function moveLeft() {
        return board.map(row => slide(row));
      }

      function moveRight() {
        return board.map(row => slide(row.slice().reverse()).reverse());
      }

      function moveUp() {
        let rotated = rotateLeft(board);
        rotated = rotated.map(row => slide(row));
        return rotateRight(rotated);
      }
  
      function moveDown() {
        let rotated = rotateRight(board);
        rotated = rotated.map(row => slide(row));
        return rotateLeft(rotated);
      }

      function checkGameOver() {
        for (let r = 0; r < GRID_SIZE; r++) {
          for (let c = 0; c < GRID_SIZE; c++) {
            if (board[r][c] === 0) return; // Empty spaces remain
            if (c < GRID_SIZE - 1 && board[r][c] === board[r][c + 1]) return; // Horizontal match
            if (r < GRID_SIZE - 1 && board[r][c] === board[r + 1][c]) return; // Vertical match
          }
        }
        setTimeout(() => alert(`Game Over! Final Score: ${score}`), 100);
      }