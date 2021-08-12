import React from 'react'
import '../styles/index.scss'
import Recipes from './Recipes'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'

// import * as _ from 'lodash'
import camelCase from 'lodash/camelCase'

const App = () => {
  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          {/* <h1>Oh hai, {_.camelCase('minh thong')}</h1> */}
          <h1>Oh hai, {camelCase('minh thong')}</h1>
          <img src={sword} alt='sword' width='250' />
          <img src={swordSvg} alt='sword' width='250' />
          <Recipes />
        </section>
      </main>
    </>
  )
}

export default App
