import base from '@hackclub/theme'

export const palette = {
  darker: '#121217',
  dark: '#17171d',
  darkless: '#252429',
  black: '#1f2d3d',
  steel: '#273444',
  slate: '#3c4858',
  muted: '#8492a6',
  smoke: '#e0e6ed',
  snow: '#f9fafc',
  white: '#ffffff',
  fuschia: '#ff2467',
  pink: '#ff707a',
  lilac: '#849de1',
  yellow: '#ffaf26',
  light: '#ffeaeb',
  indigo: '#3b47a8',
  purple: '#8057c5',
  background: '#f6ece9'
}

const theme = {
  ...base,
  colors: {
    ...palette,
    text: palette.black,
    elevated: palette.light,
    elevatedText: palette.indigo,
    primary: palette.indigo,
    secondary: palette.pink,
    muted: palette.lilac,
    accent: palette.yellow,
    modes: {}
  },
  fonts: {
    display:
      'Roslindale, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    body:
      'Whyte, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
}

theme.styles.root = {
  ...theme.styles.root,
  borderStyle: 'solid',
  borderWidth: 10,
  borderColor: 'primary'
}

theme.cards.primary = {
  bg: 'elevated',
  color: 'text',
  p: 3,
  border: '1px dashed',
  borderColor: 'muted',
  overflow: 'hidden'
}

theme.text.title.fontFamily = 'display'
theme.text.headline.fontFamily = 'display'
theme.text.headline.fontSize = [4, 42]
theme.text.headline.pb = 1

export default theme
