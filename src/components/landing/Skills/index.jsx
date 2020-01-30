import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'components/common'
import programmer from "../../../assets/illustrations/programmer.svg"
import code_typing from "../../../assets/illustrations/code_typing.svg"
import cloud_hosting_aodd from "../../../assets/illustrations/cloud_hosting_aodd.svg"

import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <h1>Technologies We Work With</h1>
    </SkillsWrapper>
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={code_typing} alt="I’m Zahid and I’m a Blockchain & Data engineer!" />
      </Thumbnail>
      <Details>
        <h1>Languages</h1>
        <p>
        We are specialize in <b>Python</b>, <b>Javascript</b> and <b>Nodejs</b>
        </p>
      </Details>
    </SkillsWrapper>


    <SkillsWrapper as={Container}>
      <Details>
        <h1>Open Source</h1>
        <p>
        We have deep expertise in <b>Apache Spark</b>, <b>Apache Kafka</b>, <b>Tensorflow</b> and <b>Serverless</b> development
        </p>
      </Details>
      <Thumbnail>
        <img src={programmer} alt="I’m Zahid and I’m a Blockchain & Data engineer!" />
      </Thumbnail>
    </SkillsWrapper>


    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={cloud_hosting_aodd} alt="I’m Zahid and I’m a Blockchain & Data engineer!" />
      </Thumbnail>
      <Details>
        <h1>Platforms</h1>
        <p>
        We love <b>AWS Webservices</b>, <b>AWS Lambda</b> and <b>AWS SageMacker</b>
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
