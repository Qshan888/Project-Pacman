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
let evolvedStatus = false


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


//Function intervall for evovled pokemon

function evolvedPokemon2() {
  const evolvedPokemon = setInterval(() => {
    
    if (numTimesRun === 80) {
      clearInterval(intervalId)
    } else {
      numTimesRun = numTimesRun + 1
      removePokemon(pokemonPosition)
      pokemonStatus = "pokemon"
      leftTurn = 'runLeft'
      rightTurn = 'runRight'
      upTurn = 'runUp'
      downTurn = 'runDown'
      evolvedStatus = false
      addPokemon(pokemonPosition)
    }
  },10000)
}


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
    console.log(evolvedStatus)
  } else if (key === 'ArrowRight' && gridCount[pokemonPosition + 1].classList.contains('blank')) { // ! Right
    pokemonPosition += 1
    pokemonStatus = rightTurn
    console.log(evolvedStatus)
  } else if (key === 'ArrowUp' && gridCount[pokemonPosition - width].classList.contains('blank')) { // ! Up
    pokemonPosition -= width
    pokemonStatus = upTurn
    console.log(evolvedStatus)
  } else if (key === 'ArrowDown' && gridCount[pokemonPosition + width].classList.contains('blank')) { // ! Down
    pokemonPosition += width
    pokemonStatus = downTurn
    console.log(evolvedStatus)
  }

  addPokemon(pokemonPosition) // ! add pikachu back at the new position
  removePokeball(pokemonPosition)
  



  
  //ultraball Case
  if (gridCount[pokemonPosition].classList.contains('ultraPokeball')) {
    
    removeUltraball(pokemonPosition)
    removePokemon(pokemonPosition)
    
    //change pokemon variables
    leftTurn = 'runLeftEvolved'
    rightTurn = 'runRightEvolved'
    upTurn = 'runUpEvolved'
    downTurn = 'runDownEvolved'
    evolvedStatus = true

    console.log(pokemonStatus)
    addPokemon(pokemonPosition)
    evolvedPokemon2()
    console.log(evolvedStatus)
    
    
  }


  //Ghost Case Collusion

  if (pokemonPosition === ghostPosition[0]) {
    
    if (evolvedStatus === true) {
      removeGhost('Koffing', ghostPosition[0])
      ghostPosition[0] = 115
      
    }
    else {
      removePokemon(pokemonPosition)
      pokemonlives -= 1
      selectTarget.innerHTML = `${pokemonlives} / 3`
    }
  }

  if (pokemonPosition === ghostPosition[1]) {
    
    if (evolvedStatus === true) {
      removeGhost('Arbok', ghostPosition[1])
      ghostPosition[1] = 118
      
    }
    else {
      removePokemon(pokemonPosition)
      pokemonlives -= 1
      selectTarget.innerHTML = `${pokemonlives} / 3`
    }
    
  }

  if (pokemonPosition === ghostPosition[2]) {
    
    if (evolvedStatus === true) {
      removeGhost('Meowth', ghostPosition[2])
      ghostPosition[2] = 169
      
    }
    else {
      removePokemon(pokemonPosition)
      pokemonlives -= 1
      selectTarget.innerHTML = `${pokemonlives} / 3`
    }
  }

  if (pokemonPosition === ghostPosition[3]) {
    
    if (evolvedStatus === true) {
      removeGhost('Wobuffet', ghostPosition[3])
      ghostPosition[3] = 172
      
    }
    else {
      removePokemon(pokemonPosition)
      pokemonlives -= 1
      selectTarget.innerHTML = `${pokemonlives} / 3`
    }
  }


  // Lives Lost
  if (pokemonlives <= 0) {
    alert("Game Over, try again!");
    document.location.reload()
  }



  // completed game
  if (pokeballCount >= 148) {
    alert("Congratulations, you have completed Level 1");
    document.location.reload()
  }

})








