import { GExtendTheme } from './g-extend-theme'

describe('GExtendTheme', () => {
  it('should executed correctly', () => {
    const theme = {
      colors: {
        test: '#00000'
      }
    }

    const extendedTheme = GExtendTheme(theme)

    expect(extendedTheme).toMatchObject(theme)
  })
})
