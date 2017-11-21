const container = document.getElementById('root')
const infoDisplay = document.createElement('h4')
const p = document.createElement('p')

const greet = name => `Hey ${name}, how's it going?`

const [triggered,, blame] = ['ES6+ is Awesome!', 'Whaaaat??', 'Anonymous' ]

const whoSaidIt = {
    name: 'unknown',
    occupation: 'JS Guru'
}

const otherDetails = {
    info: 'This won\'t work in IE 11 unless transpiled...try it out!',
    ...whoSaidIt
}

container.innerText = triggered
infoDisplay.innerText = otherDetails.info
p.innerText = `-${otherDetails.name}`

container.appendChild(p)
container.appendChild(infoDisplay)

