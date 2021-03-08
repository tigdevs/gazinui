# gazinui

> Interface based on Gazin's design system to React Applications.

[![NPM](https://img.shields.io/npm/v/gazinui.svg)](https://www.npmjs.com/package/@tigdevs/gazinui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install @tigdevs/gazinui
```

```bash
yarn add @tigdevs/gazinui
```

## Usage

First you need to wrap application in `GazinProvider` component.

```tsx
import React from 'react'
import ReactDOM from 'react-dom'

import { GazinProvider } from '@tigdevs/gazinui'
import { App } from './App'

ReactDOM.render((
  <GazinProvider>
    <App />
  </GazinProvider>
), document.getElementById('root'))
```

Then use all components available.

```tsx
import React from 'react'

import { GButton } from '@tigdevs/gazinui'

export const App = () => {
  return <GButton>Testando</GButton>
}
```

## Components

Our interface is a wrapper of [ChakraUI](https://chakra-ui.com/), you an use all components available in its [docs](https://chakra-ui.com/docs/getting-started).

## License

MIT © [Gazin](https://github.com/tigdevs)
