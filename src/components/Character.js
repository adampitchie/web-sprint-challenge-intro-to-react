// Write your Character component here
import React from 'react'
import styled from 'styled-components'

export default function Character(props) {
  const {character} = props

  const StyledH3 = styled.h3`
    color: white
  `

  return (
    <StyledH3>{character.name}</StyledH3>
  )
}