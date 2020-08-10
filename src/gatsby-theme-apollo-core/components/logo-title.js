import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  fontSize: 22,
  fontWeight: 600,
  color: '#21dbdb',
})

export const StyledLogo = styled.div({
  marginRight: 8,
  height: 36,
  fill: 'currentColor',
})

export default function LogoTitle(props) {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            src
            base64
          }
        }
      }
    }
  `)

  return (
    <Container className={props.className}>
      {!props.noLogo && !!file && (
        <img
          alt="Luxrobo Logo"
          style={{ marginRight: 10, maxWidth: 70 }}
          src={"https://d28pw7lag74to8.cloudfront.net/app/icon.png"}
        />
      )}
      {props.title}
    </Container>
  )
}

LogoTitle.propTypes = {
  noLogo: PropTypes.bool,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}
