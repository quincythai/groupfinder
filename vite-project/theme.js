// theme.js
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      // ...
      900: '#171923',
    },
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce', // This is the base blue color
      600: '#2b6cb0',
      700: '#2c5282',
      800: '#2a4365',
      900: '#1a365d',
    },

    // Our colors from Figma
    gold: 'FFC00E',
    cyan: '56ACE0',
    // ...
  },
})

export default theme
