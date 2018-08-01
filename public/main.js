const buttonClickEvent = () => {
  const randomPick = generateRandomNumber()
  console.log('clicked current number is ', randomPick)
  const newp = document.createElement('p')
    newp.textContent = randomPick
    const parent = document.querySelector('.result')
    parent.textContent = ''
    parent.appendChild(newp)
}

const generateRandomNumber = () => {
  return Math.ceil(Math.random() * 6)
}

document.querySelector('.click-here').addEventListener('click', buttonClickEvent)