import React from 'react'
import '../styles/index.scss'
import Recipes from './Recipes'
import sword from '../images/swc-sword.png'
import swordSvg from '../images/sword.svg'
// import _ from 'lodash'

// import * as _ from 'lodash'
// import camelCase from 'lodash/camelCase'

const App = () => {
  const [text, setText] = React.useState(null)
  // const showText = async () => {
  //   const { default: _ } = await import('lodash')
  //   setText(_.camelCase('wef wefwef'))
  // }

  const showText = () => {
    import('lodash').then(({ default: _ }) => {
      setText(_.camelCase('wef wefwef'))
    })
  }

  return (
    <>
      <section className='hero'></section>
      <main>
        <section>
          {/* <h1>Oh hai, {_.camelCase('minh thong')}</h1> */}
          {/* <h1>Oh hai, {camelCase('minh thong')}</h1> */}
          <button onClick={showText}>Button</button>
          {text ? text : null}
          <img src={sword} alt='sword' width='250' />
          <img src={swordSvg} alt='sword' width='250' />
          <Recipes />
        </section>
      </main>
    </>
  )
}

export default App
