// Select Dom

const grid = document.querySelector('.grid')
const gridCount = []

//ultraball position
const ultraballPosition = []

console.log(grid)

// Grid Conditions
const width = 18
const cellCount = width * width

const level = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 4, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1,
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];


console.log(cellCount)

// Create Grid

function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    //cell.textContent = i
    grid.appendChild(cell)
    gridCount.push(cell)
    cell.classList.add('griddivs')

    if (level[i] === 1) {
      cell.classList.add('wall')
    }
    else if (level[i] === 0) {
      cell.classList.add('blank')
      cell.classList.add('pokeball')
    }
    else if (level[i] === 4) {
      cell.classList.add('blank')
      cell.classList.add('ultraPokeball')
      ultraballPosition.push(i)
    }
    
  }
}

createGrid()



// game variables

let pokemonPosition = 293
let pokemonStatus = "pokemon"


function addPokemon() {
  gridCount[pokemonPosition].classList.add(pokemonStatus)
}

function removePokemon() {
  gridCount[pokemonPosition].classList.remove(pokemonStatus)
}

function removePokeball() {
  gridCount[pokemonPosition].classList.remove('pokeball')
}

function removeUltraball() {
  gridCount[pokemonPosition].classList.remove('ultraPokeball')
}


//intervall for evovled pokemon

const evolvedPokemon = setTimeout(() => {
    removePokemon(pokemonPosition)
    pokemonStatus = "pokemon"
    addPokemon(pokemonPosition)
  },3000)

console.log(pokemonStatus)
console.log(ultraballPosition)

// keymovements of Pokemon

document.addEventListener('keyup', (event) => {

  removePokemon(pokemonPosition) // ! remove pikachu from the current position
  // ! Get the key the user pressed
  const key = event.code
  console.log(key)

  // ! rowPosition and colPosition
  const rowPosition = pokemonPosition % width
  const colPosition = Math.floor(pokemonPosition / width)

  if (key === 'ArrowLeft' && gridCount[pokemonPosition - 1].classList.contains('blank')) { // ! Left
    pokemonPosition -= 1
    pokemonStatus = "runLeft"
  } else if (key === 'ArrowRight' && gridCount[pokemonPosition + 1].classList.contains('blank')) { // ! Right
    pokemonPosition += 1
    pokemonStatus = "runRight"
  } else if (key === 'ArrowUp' && gridCount[pokemonPosition - width].classList.contains('blank')) { // ! Up
    pokemonPosition -= width
    pokemonStatus = "runUp"
  } else if (key === 'ArrowDown' && gridCount[pokemonPosition + width].classList.contains('blank')) { // ! Down
    pokemonPosition += width
    pokemonStatus = "runDown"
  }

  addPokemon(pokemonPosition) // ! add pikachu back at the new position
  removePokeball(pokemonPosition)



  //ultraball Case
  if (pokemonPosition === 37 || pokemonPosition === 52 || pokemonPosition === 289 || pokemonPosition === 304) {
    removeUltraball(pokemonPosition)
    removePokemon(pokemonPosition)
    pokemonStatus = "evolvedPokemon"
    addPokemon(pokemonPosition)
    evolvedPokemon()
    
  }


})



//GHOST Movements
