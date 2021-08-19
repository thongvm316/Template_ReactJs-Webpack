import { render } from 'react-dom'
import App from './components/App'

// import User, { printUser } from './dynamic.js'

// const user = new User('Kyle', 'Cook')

// printUser(user)

import('./dynamic.js').then(({ default: User, printUser }) => {
  const user = new User('Kyle', 'Cook')
  printUser(user)
})

render(<App />, document.getElementById('root'))
