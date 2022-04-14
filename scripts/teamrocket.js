let ghostPosition = 37-width


//Ghost Functions

function addGhost(ghost) {
  gridCount[ghostPosition].classList.add(ghost)
}

function removeGhost(ghost) {
  gridCount[ghostPosition].classList.remove(ghost)
}

// Ghost variables

const ghostdirections = ['left', 'right', 'up', 'down']
const ghostkey = () => {
  return ghostdirections[Math.floor(Math.random() * ghostdirections.length)]
}


// keymovements of Ghost

let pokemonlives = 3

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

