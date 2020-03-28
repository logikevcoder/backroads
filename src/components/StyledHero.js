import React from "react"
import BackGroundImage from "gatsby-background-image"
import styled from "styled-components"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackGroundImage className={className} fluid={img} home={home}>
      {children}
    </BackGroundImage>
  )
}

export default styled(StyledHero)`
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
