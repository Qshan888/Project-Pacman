// Select Dom

const grid = document.querySelector('.grid')
const selectTarget = document.querySelector('#targetNumber')
const gridCount = []
const selectHighScore = document.querySelector('#highScoreCount')

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
let pokemonlives = 3
let pokeballCount = 0

//evolved pokemon variables
let numTimesRun = 0
let leftTurn = 'runLeft'
let rightTurn = 'runRight'
let upTurn = 'runUp'
let downTurn = 'runDown'


function addPokemon() {
  gridCount[pokemonPosition].classList.add(pokemonStatus)
}

function removePokemon() {
  gridCount[pokemonPosition].classList.remove(pokemonStatus)
}

function removePokeball() {
    if (gridCount[pokemonPosition].classList.contains('pokeball')){
    gridCount[pokemonPosition].classList.remove('pokeball')
    pokeballCount += 1
    selectHighScore.innerHTML = `${pokeballCount}`
    }
}

function removeUltraball() {
    if (gridCount[pokemonPosition].classList.contains('ultraPokeball')){
    gridCount[pokemonPosition].classList.remove('ultraPokeball')
    pokeballCount += 4
    selectHighScore.innerHTML = `${pokeballCount}`
    }
}


//intervall for evovled pokemon

const evolvedPokemon = setInterval(() => {
    
    if (numTimesRun === 5) {
      clearInterval(intervalId)
    } else {
      numTimesRun = numTimesRun + 1
      removePokemon(pokemonPosition)
      pokemonStatus = "pokemon"
      leftTurn = 'runLeft'
      rightTurn = 'runRight'
      upTurn = 'runUp'
      downTurn = 'runDown'
      addPokemon(pokemonPosition)
      console.log('I want this to stop after 5 times.')
    }
  },6000)



// keymovements of Pokemon

addPokemon()

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
    pokemonStatus = leftTurn
  } else if (key === 'ArrowRight' && gridCount[pokemonPosition + 1].classList.contains('blank')) { // ! Right
    pokemonPosition += 1
    pokemonStatus = rightTurn
  } else if (key === 'ArrowUp' && gridCount[pokemonPosition - width].classList.contains('blank')) { // ! Up
    pokemonPosition -= width
    pokemonStatus = upTurn
  } else if (key === 'ArrowDown' && gridCount[pokemonPosition + width].classList.contains('blank')) { // ! Down
    pokemonPosition += width
    pokemonStatus = downTurn
  }

  addPokemon(pokemonPosition) // ! add pikachu back at the new position
  removePokeball(pokemonPosition)



  
  //ultraball Case
  if (gridCount[pokemonPosition].classList.contains('ultraPokeball')) {
    
    removeUltraball(pokemonPosition)
    removePokemon(pokemonPosition)
    
    //change pokemon variables
    pokemonStatus = "evolvedPokemon"
    leftTurn = 'runLeftEvolved'
    rightTurn = 'runRightEvolved'
    upTurn = 'runUpEvolved'
    downTurn = 'runDownEvolved'

    addPokemon(pokemonPosition)
    evolvedPokemon()
    
  }


  //Ghost Case Collusion

  if (pokemonPosition === ghostPosition[0] || pokemonPosition === ghostPosition[1] || pokemonPosition === ghostPosition[2] || pokemonPosition === ghostPosition[3]) {
    removePokemon(pokemonPosition)
    console.log('game ended')
    pokemonlives -= 1
    selectTarget.innerHTML = `${pokemonlives} / 3`
    console.log(pokemonlives)
    
  }


  if (pokemonlives <= 0) {
    alert("Game Over, try again!");
    document.location.reload()
  }



  if (pokeballCount >= 148) {
    alert("Congratulations, you have completed Level 1");
    document.location.reload()
  }

})



// Game Over




