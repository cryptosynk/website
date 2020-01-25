import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import zahid from "../../../images/zahid.png"
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={zahid} alt="I’m Zahid and I’m a Blockchain & Data engineer!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
        Hi, I'm Zahid. I specialize in Blockchain & Machine Learning Pipeline development.
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
