let KoffingPosition = 37-width
let ArbokPosition = 52-width
let MeowthPosition = 289-width
let WobuffetPosition = 304-width

const ghostPokemons = ['Koffing', 'Arbok', 'Meowth', 'Wobuffet']
const ghostPosition = [KoffingPosition, ArbokPosition, MeowthPosition, WobuffetPosition]



//Ghost Functions

function addGhost(ghost, ghostPosition) {
  gridCount[ghostPosition].classList.add(ghost)
}

function removeGhost(ghost, ghostPosition) {
  gridCount[ghostPosition].classList.remove(ghost)
}

// Ghost variables

const ghostdirections = ['left', 'right', 'up', 'down']
const ghostkey = () => {
  return ghostdirections[Math.floor(Math.random() * ghostdirections.length)]
}


// keymovements of Ghost



// Consolidated Function for all Ghosts

const ghostintervall = setInterval(() => {

  // Remove Ghost


  // Add Ghost
  ghostPokemons.forEach((pokemon, index) => {
    // Remove Pokemon
    removeGhost(pokemon, ghostPosition[index])
    
    let x = ghostkey()

    if (x === 'left' && gridCount[ghostPosition[index] - 1].classList.contains('blank')) {
      ghostPosition[index] -= 1
      
    }
    else if (x === 'right' && gridCount[ghostPosition[index] + 1].classList.contains('blank')) {
      ghostPosition[index] += 1
      
      
    }
    else if (x === 'up' && gridCount[ghostPosition[index] - width].classList.contains('blank')) {
      ghostPosition[index] -= width
      
      
    }
    else if (x === 'down' && gridCount[ghostPosition[index] + width].classList.contains('blank')) {
      ghostPosition[index] += width
      
      
    }
    else {
      console.log(ghostkey)
      
    }

    // Add Pokemon
    addGhost(pokemon, ghostPosition[index])


  })

},800)

