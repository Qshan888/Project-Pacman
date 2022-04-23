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

},1000)


/*

const ghostintervall = setInterval(() => {
  
  removeGhost('Koffing')
  
  let x = ghostkey()
  if (x === 'left' && gridCount[ghostPosition - 1].classList.contains('blank')) {
    ghostPosition -= 1
    console.log('it is left')
  }
  else if (x === 'right' && gridCount[ghostPosition + 1].classList.contains('blank')) {
    ghostPosition += 1
    console.log('it is right')
    
  }
  else if (x === 'up' && gridCount[ghostPosition - width].classList.contains('blank')) {
    ghostPosition -= width
    console.log('it is up')
    
  }
  else if (x === 'down' && gridCount[ghostPosition + width].classList.contains('blank')) {
    ghostPosition += width
    console.log('it is down')
    
  }
  else {
    console.log(ghostkey)
    
  }

  addGhost('Koffing')

},1000)




*/


/*

for (let i = 0; i < 10; i++) {
  removeGhost('Koffing')
  let x = ghostkey()
  if (x === 'left' && gridCount[ghostPosition - 1].classList.contains('blank')) {
    ghostPosition -= 1
    console.log('it is left')
    console.log('times' + i)
  }
  else if (x === 'right' && gridCount[ghostPosition + 1].classList.contains('blank')) {
    ghostPosition += 1
    console.log('it is right')
    console.log('times' + i)
  }
  else if (x === 'up' && gridCount[ghostPosition - width].classList.contains('blank')) {
    ghostPosition -= width
    console.log('it is up')
    console.log('times' + i)
  }
  else if (x === 'down' && gridCount[ghostPosition + width].classList.contains('blank')) {
    ghostPosition += width
    console.log('it is down')
    console.log('times' + i)
  }
  else {
    console.log(ghostkey)
    console.log('times' + i)
  }

  addGhost('Koffing')

}

*/


/*

if (ghostkey() === 'left') {
  console.log('it is left')
}
else if (ghostkey() === 'right'){
  console.log('it is right')
}
else if (ghostkey() === 'up'){
  console.log('it is up')
}
else if (ghostkey() === 'down'){
  console.log('it is down')
}
else {
  console.log(ghostkey)
}

*/




/*
while (pokemonlives > 0) {
  removeGhost('Koffing')
  ghostkey()
  if (ghostkey === 'left' && gridCount[ghostPosition - 1].classList.contains('blank')) { // ! Left
    ghostPosition -= 1
    
  } else if (ghostkey === 'right' && gridCount[ghostPosition + 1].classList.contains('blank')) { // ! Right
    ghostPosition += 1
    
  } else if (ghostkey === 'up' && gridCount[ghostPosition - width].classList.contains('blank')) { // ! Up
    ghostPosition -= width
    
  } else if (ghostkey === 'down' && gridCount[ghostPosition + width].classList.contains('blank')) { // ! Down
    ghostPosition += width
    
  }

  addGhost('Koffing')
}


*/

