// import React from 'react'
import { Component } from 'react'

import '../styles/index.scss'
import Recipes from './Recipes'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

// const App = () => {
//   return (
//     <>
//       <section className='hero'></section>
//       <main>
//         <section>
//           <h1>Oh hai, Reactljnkjndsdsdsdkj</h1>
//           <img src={sword} alt='sword' width='250' />
//           <img src={swordSvg} alt='sword' width='250' />
//           <Recipes />
//         </section>
//       </main>
//     </>
//   )
// }

class App extends Component {
  render() {
    return (
      <>
        <section className='hero'></section>
        <main>
          <section>
            <h1>Oh hai, Reactljnkjndsdsdsdkj</h1>
            <img src={sword} alt='sword' width='250' />
            <img src={swordSvg} alt='sword' width='250' />
            <Recipes />
          </section>
        </main>
      </>
    )
  }
}

export default App