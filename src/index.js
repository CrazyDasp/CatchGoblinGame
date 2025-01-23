import './styles.css'
import goblin from './img/Goblin.png'

document.addEventListener('DOMContentLoaded', () => {
  const board = document.getElementById('game-board')

  const cells = []
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    board.appendChild(cell)
    cells.push(cell)
  }

  const img = document.createElement('img')
  img.src = goblin
  img.alt = 'Goblin'
  let currentIndex = Math.floor(Math.random() * cells.length)
  cells[currentIndex].appendChild(img)

  setInterval(() => {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * cells.length)
    } while (newIndex === currentIndex)
    cells[newIndex].appendChild(img)
    currentIndex = newIndex
  }, 1000)
});
