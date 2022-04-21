// ! Select elements we need
const audioElem = document.querySelector('audio')
const buttonElem = document.querySelector('button')


// ! Add an event listener to my button
buttonElem.addEventListener('click', () => {
  // ! Set the src on the audio element
  // ! Playing the audio 
  if(audioElem.paused)
  {
    audioElem.play();
    buttonElem.innerHTML = "🔊"
  }
  else
  {
     audioElem.pause();
     buttonElem.innerHTML = "🔇"
  }
})