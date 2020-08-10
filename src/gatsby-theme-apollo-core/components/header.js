import breakpoints from 'gatsby-theme-apollo-core/src/utils/breakpoints'
import styled from '@emotion/styled'
import { colors } from 'gatsby-theme-apollo-core/src/utils/colors'
import wpgqlColors from '../../utils/colors'

export const headerHeight = 64
const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  height: '70px',
  padding: '0 24px',
  color: colors.white,
  backgroundColor: wpgqlColors.primary,
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: '0px',
})

export default Header

export const MobileHeader = styled(Header)({
  display: 'none',
  [breakpoints.md]: {
    display: 'flex',
  },
  borderBottom: '0px',
})

export const DesktopHeader = styled(Header)({
  [breakpoints.md]: {
    display: 'none',
  },
  borderBottom: '0px',
})
