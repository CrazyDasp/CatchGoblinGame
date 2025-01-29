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
  img.classList.add("goblin")
  let currentIndex = Math.floor(Math.random() * cells.length)
  cells[currentIndex].appendChild(img)

  const counter = document.querySelector(".counter")
  let misses = 0

  function auto_switch() {
    let newIndex
    do {
      newIndex = Math.floor(Math.random() * cells.length)
    } while (newIndex === currentIndex)
    cells[currentIndex].classList.remove("active")
    cells[newIndex].appendChild(img)
    cells[newIndex].classList.add("active")
    
    currentIndex = newIndex
  }

  board.addEventListener("click", (event) => {
    if (event.target.classList.contains("goblin")) {
      counter.textContent++
      auto_switch()     
    } else {
      misses++
      event.target.style.backgroundColor = "red"
      setTimeout(() => {
        event.target.style.backgroundColor = "white"
      }, 100)
      if (misses == 5) {
        clearInterval(gameInterval)
        alert("You lose!")
        location.reload()
      }
    }
  })

  const gameInterval = setInterval(() => {
    auto_switch()

    if (!cells[currentIndex].contains(img)) {

      misses++

      cells[currentIndex].style.backgroundColor = "red"
      setTimeout(() => {
        cells[currentIndex].style.backgroundColor = "white"
      }, 100)
      if (misses == 5) {
        clearInterval(gameInterval)
        alert("You lose!")
        location.reload()
      }
    }
  }, 1000)
});
