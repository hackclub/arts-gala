import theme from '../lib/theme'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'

const waveFlag = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-5deg);
  }
`

const Base = styled('a')`
  background-image: url(https://assets.hackclub.com/flag-orpheus-top.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 10px;
  left: 24px;
  flex-shrink: 0;
  width: 112px;
  height: 48px;
  transition: ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1) transform;
  transform-origin: top left;
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 172px;
    height: 64px;
    left: 48px;
  }
  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus {
      animation: ${waveFlag} 0.5s linear infinite alternate;
    }
  }
`

const Flag = props => (
  <Base href="https://hackclub.com/" title="Homepage" {...props} />
)

export default Flag
