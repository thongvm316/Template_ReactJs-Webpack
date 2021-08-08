const plugins = []

// Cannot load "react-refresh/babel" in production
if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel')
}

module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: plugins,
}

//  { runtime: 'automatic' } // ? allow us no need import react to components, if need user useState or useEfect and so on... of React, just use "import { useState } from "react""
